import "./MenuSwitch.scss";
import { useContext } from "react";
import { Language, Year } from "../../../__resources__/types";
import { imageMap } from "../../../__resources__/imageMap";
import { PageContext } from "../../Page/Page";

export default () => {
  const { setShowMenu, showMenu } = useContext(PageContext);
  return (
    <div onClick={() => setShowMenu(!showMenu)}>
      <img src={imageMap.menu} className="menu-switch" />
    </div>
  );
};
