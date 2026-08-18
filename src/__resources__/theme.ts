import { Theme } from './types';

const STORAGE_KEY = 'pw23:theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

const isTheme = (value: unknown): value is Theme => value === 'light' || value === 'dark';

/**
 * Die explizite Wahl des Benutzers, falls eine getroffen wurde.
 * Der try/catch ist nicht kosmetisch: localStorage wirft, wenn Cookies blockiert
 * sind oder Safari im privaten Modus läuft.
 */
export const readStoredTheme = (): Theme | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
};

/** Nur bei bewusster Wahl aufrufen, nicht beim Rendern - siehe initialTheme. */
export const storeTheme = (theme: Theme): void => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* Persistieren nicht möglich - kein Grund, die Seite zu brechen */
  }
};

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
