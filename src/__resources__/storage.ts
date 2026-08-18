/**
 * localStorage mit Ablaufzeit.
 *
 * localStorage ist die einzige Web-Storage-API ohne Ablaufmechanik - Cookies
 * haben Max-Age, der HTTP-Cache hat Cache-Control, sessionStorage stirbt mit
 * dem Tab. Diese Hülle legt den Ablaufzeitpunkt neben den Wert und prüft ihn
 * beim Lesen.
 *
 * Zwei Eigenschaften, die man kennen sollte:
 *   - Der Ablauf ist lazy. Ein Eintrag verschwindet erst, wenn jemand ihn
 *     liest; ungelesene Schlüssel bleiben liegen.
 *   - Er hängt an der Systemuhr. Als Sicherheitsgrenze taugt er nicht, nur als
 *     Bequemlichkeit.
 */

type Expiring<T> = { value: T; expiresAt: number };

const isExpiring = (raw: unknown): raw is Expiring<unknown> =>
  typeof raw === 'object' &&
  raw !== null &&
  'value' in raw &&
  typeof (raw as Expiring<unknown>).expiresAt === 'number';

/**
 * Die try/catch sind nicht kosmetisch: localStorage wirft, wenn Cookies
 * blockiert sind oder Safari im privaten Modus läuft.
 */
export const setWithTtl = <T>(key: string, value: T, ttlMs: number): void => {
  try {
    const entry: Expiring<T> = { value, expiresAt: Date.now() + ttlMs };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    /* Persistieren nicht möglich - kein Grund, die Seite zu brechen */
  }
};

/**
 * `isValid` prüft den gespeicherten Wert, statt ihn blind zu casten. Damit
 * fällt auch Altbestand in einem anderen Format sauber durch: Was nicht passt,
 * gilt als nicht vorhanden und wird entfernt.
 */
export const getWithTtl = <T>(key: string, isValid: (value: unknown) => value is T): T | null => {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;

    const parsed: unknown = JSON.parse(raw);

    // Bewusst als eine Bedingung: Über ein Zwischen-Boolean verliert
    // TypeScript die Verengung durch `isValid`, und `parsed.value` bliebe
    // `unknown`.
    if (!isExpiring(parsed) || Date.now() > parsed.expiresAt || !isValid(parsed.value)) {
      localStorage.removeItem(key);
      return null;
    }

    return parsed.value;
  } catch {
    // Defektes JSON landet ebenfalls hier.
    return null;
  }
};
