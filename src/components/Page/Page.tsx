import Texts from "../Texts/Texts";
import LightDarkSwitch from "../LightDarkSwitch/LightDarkSwitch";
import GithubCrawler from "../GithubCrawler/GithubCrawler";
import { BottomBar } from "../BottomBar/BottomBar";
import CopyRight from "../CopyRight/CopyRight";
import Profile from "../Profile/Profile";
import React, { useState } from "react";
import Header from "../Header/Header";
import { image_map } from "../../assets/image_source/image_map";
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
export default Page; 