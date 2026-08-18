import Texts from '../Texts/Texts';
import GithubCrawler from '../GithubCrawler/GithubCrawler';
import { BottomBar } from '../BottomBar/BottomBar';
import CopyRight from '../CopyRight/CopyRight';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { imageMap } from '../../__resources__/imageMap';
import { Language, SetState, Theme, Year } from '../../__resources__/types';
import { initialTheme, watchPreferredTheme } from '../../__resources__/theme';
import './Page.scss';
import './color.scss';
import { createContext } from 'react';

interface PageProps {
  colorTheme: Theme;
  language: Language;
  showMenu: boolean;
  year: Year;
  setColorTheme: SetState<Theme>;
  setLanguage: SetState<Language>;
  setShowMenu: SetState<boolean>;
  setYear: SetState<Year>;
}

export const PageContext = createContext<PageProps>({
  colorTheme: 'light',
  language: 'de',
  showMenu: false,
  year: '2026',
  setColorTheme: () => {},
  setShowMenu: () => {},
  setLanguage: () => {},
  setYear: () => {},
});

const Page = () => {
  const [Language, setLanguage] = useState<Language>('de');
  // Lazy initializer: liest localStorage und Systemeinstellung genau einmal.
  const [colorTheme, setColorTheme] = useState<Theme>(initialTheme);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [year, setYear] = useState<Year>('2026');

  // Folgt dem System, solange keine eigene Wahl im localStorage steht.
  useEffect(() => watchPreferredTheme(setColorTheme), []);
  const gif = (
    <div className='page__gif'>
      <img className='page__gif--content' alt='moving wallpaper' src={imageMap.topBanner}></img>
    </div>
  );
  const pageClass = `page__properties ${colorTheme}`;

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
      <div data-role='page' className={pageClass}>
        <Menu />
        <div className='page__frame ' onClick={() => (showMenu ? setShowMenu(false) : null)}>
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
