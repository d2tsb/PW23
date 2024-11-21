
import { image_map } from "../../assets/image_source/image_map";
const LinkedInURL = "https://www.linkedin.com/in/tsbertram/";
const Profile = ({ language }: {language: number}) => {
  return (
    <div className="DataDivWrapper">
      <span className="DataDiv">
        {/**maybe think about refactoring - and build subclasses */}
        <img
          src={image_map.me}
          alt="Pictr. of Self"
          className="resize"
          style={{ marginBottom: "20px" }}
        />
        <div>
          <a href={LinkedInURL} style={{ width: "0px", marginRight: "10px" }}>
            <img
              src={image_map.linkedInLogo}
              style={{ width: "35px" }}
              // style={{ width: "4vh" }}
              className="LDinLogo"
              alt="linked in logo"
            ></img>

          </a>
          <a href={language ? "https://www.campudus.com/" : "https://www.campudus.com/en" } style={{ width: "0px" }}>
            <img
              src={image_map.campudusLogo}
              style={{ width: "35px", filter: "invert(0)" }}
              // style={{ width: "4vh" }}
              className="LDinLogo"
              alt="linked in logo"
            ></img>

          </a>
        </div>
        <div style={{ marginTop: "5px" }}>
          {language ? (
            <text>Fachrichtung: Informatik </text>
          ) : (
            <text>Major: Computer Science </text>
          )}
        </div>
        {language ? (
          <div>
            <text>Name: Tilman - Sören Bertram </text>
          </div>
        ) : (
          <div>
            <text>Full Name: Tilman - Sören Bertram </text>
          </div>
        )}
        <div>
          {language ? (
            <text>Geburtsdatum: 05.09.2001</text>
          ) : (
            <text>Birthdate: 09/05/2001</text>
          )}
        </div>
        <div>
          {language ? (
            <text>Ort: Bayern, Landshut</text>
          ) : (
            <text>Loc: Bavaria, Landshut</text>
          )}
        </div>
        <div>
          <text>Mail:</text>{" "}
          <a className="link_" href="mailto:tilmansoerenw@protonmail.com">
            tilmansoerenw@protonmail.com
          </a>
        </div>
        <div>
          <text> GitHub: </text>
          <a className="link_" href="https://github.com/d2tsb">
            d2tsb
          </a>
        </div>
        {language ? (
          <div>
            <text> Arbeit: </text>
            <a className="link_" href="https://www.campudus.com">
              Campudus Developers
            </a>
          </div>
        ) : (
          <div>
            <text> Work: </text>
            <a className="link_" href="https://www.campudus.com/en">
              Campudus Developers
            </a>
          </div>
        )}
      </span>
    </div>
  );
};

export default Profile; 