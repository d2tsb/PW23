import './GithubCrawler.scss';
import GithubCrawlerElement from './GithubCrawlerElement/GithubCrawlerElement';
import { CachedResponse, GithubCrawlerInfo } from '../../__resources__/types';
import { useState, useEffect, useRef } from 'react';
import { getData } from '../../__resources__/helper';
import { sequentialize } from 'pragmatic-fp-ts';

/*
 *description: crawls and shows the most recent Github repos that where pushed to
 */

const GithubCrawler = () => {
  const limit = 5;
  const [repos, setRepos] = useState<GithubCrawlerInfo[]>([]);
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current!);
      }
    });

    observer.observe(domRef.current!);
  }, []);
  useEffect(() => {
    //this can all be one layed out function
    const accounts = ['d2tsb', 'dxdye']; //maybe refactor this later.. (redundant)
    // Primaerquelle: das eigene Backend. Es cacht die GitHub-Antwort und haelt
    // sie ueber ETags aktuell. nginx schneidet /api/ ab, beim Dienst kommt
    // /github/:account/repos an (siehe modules/pw23-be.nix).
    const buildApiUrl = (account: string) => `/api/github/${account}/repos`;
    // Rueckfallebene: GitHub direkt. Greift in der lokalen Entwicklung ohne
    // laufendes pw23-be und wenn das Backend in Produktion nicht antwortet.
    // Kein Nachteil beim Rate-Limit: das Backend arbeitet ebenfalls ohne Token,
    // und ohne Backend zaehlt der Aufruf gegen die IP des Besuchers.
    const buildGithubUrl = (account: string) => `https://api.github.com/users/${account}/repos`;
    // Faellt ein Account komplett aus, bleiben die uebrigen sichtbar -
    // statt einer leeren Sektion.
    const fetchAccount = (account: string): Promise<GithubCrawlerInfo[]> =>
      getData<CachedResponse<GithubCrawlerInfo[]>>(buildApiUrl(account))
        .then((response) => response.data ?? [])
        .catch(() => getData<GithubCrawlerInfo[]>(buildGithubUrl(account)))
        .catch(() => []);
    const getInfos = async (accounts: string[]) => {
      const repos = await sequentialize(fetchAccount, accounts);
      setRepos(repos.flat());
    };
    getInfos(accounts);
  }, []);

  return (
    <div ref={domRef} className={isVisible ? 'gc is-visible ' : 'gc'}>
      <ul className='gc__ul'>
        {!(repos.length === 0 || repos === undefined) &&
          repos
            .sort((a, b) => new Date(b['pushed_at']).getTime() - new Date(a['pushed_at']).getTime())
            .filter((a) => a['language'] !== null)
            .slice(0, limit)
            .map((item) => <GithubCrawlerElement element={item} />)}
      </ul>
    </div>
  );
};

export default GithubCrawler;
