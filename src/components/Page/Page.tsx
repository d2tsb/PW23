import Texts from "../Texts/Texts";
import GithubCrawler from "../GithubCrawler/GithubCrawler";
import { BottomBar } from "../BottomBar/BottomBar";
import CopyRight from "../CopyRight/CopyRight";
import Profile from "../Profile/Profile";
import { useState } from "react";
import Header from "../Header/Header";
import { image_map } from "../../assets/imageMap";
import "./Page.scss";
const Page = () => {
  const [Language, setLanguage] = useState<number>(0);
  const [colorTheme, setColorTheme] = useState<number>(0); //0 is dark, 1 is high.
  const gif = (
    <div className="page__gif">
      <img
        className="page__gif--content"
        alt="GIF"
        src={image_map.topBanner}
      ></img>
    </div>
  );

  return (
    <div data-role="page" className="page__properties">
      <div className="page__frame">
        <Header
          language={Language}
          setLanguage={setLanguage}
          DM={{ colorTheme, setColorTheme }}
        />
        {gif}
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
