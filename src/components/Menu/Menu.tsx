import "./Menu.scss";
import { match } from "ts-pattern";
import type { Language, Year } from "../../__resources__/types";
import { PageContext } from "../Page/Page";
import { useState } from "react";
import { useContext } from "react";

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(PageContext);
  const switchLanguage = (
    languageName: string,
    languageIdentifier: Language,
  ) => (
    <div
      onClick={() => setLanguage(languageIdentifier)}
      className={
        "menu-language-element " +
        (language === languageIdentifier ? " menu-language--selected" : "")
      }
    >
      {languageName}
    </div>
  );
  const languageMenuElements = [
    switchLanguage("Deutsch", "de"),
    switchLanguage("English", "en"),
  ];

  const description = match(language)
    .with("de", () => "Sprache:")
    .with("en", () => "Language:")
    .exhaustive();

  return (
    <div className="menu-language">
      <p> {description}</p>
      <div className="menu-language-elements">{languageMenuElements}</div>
    </div>
  );
};

const YearSwitch = () => {
  const { year, setYear, language } = useContext(PageContext);
  const switchYear = (yearName: string, yearIdentifier: Year) => (
    <div
      onClick={() => setYear(yearIdentifier)}
      className={
        "menu-year-element " +
        (year === yearIdentifier ? " menu-year--selected" : "")
      }
    >
      {yearName}
    </div>
  );
  const languageMenuElements = [
    switchYear("No. 2025", "2025"),
    switchYear("No. 2024", "2024"),
  ];

  const description = match(language)
    .with("de", () => "Jahr:")
    .with("en", () => "Year:")
    .exhaustive();

  return (
    <div className="menu-year">
      <p>{description}</p>
      <div className="menu-year-elements">{languageMenuElements}</div>
    </div>
  );
};

const MenuCanvas = () => {
  const [revealMenu, setRevealMenu] = useState<string>("");
  const { showMenu } = useContext(PageContext);
  const show = (showMenu: boolean) => {
    setTimeout(() => {
      setRevealMenu(" menu-show");
    }, 500); //could do without
    return showMenu ? "menu-canvas" : "";
  };

  return (
    <div className={show(showMenu) + revealMenu}>
      <div className="menu-canvas-content">
        <LanguageSwitch />
        <YearSwitch />
      </div>
    </div>
  );
};

export default MenuCanvas;
