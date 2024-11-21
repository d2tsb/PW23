import { image_map } from "../resources/image_source/image_map";
import "./App.scss";
import "./Texts/Texts";
import "./GithubCrawler/GithubCrawler";
import "./BottomBar/BottomBar";
import "./CopyRight/CopyRight";
import Texts from "./Texts/Texts";
import LightDarkSwitch from "./LightDarkSwitch/LightDarkSwitch";
import GithubCrawler from "./GithubCrawler/GithubCrawler";
import { BottomBar } from "./BottomBar/BottomBar";
import CopyRight from "./CopyRight/CopyRight";
import React, { useState } from "react";
//import GIFSrc3 from "./ressources/bgif.jpeg"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FNF from "../fnf/FNF";

const LinkedInURL = "https://www.linkedin.com/in/tsbertram/";
const Profile = ({ language }: {language: string}) => {
  return (
    <div className="DataDivWrapper">
      <span className="DataDiv">
        {/**maybe think about refactoring - and build subclasses */}
        <img
          src={image_map.me}
          alt="Pictr. of Self"
          className="resize"
          style={{ marginBottom: "20px" }}
        />
        <div>
          <a href={LinkedInURL} style={{ width: "0px", marginRight: "10px" }}>
            <img
              src={image_map.linkedInLogo}
              style={{ width: "35px" }}
              // style={{ width: "4vh" }}
              className="LDinLogo"
              alt="linked in logo"
            ></img>

          </a>
          <a href={language ? "https://www.campudus.com/" : "https://www.campudus.com/en" } style={{ width: "0px" }}>
            <img
              src={image_map.campudusLogo}
              style={{ width: "35px", filter: "invert(0)" }}
              // style={{ width: "4vh" }}
              className="LDinLogo"
              alt="linked in logo"
            ></img>

          </a>
        </div>
        <div style={{ marginTop: "5px" }}>
          {language ? (
            <text>Fachrichtung: Informatik </text>
          ) : (
            <text>Major: Computer Science </text>
          )}
        </div>
        {language ? (
          <div>
            <text>Name: Tilman - Sören Bertram </text>
          </div>
        ) : (
          <div>
            <text>Full Name: Tilman - Sören Bertram </text>
          </div>
        )}
        <div>
          {language ? (
            <text>Geburtsdatum: 05.09.2001</text>
          ) : (
            <text>Birthdate: 09/05/2001</text>
          )}
        </div>
        <div>
          {language ? (
            <text>Ort: Bayern, Landshut</text>
          ) : (
            <text>Loc: Bavaria, Landshut</text>
          )}
        </div>
        <div>
          <text>Mail:</text>{" "}
          <a className="link_" href="mailto:tilmansoerenw@protonmail.com">
            tilmansoerenw@protonmail.com
          </a>
        </div>
        <div>
          <text> GitHub: </text>
          <a className="link_" href="https://github.com/d2tsb">
            d2tsb
          </a>
        </div>
        {language ? (
          <div>
            <text> Arbeit: </text>
            <a className="link_" href="https://www.campudus.com">
              Campudus Developers
            </a>
          </div>
        ) : (
          <div>
            <text> Work: </text>
            <a className="link_" href="https://www.campudus.com/en">
              Campudus Developers
            </a>
          </div>
        )}
      </span>
    </div>
  );
};
const Header = ({ language, setLanguage, DM }:
  {
    language: string,
    setLanguage: React.Dispatch<React.SetStateAction<string>>,
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
  // const LightDarkSwitchLi = //unused
  // (
  <li>
    <LightDarkSwitch setValue={DM.setColorTheme} value={DM.colorTheme} />
  </li>;
  // );

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

const Page = () => {
  const [Language, setLanguage] = useState(0);
  const [colorTheme, setColorTheme] = useState(0); //0 is dark, 1 is high.
  const GIF = (
    <div className="styleGIFPic">
      <img //unused
        id="styleGIF"
        className="styleGIF"
        alt="G I F"
        src={image_map.topBanner}
      ></img>
    </div>
  );

  return (
    <div data-role="page" className="App">
      <div
        className="Frame"
        //style={colorTheme ? { backgroundColor: "#AAA" } : null}
      >
        <Header
          language={Language}
          setLanguage={setLanguage}
          DM={{ colorTheme, setColorTheme }}
        />
        {GIF}
        <Profile language={Language} />
        <Texts language={Language} />
        <GithubCrawler />
        <BottomBar language={Language} />
        <CopyRight />
      </div>
    </div>
  );
};

const Impressum = () => {
  return (
    <div>
      <div style={{ color: "#FFF", height: "70px" }}>Impressum</div>
      <ul className="ulImpressum">
        <li style={{ color: "#FFF" }}>
          reactjs: https://opensource.fb.com/legal/terms or opensource@meta.com{" "}
        </li>
        <li style={{ color: "#FFF" }}>
          linkedin: https://www.linkedin.com/legal/impressum
        </li>
        <li style={{ color: "#FFF" }}>
          giphy:
          https://support.giphy.com/hc/en-us/sections/360003012792-Privacy-and-Safety
        </li>
      </ul>
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="Impressum" element={<Impressum />} />
        <Route path="FNF" element={<FNF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
