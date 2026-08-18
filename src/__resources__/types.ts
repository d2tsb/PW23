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
  language: string;
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
