import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./GithubCrawler.css";

/*crawls and shows the most recent Github repos that where pushed to*/

function AttributeValuePair(attrib, value) {
  return (
    <div>
      <text style={{color: '#AAA'}}>{attrib}</text>
      <text className="gitText">{value}</text>
    </div>
  );
}

const GithubCrawler = () => {
  const limit = 3;
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

  /*<text className="gitText">{item["id"]}</text>*/
  return (
    <div className="gitcraw">
      <ul className="gitul">
        {allrepos.length === 0 || allrepos === undefined ? (
          <p> No public repos yet. </p>
        ) : (
          allrepos.map((item, index) => (
            <li className="gitli" key={item}>
              {index >= limit ? null : (
                <div className="gitElement">
                  <div>
                    <a className="gitbutton" href={item["html_url"]}>
                      <img
                        className="gitimg"
                        src={require("./ressources/gitpic.png")}
                        alt="Github Symbol"
                        width={"30px"}
                      ></img>
                    </a>
                  </div>

                  <div className="gitimgdiv">
                    <div>{AttributeValuePair("Name: ", item["full_name"])}</div>
                    <div>{AttributeValuePair("Description: ", item["description"])}</div>
                    <div>{AttributeValuePair("Last Push: ", item["pushed_at"])}</div>

                 </div>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default GithubCrawler;
