import { image_map } from "../../../assets/imageMap";
import AttributeValuePair from "../AttribValuePair/AttribValuePair";
const GithubCrawlerElement = ({ item }) => (
  /*sort element by push date*/
  <a className="" href={item["html_url"]}>
    {" "}
    <li className="gc__li" key={item}>
      <div className="gc__element">
        <div>
          <img
            className="gc__img"
            src={image_map.githubLogoTransparent}
            alt="Github Symbol"
            width={"30px"}
          ></img>
        </div>

        <div className="gc__div">
          <div>{AttributeValuePair("Name: ", item["full_name"])}</div>
          <div>{AttributeValuePair("Description: ", item["description"])}</div>
          <div>{AttributeValuePair("Last Push: ", item["pushed_at"])}</div>
          <div>{AttributeValuePair("Language: ", item["language"])}</div>
        </div>
      </div>
    </li>
  </a>
);

export default GithubCrawlerElement;
