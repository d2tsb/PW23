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
    // Backend statt api.github.com: der Token liegt damit serverseitig und das
    // Rate-Limit steigt von 60 auf 5000 Requests/Stunde. nginx schneidet /api/ ab,
    // beim Backend kommt /github/:account/repos an.
    const buildUrl = (account: string) => `/api/github/${account}/repos`;
    // Faellt ein Account aus, bleiben die uebrigen sichtbar - statt einer leeren Sektion.
    const fetchAccount = (account: string) =>
      getData<CachedResponse<GithubCrawlerInfo[]>>(buildUrl(account))
        .then((response) => response.data ?? [])
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
