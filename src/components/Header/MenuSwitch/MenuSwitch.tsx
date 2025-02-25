import "./MenuSwitch.scss";
import { useContext } from "react";
import { Language, Year } from "../../../__resources__/types";
import { imageMap } from "../../../__resources__/imageMap";
import { PageContext } from "../../Page/Page";

const MenuSwitch = () => {
  const { setShowMenu, showMenu } = useContext(PageContext);
  return (
    <div onClick={() => setShowMenu(true)}>
      <img src={imageMap.menu} className="menu-switch" alt="sandwich" />
    </div>
  );
};
export default MenuSwitch;
