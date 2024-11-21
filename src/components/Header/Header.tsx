import React, { useState } from "react";
import { image_map } from "../../resources/image_source/image_map";
import LightDarkSwitch from "../LightDarkSwitch/LightDarkSwitch";

const LinkedInURL = "https://www.linkedin.com/in/tsbertram/";
const Header = ({ language, setLanguage, DM }:
  {
    language: number,
    setLanguage: React.Dispatch<React.SetStateAction<number>>,
    DM: { colorTheme: number, setColorTheme: React.Dispatch<React.SetStateAction<number>> }

  }
) => {
  let title = "Personal Homepage";
  //title = "Personal Homepage: Tilman - Sören Bertram";
  const LDin = (
    <li>
      <a href={LinkedInURL}>
        <img
          style={{ width: "1.5rem" }}
          alt="linked in logo"
          src={image_map.linkedInLogo}
          className="LDinLogo"
        ></img>
      </a>
    </li>
  );
  <li>
    <LightDarkSwitch setValue={DM.setColorTheme} value={DM.colorTheme} />
  </li>;

  return (
    <header className="App-header">
      <div className="">
        <p className="TextSize">{title}</p>
        <ul className="languageMenu">
          <li
            className={!language ? "languageMenuliactive" : ""}
            onClick={() => {
              setLanguage(0);
            }}
          >
            EN
          </li>
          <li
            className={language ? "languageMenuliactive" : ""}
            onClick={() => {
              setLanguage(1);
            }}
          >
            DE
          </li>
        </ul>
      </div>
      <hr />
    </header>
  );
};
export default Header;