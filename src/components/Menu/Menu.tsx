import "./Menu.scss";
import { match } from "ts-pattern";
import type { Language, Year } from "../../__resources__/types";
import { PageContext } from "../Page/Page";
import { useContext } from "react";
import { imageMap } from "../../__resources__/imageMap";

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
const MenuSubmit = () => {
  const { setShowMenu } = useContext(PageContext);
  return (
    <div className="menu-submit">
      <button
        className="menu-submit--button"
        onClick={() => setShowMenu(false)}
      >
        <img src={imageMap.submit} alt="submit" />
      </button>
    </div>
  );
};

const MenuCanvas = () => {
  const { showMenu } = useContext(PageContext);
  return (
    showMenu && (
      <div className="menu-canvas">
        <div className="menu-canvas-content">
          <LanguageSwitch />
          <YearSwitch />
          <MenuSubmit />
        </div>
      </div>
    )
  );
};

export default MenuCanvas;
