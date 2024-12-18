import { imageMap } from "../../../__resources__/imageMap";
import { GithubCrawlerInfo } from "../../../__resources__/types";
import AttributeValuePair from "../AttribValuePair/AttribValuePair";

const GithubCrawlerElement = ({ element }: { element: GithubCrawlerInfo }) => (
  /*sort element by push date*/
  <a href={element["html_url"]}>
    <li className="gc__li" key={element.html_url}>
      <div className="gc__element">
        <div>
          <img
            className="gc__img"
            src={imageMap.githubLogoTransparent}
            alt="Github Symbol"
            width={"30px"}
          ></img>
        </div>

        <div className="gc__div">
          <div>{AttributeValuePair("Name: ", element["full_name"])}</div>
          <div>
            {AttributeValuePair("Description: ", element["description"])}
          </div>
          <div>{AttributeValuePair("Last Push: ", element["pushed_at"])}</div>
          <div>{AttributeValuePair("Language: ", element["language"])}</div>
        </div>
      </div>
    </li>
  </a>
);

export default GithubCrawlerElement;
