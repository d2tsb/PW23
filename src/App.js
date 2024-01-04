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
import CodePic from "./ressources/SC01.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const LinkedInURL = "https://www.linkedin.com/in/tsbertram/"
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
        <a href={LinkedInURL}>
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
          <text> GitHub: </text>
          <a className="link_" href="https://github.com/d2tsb">
            d2tsb
          </a>
        </div>
      </span>
    </div>
  );
};
const Header = ({ language, setLanguage }) => {
  let title = "Personal Homepage";
  //title = "Personal Homepage: Tilman - Sören Bertram";
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
        <p className="TextSize">{title}</p>
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
      <img 
      className="styleGIF" 
      alt="G I F"
      src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXk2NnJocnlxMDF2ZDZwcmFnMWRtbmFlMnE3Y2l0bTZkNXJoY3ZpdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zx1KzuQBR8wIbrm81t/giphy.gif"></img>

        <Profile language={Language} />
        <Texts language={Language} />
        <img src={CodePic} className="styleCodePic" alt="Pic of Code"></img>
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
