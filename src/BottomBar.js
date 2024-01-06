import React from "react";
import "./css/cssdark/BottomBar.css";
import { Link } from "react-router-dom";

export const BottomBar = () => {
  return (
    <div className="elf">
      <ul className="elfDiv ">
        <li className="elfLi"> 
          <Link className="elfLi" style={{color: "#000"}} to="/Impressum">
            Impressum
          </Link> 
        </li>
        <div
          className="onHoverImgDiv"
        >
          <a href={"https://github.com/d2tsb/PW23"}>
            <div className="divFlex">
              <img
                className="resizeBottomBarImage"
                src={require("./ressources/github_PNG80.png")}
                alt="git logo "
              ></img>
              <text className="hide"> view source code.. </text>
  


            </div>
         </a>
        </div>
      </ul>
    </div>
  );
};
