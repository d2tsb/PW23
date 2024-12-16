import "./BottomBar.scss";
import { Link } from "react-router-dom";
import { image_map } from "../../assets/imageMap";

export const BottomBar = ({ language }: { language: number }) => (
  <div className="bottom-bar">
    <ul className="bottom-bar__elements">
      <li className="bottom-bar__element">
        <Link
          className="bottom-bar__element"
          style={{ color: "#000" }}
          to="/impressum"
        >
          {language ? "Impressum" : "Legals"}
        </Link>
      </li>

      <div className="onHoverImgDiv">
        <a href={"https://github.com/d2tsb/PW23"} style={{ width: "30px" }}>
          <div className="bottom-bar__image-div">
            <img
              className="bottom-bar__image"
              src={image_map.githubLogo}
              alt="git logo "
            ></img>
            <text className="bottom-bar__hide"> view source code.. </text>
          </div>
        </a>
      </div>
    </ul>
  </div>
);
