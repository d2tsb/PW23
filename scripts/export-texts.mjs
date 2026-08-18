/**
 * Erzeugt public/texts.json aus src/__resources__/text/TextsWritten.ts.
 *
 * Die Texte liegen bewusst nicht im Repository (.gitignore). Damit sie
 * trotzdem ausgeliefert werden, wandern sie in eine JSON-Datei, die das
 * Frontend zur Laufzeit holt - das Bundle kennt sie nicht mehr, und ein
 * sauberer Checkout baut ohne sie durch.
 *
 *   node scripts/export-texts.mjs
 *
 * Die erzeugte Datei liegt in public/, damit der Vite-Dev-Server sie unter
 * /texts.json ausliefert. In Produktion kommt sie stattdessen per nginx-alias
 * aus /var/lib/pw23-texts - siehe nixos-work/modules/web.nix.
 *
 * Die TypeScript-Datei wird bewusst NICHT direkt importiert. Node kann das
 * zwar seit 22.18 ohne Flag (Type Stripping), aber davor scheitert es mit
 * `ERR_UNKNOWN_FILE_EXTENSION` - und welches node im PATH liegt, haengt an
 * Shell, direnv und nix-shell. Der Umweg ueber Vites eigenen Transformer
 * funktioniert unabhaengig davon, und Vite ist ohnehin Voraussetzung fuer
 * den Build.
 *
 * transformWithOxc, nicht transformWithEsbuild: Vite 8 nutzt Oxc, und die
 * esbuild-Variante ist deprecated und verlangt esbuild als eigenes Paket.
 */

import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

import { transformWithOxc } from 'vite';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, '../src/__resources__/text/TextsWritten.ts');
const target = resolve(here, '../public/texts.json');

const raw = await readFile(source, 'utf8').catch((error) => {
  if (error.code === 'ENOENT') {
    console.error(`Nicht gefunden: ${source}`);
    console.error('Die Datei ist gitignoriert und auf einem frischen Checkout nicht vorhanden.');
  } else {
    console.error(`Konnte ${source} nicht lesen: ${error.message}`);
  }
  process.exit(1);
});

// TypeScript -> JavaScript, dann ueber eine temporaere Datei importieren.
// Ein data:-URL-Import ginge auch, scheitert aber an relativen Imports im
// Quelltext; eine echte Datei behaelt den Modulkontext.
const { code } = await transformWithOxc(raw, source, { lang: 'ts' });

const scratch = await mkdtemp(join(tmpdir(), 'pw23-texts-'));
const compiled = join(scratch, 'texts.mjs');

try {
  await writeFile(compiled, code, 'utf8');
  const { textsWritten } = await import(pathToFileURL(compiled).href);

  // Kein Pretty-Print: Die Datei wird ausgeliefert, nicht gelesen.
  const json = JSON.stringify(textsWritten);
  await writeFile(target, json, 'utf8');

  console.log(target);
  console.log(
    `  ${json.length.toLocaleString('de-DE')} B, Jahre: ${Object.keys(textsWritten.about).join(', ')}`,
  );
} finally {
  await rm(scratch, { recursive: true, force: true });
}
