import "./MenuSwitch.scss";
import { useContext } from "react";
import { imageMap } from "../../../__resources__/imageMap";
import { PageContext } from "../../Page/Page";

const Sandwich = () => (
  <div className="sandwich">
    <div className="sandwich-element" />
    <div className="sandwich-element" />
    <div className="sandwich-element" />
  </div>
);
const MenuSwitch = () => {
  const { setShowMenu, showMenu } = useContext(PageContext);
  const selected = showMenu ? "menu-switch--selected" : "";
  return (
    <div onClick={() => setShowMenu(true)} className={selected}>
      <Sandwich />
    </div>
  );
};
export default MenuSwitch;
