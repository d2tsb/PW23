import Texts from "../Texts/Texts";
import GithubCrawler from "../GithubCrawler/GithubCrawler";
import { BottomBar } from "../BottomBar/BottomBar";
import CopyRight from "../CopyRight/CopyRight";
import Profile from "../Profile/Profile";
import { useState } from "react";
import Header from "../Header/Header";
import { imageMap } from "../../__resources__/imageMap";
import { Language, SetState } from "../../__resources__/types";
import "./Page.scss";
import { createContext } from "react";

interface PageProps {
  colorTheme: number;
  setColorTheme: SetState<number>;
  language: Language;
  setLanguage: SetState<Language>;
}

export const PageContext = createContext<PageProps>({
  colorTheme: 0,
  setColorTheme: () => {},
  language: "de",
  setLanguage: () => {},
});

const Page = () => {
  const [Language, setLanguage] = useState<Language>("de");
  const [colorTheme, setColorTheme] = useState<number>(0); //0 is dark, 1 is high.
  const gif = (
    <div className="page__gif">
      <img
        className="page__gif--content"
        alt="GIF"
        src={imageMap.topBanner}
      ></img>
    </div>
  );

  return (
    <PageContext.Provider
      value={{ colorTheme, setColorTheme, language: Language, setLanguage }}
    >
      <div data-role="page" className="page__properties">
        <div className="page__frame">
          <Header />
          {gif}
          <Profile />
          <Texts />
          <GithubCrawler />
          <BottomBar />
          <CopyRight />
        </div>
      </div>
    </PageContext.Provider>
  );
};
export default Page;
