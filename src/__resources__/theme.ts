import { getWithTtl, setWithTtl } from './storage';
import { Theme } from './types';

const STORAGE_KEY = 'pw23:theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

/**
 * Die Wahl überlebt einen Tag, danach greift wieder die Systemeinstellung.
 * Absolut gerechnet ab dem Klick, nicht gleitend: Wer täglich vorbeischaut,
 * muss die Wahl trotzdem alle 24 Stunden erneut treffen.
 */
const THEME_TTL_MS = 24 * 60 * 60 * 1000;

const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark';

/** Die explizite Wahl des Benutzers, sofern getroffen und noch nicht abgelaufen. */
export const readStoredTheme = (): Theme | null => getWithTtl(STORAGE_KEY, isTheme);

/** Nur bei bewusster Wahl aufrufen, nicht beim Rendern - siehe initialTheme. */
export const storeTheme = (theme: Theme): void => setWithTtl(STORAGE_KEY, theme, THEME_TTL_MS);

export const nextTheme = (current: Theme): Theme => (current === 'dark' ? 'light' : 'dark');

/** Systemeinstellung; ohne matchMedia-Unterstützung hell. */
export const preferredTheme = (): Theme =>
  window.matchMedia?.(DARK_QUERY).matches ? 'dark' : 'light';

/** Gespeicherte Wahl schlägt Systemeinstellung. */
export const initialTheme = (): Theme => readStoredTheme() ?? preferredTheme();

/**
 * Folgt der Systemeinstellung, solange der Benutzer keine eigene Wahl getroffen hat.
 * Gibt die Abmeldefunktion zurück.
 */
export const watchPreferredTheme = (onChange: (theme: Theme) => void): (() => void) => {
  const query = window.matchMedia?.(DARK_QUERY);
  if (!query) return () => undefined;

  const handler = (event: MediaQueryListEvent) => {
    if (readStoredTheme()) return;
    onChange(event.matches ? 'dark' : 'light');
  };

  query.addEventListener('change', handler);
  return () => query.removeEventListener('change', handler);
};
