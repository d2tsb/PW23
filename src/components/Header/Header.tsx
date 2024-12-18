import { useContext } from "react";
import { PageContext } from "../Page/Page";
import "./Header.scss";

const Header = () => {
  const { language, setLanguage } = useContext(PageContext);

  const title = "Personal Homepage";
  const handleLanguageSwitch = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  return (
    <header className="header">
      <div>
        <p className="header__text">{title}</p>
        <ul className="header__language-menu">
          <li
            className={
              (!language ? "header__language-menu--active " : "") +
              "header__language-menu--li"
            }
            onClick={handleLanguageSwitch}
          >
            EN
          </li>
          <li
            className={
              (language ? "header__language-menu--active " : "") +
              "header__language-menu--li"
            }
            onClick={handleLanguageSwitch}
          >
            DE
          </li>
        </ul>
      </div>
      <hr />
    </header>
  );
};
export default Header;
