import { useState } from "react";
import { useEffect } from "react";
import "./GithubCrawler.scss";
import GithubCrawlerElement from "./GithubCrawlerElement/GithubCrawlerElement";

/*
 *description: crawls and shows the most recent Github repos that where pushed to
 */

const GithubCrawler = () => {
  const limit = 5;
  const [allrepos, setAllRepos] = useState([""]);
  useEffect(() => {
    const url = "https://api.github.com/users/d2tsb/repos";
    fetch(url) //fetch API
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((res) => setAllRepos(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="gc">
      <ul className="gc__ul">
        {!(allrepos.length === 0 || allrepos === undefined) &&
          allrepos
            .sort((a, b) => a["pushed_at"] < b["pushed_at"])
            .filter((a) => a["language"] != null)
            .slice(0, limit)
            .map((item) => <GithubCrawlerElement item={item} />)}
      </ul>
    </div>
  );
};

export default GithubCrawler;
