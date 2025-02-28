import "./GithubCrawler.scss";
import GithubCrawlerElement from "./GithubCrawlerElement/GithubCrawlerElement";
import { GithubCrawlerInfo } from "../../__resources__/types";
import { useState, useEffect, useRef } from "react";
import { getData } from "../../__resources__/helper";

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
    //this may be get refactored
    const accounts = ["d2tsb", "dxdye"];
    const buildUrl = (account: string) =>
      `https://api.github.com/users/${account}/repos`;
    const getInfos = async (accounts: string[]) => {
      accounts.map((account) =>
        getData<GithubCrawlerInfo[]>(buildUrl(account)).then((data) => {
          setRepos([...repos, ...data]);
        }),
      );
    };
    getInfos(accounts);
  }, []);

  return (
    <div ref={domRef} className={isVisible ? "gc is-visible " : "gc"}>
      <ul className="gc__ul">
        {!(repos.length === 0 || repos === undefined) &&
          repos
            .sort(
              (a, b) =>
                new Date(b["pushed_at"]).getTime() -
                new Date(a["pushed_at"]).getTime(),
            )
            .filter((a) => a["language"] !== null)
            .slice(0, limit)
            .map((item) => <GithubCrawlerElement element={item} />)}
      </ul>
    </div>
  );
};

export default GithubCrawler;
