import { useContext } from "react";
import { PageContext } from "../Page/Page";
import "./Header.scss";
import { Language } from "../../__resources__/types";
import MenuSwitch from "./MenuSwitch/MenuSwitch";

const Header = () => {
  const { language, setLanguage } = useContext(PageContext);

  const title = "Personal Homepage";
  return (
    <header className="header">
      <div className="header__elements">
        <p className="header__text">{title}</p>
        <MenuSwitch />
      </div>
    </header>
  );
};
export default Header;
