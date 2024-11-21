import React from "react";
import "./BottomBar.scss";
import { Link } from "react-router-dom";
import { image_map } from "../../resources/image_source/image_map";

export const BottomBar = ({ language }) => {
  return (
    <div className="elf">
      <ul className="elfDiv ">
        <li className="elfLi">
          <Link className="elfLi" style={{ color: "#000" }} to="/Impressum">
            {language ? "Impressum" : "Legals"}
          </Link>
        </li>

        <div className="onHoverImgDiv">
          <a href={"https://github.com/d2tsb/PW23"} style={{ width: "30px" }}>
            <div className="divFlex">
              <img
                className="resizeBottomBarImage"
                src={image_map.githubLogo}
                alt="git logo "
              ></img>
              <text className="hide"> view source code.. </text>
            </div>
          </a>
        </div>
        {/*
        <li className="fnfDiv">
          <Link className="elfLi" style={{ color: "#000" }} to="/FNF">
            {"FNF"}
          </Link>
        </li> 
        */}
      </ul>
    </div>
  );
};
