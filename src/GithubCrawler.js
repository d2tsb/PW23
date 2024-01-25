import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./css/cssdark/GithubCrawler.css";

/*crawls and shows the most recent Github repos that where pushed to*/

function AttributeValuePair(attrib, value) {
  return (
    <div>
      <text style={{ color: "#AAA" }}>{attrib}</text>
      <text className="gitText" style={{ color: "#FFF" }}>
        {value}
      </text>
    </div>
  );
}

const GithubCrawler = () => {
  // const block = ["gifs", ""];
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

  /*<text className="gitText">{item["id"]}</text>*/
  // <text style={{marginRight: "calc(100% - 60px)"}}>List of Github repos: (ordered by last Push) </text>
  return (
    <div className="gitcraw">
      <ul className="gitul">
        {allrepos.length === 0 || allrepos === undefined
          ? null
          : allrepos
              .sort((a, b) => a["pushed_at"] < b["pushed_at"])
              .filter(
                (a) =>
                  a["language"] != null 
              )
              .slice(0, limit)
              .map((item, index) => (
                /*sort element by push date*/
                <a className="" href={item["html_url"]}>
                  {" "}
                  <li className="gitli" key={item}>
                    <div className="gitElement">
                      <div>
                        <img
                          className="gitimg"
                          src={require("./ressources/gitpic.png")}
                          alt="Github Symbol"
                          width={"30px"}
                        ></img>
                      </div>

                      <div className="gitdiv">
                        <div>
                          {AttributeValuePair("Name: ", item["full_name"])}
                        </div>
                        <div>
                          {AttributeValuePair(
                            "Description: ",
                            item["description"]
                          )}
                        </div>
                        <div>
                          {AttributeValuePair("Last Push: ", item["pushed_at"])}
                        </div>
                        <div>
                          {AttributeValuePair("Language: ", item["language"])}
                        </div>
                      </div>
                    </div>
                  </li>
                </a>
              ))}
      </ul>
    </div>
  );
};

export default GithubCrawler;
