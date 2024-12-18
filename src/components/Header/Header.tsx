import { useContext } from "react";
import { PageContext } from "../Page/Page";
import "./Header.scss";
import { Language } from "../../__resources__/types";

const Header = () => {
  const { language, setLanguage } = useContext(PageContext);

  const title = "Personal Homepage";
  const matchLanguage = (key: Language, value: Language) =>
    key === value
      ? "header__language-menu--active header__language-menu--li"
      : "header__language-menu--li";

  return (
    <header className="header">
      <div>
        <p className="header__text">{title}</p>
        <ul className="header__language-menu">
          <li
            className={matchLanguage(language, "en")}
            onClick={() => setLanguage("en")}
          >
            EN
          </li>
          <li
            className={matchLanguage(language, "de")}
            onClick={() => setLanguage("de")}
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
