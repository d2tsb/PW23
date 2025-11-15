import React from 'react';

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type Language = 'en' | 'de';
export type Year = '2025' | '2024';

export type GithubCrawlerInfo = {
  html_url: string;
  full_name: string;
  description: string;
  pushed_at: string;
  language: string;
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
