import "./MenuSwitch.scss";
import { useContext } from "react";
import { PageContext } from "../../Page/Page";

const Sandwich = ({ showCross }: { showCross?: boolean }) => {
  const crossTop = showCross ? "sandwich-element--top" : "";
  const crossMiddle = showCross ? "sandwich-element--middle" : "";
  const crossBottom = showCross ? "sandwich-element--bottom " : "";
  return (
    <div className="sandwich">
      <div className={"sandwich-element " + crossTop} />
      <div className={"sandwich-element " + crossMiddle} />
      <div className={"sandwich-element " + crossBottom} />
    </div>
  );
};

const MenuSwitch = () => {
  const { setShowMenu, showMenu, year } = useContext(PageContext);
  return (
    <div className="menu-switch">
      <div className="menu-switch-year" onClick={() => null}>
        {year}
      </div>
      <div onClick={() => setShowMenu(!showMenu)}>
        <Sandwich showCross={showMenu} />
      </div>
    </div>
  );
};
export default MenuSwitch;
