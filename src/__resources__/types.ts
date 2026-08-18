import React from 'react';

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type Language = 'en' | 'de';
export type Year = '2026' | '2025' | '2024';
export type Theme = 'light' | 'dark';

export type GithubCrawlerInfo = {
  html_url: string;
  full_name: string;
  description: string;
  pushed_at: string;
  /** Groesste Sprache - was GitHub in der Repo-Liste allein mitliefert. */
  language: string;
  /**
   * Vollstaendige Verteilung in Bytes, vom Backend nachgereicht.
   * `null` heisst "noch nicht geholt", nicht "keine Sprachen" - die Angabe
   * kostet dort einen eigenen Request je Repository und wird gedrosselt
   * ergaenzt.
   */
  languages?: Record<string, number> | null;
};

/**
 * Antwortform von GET /api/github/:account/repos (pw23-BE, src/app.ts).
 * Die GitHub-Nutzdaten liegen unter `data`, der Rest beschreibt den Cache.
 */
export type CachedResponse<T> = {
  account: string;
  url: string;
  /** ISO-8601 */
  updatedAt: string;
  /** true = Cache abgelaufen, GitHub war beim Auffrischen nicht erreichbar */
  stale: boolean;
  count: number;
  data: T;
};

/**
 * Inhalt von /texts.json. Bewusst durchgehend `Partial`: Das ist zur Laufzeit
 * geholtes JSON, keine mitkompilierte Konstante - fehlende Jahre oder Sprachen
 * sind ein moeglicher Zustand und muessen am Verwendungsort abgefangen werden.
 */
export type TextsWritten = {
  about: Partial<Record<Year, Partial<Record<Language, string>>>>;
  focus: Partial<Record<Year, Partial<Record<Language, string>>>>;
};

export type ProfileAttributeTypes = 'LINK' | 'PAIR' | 'GITHUB' | 'MAIL';

export type ProfileLinkProps = {
  attributeType: ProfileAttributeTypes;
  description?: string;
  url?: string;
  linkText?: string;
};

export type ProfilePairProps = {
  attributeType: ProfileAttributeTypes;
  description?: string;
  value?: string;
};

export type ProfileInfoType = {
  [key in Language]: {
    [key in Year]: {
      [key: string]: ProfileLinkProps | ProfilePairProps | undefined;
    };
  };
};

export type AccountLink = {
  imageLink: string;
  alt: string;
  urlDest: {
    en?: string;
    de: string;
  };
  invert?: boolean;
  height?: string;
  width?: string;
  title?: string;
};

export type AccountLinks = {
  [key in Year]: AccountLink[];
};
