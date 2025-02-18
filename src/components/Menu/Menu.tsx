import "./Menu.scss";
import type { Language, Year } from "../../__resources__/types";
import { useState } from "react";
import { PageContext } from "../Page/Page";
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

  return (
    <div className="menu-language">
      <p>Language: </p>
      <div className="menu-language-elements">{languageMenuElements}</div>
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
      </div>
    </div>
  );
};

export default MenuCanvas;
