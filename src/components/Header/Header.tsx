import LightDarkSwitch from "../LightDarkSwitch/LightDarkSwitch";
import "./Header.scss";

const Header = ({
  language,
  setLanguage,
  DM,
}: {
  language: number;
  setLanguage: React.Dispatch<React.SetStateAction<number>>;
  DM: {
    colorTheme: number;
    setColorTheme: React.Dispatch<React.SetStateAction<number>>;
  };
}) => {
  const title = "Personal Homepage";
  <li>
    <LightDarkSwitch setValue={DM.setColorTheme} value={DM.colorTheme} />
  </li>;
  const handleLanguageSwitch = () => {
    setLanguage((prev) => (prev === 0 ? 1 : 0));
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
