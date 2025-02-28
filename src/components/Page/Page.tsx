import Texts from '../Texts/Texts';
import GithubCrawler from '../GithubCrawler/GithubCrawler';
import { BottomBar } from '../BottomBar/BottomBar';
import CopyRight from '../CopyRight/CopyRight';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import { useState } from 'react';
import Header from '../Header/Header';
import { imageMap } from '../../__resources__/imageMap';
import { Language, SetState, Year } from '../../__resources__/types';
import './Page.scss';
import { createContext } from 'react';

interface PageProps {
  colorTheme: number;
  language: Language;
  showMenu: boolean;
  year: Year;
  setColorTheme: SetState<number>;
  setLanguage: SetState<Language>;
  setShowMenu: SetState<boolean>;
  setYear: SetState<Year>;
}

export const PageContext = createContext<PageProps>({
  colorTheme: 0,
  language: 'de',
  showMenu: false,
  year: '2025',
  setColorTheme: () => {},
  setShowMenu: () => {},
  setLanguage: () => {},
  setYear: () => {},
});

const Page = () => {
  const [Language, setLanguage] = useState<Language>('de');
  const [colorTheme, setColorTheme] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [year, setYear] = useState<Year>('2025');
  const gif = (
    <div className='page__gif'>
      <img className='page__gif--content' alt='moving wallpaper' src={imageMap.topBanner}></img>
    </div>
  );

  return (
    <PageContext.Provider
      value={{
        year,
        showMenu,
        colorTheme,
        language: Language,
        setColorTheme,
        setLanguage,
        setShowMenu,
        setYear,
      }}
    >
      <div data-role='page' className='page__properties'>
        <Menu />
        <div className='page__frame'>
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
