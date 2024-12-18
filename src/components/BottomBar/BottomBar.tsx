import "./BottomBar.scss";
import { Link } from "react-router-dom";
import { imageMap } from "../../__resources__/imageMap.ts";
import { PageContext } from "../Page/Page.tsx";
import { useContext } from "react";
import { bottomBarOptions } from "../../__resources__/structure.ts";

export const BottomBar = () => {
  const { language } = useContext(PageContext);
  return (
    <div className="bottom-bar">
      <ul className="bottom-bar__elements">
        <li className="bottom-bar__element">
          <Link
            className="bottom-bar__element"
            style={{ color: "#000" }}
            to="/impressum"
          >
            {bottomBarOptions[language]}
          </Link>
        </li>

        <div className="onHoverImgDiv">
          <a href={"https://github.com/d2tsb/PW23"} style={{ width: "30px" }}>
            <div className="bottom-bar__image-div">
              <img
                className="bottom-bar__image"
                src={imageMap.githubLogo}
                alt="git logo "
              ></img>
              <text className="bottom-bar__hide"> view source code.. </text>
            </div>
          </a>
        </div>
      </ul>
    </div>
  );
};
