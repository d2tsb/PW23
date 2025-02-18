import React from "react";

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type Language = "en" | "de";
export type Year = "2025" | "2024";

export type GithubCrawlerInfo = {
  html_url: string;
  full_name: string;
  description: string;
  pushed_at: string;
  language: string;
};
