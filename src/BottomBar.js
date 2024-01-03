import React from "react";
import "./BottomBar.css";

export const BottomBar = () => {
  return (
    <div className="elf">
      <ul className="elfDiv ">
        <li className="elfLi">Impressium</li>
        <div>
          <a href={"https://github.com/d2tsb"}>
            <img
              className="resizeBottomBarImage"
              src={require("./ressources/github_PNG80.png")}
              alt="git logo picture"
            ></img>
          </a>
        </div>
        <li></li>
      </ul>
    </div>
  );
};
