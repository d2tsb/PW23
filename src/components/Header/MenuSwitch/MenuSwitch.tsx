import "./MenuSwitch.scss";
import { useContext } from "react";
import { imageMap } from "../../../__resources__/imageMap";
import { PageContext } from "../../Page/Page";

const MenuSwitch = () => {
  const { setShowMenu, showMenu } = useContext(PageContext);
  const selected = showMenu ? "menu-switch--selected" : "";
  return (
    <div onClick={() => setShowMenu(true)}>
      <img
        src={imageMap.menu}
        className={"menu-switch " + selected}
        alt="sandwich"
      />
    </div>
  );
};
export default MenuSwitch;
