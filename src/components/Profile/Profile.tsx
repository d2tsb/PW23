import "./Profile.scss";
import { imageMap } from "../../resources/imageMap";
const linkedInUrl = "https://www.linkedin.com/in/tsbertram/";

const Profile = ({ language }: { language: number }) => {
  return (
    <div className="profile">
      <span className="profile__content">
        <img src={imageMap.me} alt="me" className="profile__content--img" />
        <div>
          <a href={linkedInUrl}>
            <img
              src={imageMap.linkedInLogo}
              className="profile__logo"
              alt="linked in logo"
            ></img>
          </a>
          <a
            href={
              language
                ? "https://www.campudus.com/"
                : "https://www.campudus.com/en"
            }
            style={{ width: "0px" }}
          >
            <img
              src={imageMap.campudusLogo}
              style={{ filter: "invert(0)" }}
              className="profile__logo"
              alt="campudus logo"
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
          <text>Mail:</text>
          <a
            className="profile__link"
            href="mailto:tilmansoerenw@protonmail.com"
          >
            tilmansoerenw@protonmail.com
          </a>
        </div>
        <div>
          <text> GitHub: </text>
          <a className="profile__link" href="https://github.com/d2tsb">
            d2tsb
          </a>
        </div>
        {language ? (
          <div>
            <text> Arbeit: </text>
            <a className="profile__link" href="https://www.campudus.com">
              Campudus Developers
            </a>
          </div>
        ) : (
          <div>
            <text> Work: </text>
            <a className="profile__link" href="https://www.campudus.com/en">
              Campudus Developers
            </a>
          </div>
        )}
      </span>
    </div>
  );
};

export default Profile;
