import "./App.css";
import "./Texts";
import "./GithubCrawler";
import "./BottomBar";
import "./CopyRight";
import Texts from "./Texts";
import GithubCrawler from "./GithubCrawler";
import { BottomBar } from "./BottomBar";
import CopyRight from "./CopyRight";
import { useState } from "react";
import LinkedInLogo from "./ressources/ldin.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Profile = ({ language }) => {
  return (
    <div className="DataDivWrapper">
      <span className="DataDiv">
        <img
          src={require("./ressources/pictureMe.png")}
          alt="Pictr. of Self"
          className="resize"
          style={{ marginBottom: "20px" }}
        />
        <a href={""}>
          <img
            src={LinkedInLogo}
            style={{ width: "3vh" }}
            className="LDinLogo"
          ></img>
        </a>

        <div style={{ marginTop: "5px" }}>
          {language ? (
            <text>Fachrichtung: Informatik </text>
          ) : (
            <text>Profession: Computer Science </text>
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
            <text>Geburt: 05-09-2001</text>
          ) : (
            <text>Birth: 09-05-2001</text>
          )}
        </div>

        <text>Loc: Bavaria, Landshut</text>
        <div>
          <text>Mail:</text>{" "}
          <a className="link_" href="mailto:tilmansoerenw@protonmail.com">
            tilmansoerenw@protonmail.com
          </a>
        </div>
        <div>
          <text> Github: </text>
          <a className="link_" href="https://github.com/d2tsb">
            d2tsb
          </a>
        </div>
      </span>
    </div>
  );
};
const Header = ({ language, setLanguage }) => {
  const LinkedInURL = "";
  const LDin = (
    <li>
      <a href={LinkedInURL}>
        <img
          src={LinkedInLogo}
          style={{ width: "1.5rem" }}
          className="LDinLogo"
        ></img>
      </a>
    </li>
  );
  return (
    <header className="App-header">
      <div className="">
        <p className="TextSize">Personal Homepage</p>
        <ul className="languageMenu">
          {LDin}
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
  return (
    <div data-role="page" className="App">
      <div className="Frame">
        <Header language={Language} setLanguage={setLanguage} />
        <Profile language={Language} />
        <Texts language={Language} />
        <GithubCrawler />
        <BottomBar />
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
        <li style={{ color: "#FFF" }}>reactjs</li>
        <li style={{ color: "#FFF" }}>linkedin</li>
      </ul>
    </div>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="Impressum" element={<Impressum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
