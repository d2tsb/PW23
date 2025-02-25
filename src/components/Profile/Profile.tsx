import "./Profile.scss";
import { imageMap } from "../../__resources__/imageMap";
import { useContext } from "react";
import { PageContext } from "../Page/Page";
import { Language, Year } from "../../__resources__/types";
import { match } from "ts-pattern";

const linkedInUrl = "https://www.linkedin.com/in/tsbertram/";

type ProfileAttributeTypes = "LINK" | "PAIR" | "GITHUB" | "MAIL";

type ProfileLinkProps = {
  attributeType: ProfileAttributeTypes;
  description?: string;
  url?: string;
  linkText?: string;
};
type ProfilePairProps = {
  attributeType: ProfileAttributeTypes;
  description?: string;
  value?: string;
};

const ProfileLink = ({ description, url, linkText }: ProfileLinkProps) => {
  return (
    <div>
      <span> {(description ?? "no description") + ": "} </span>
      <a className="profile__link" href={url ?? ""}>
        {linkText ?? "no link text"}
      </a>
    </div>
  );
};

const ProfilePair = ({
  description,
  value,
}: {
  description?: string;
  value?: string;
}) => {
  return (
    <div>
      <span> {(description ?? "no description") + ": "} </span>
      <span>{value ?? "no value"}</span>
    </div>
  );
};

const ProfileAttribute = (values: ProfileLinkProps | ProfilePairProps) => {
  return match(values.attributeType)
    .with("LINK", () => <ProfileLink {...values} />)
    .with("GITHUB", () => <ProfileLink {...values} />)
    .with("MAIL", () => <ProfileLink {...values} />)
    .with("PAIR", () => <ProfileLink {...values} />)
    .exhaustive();
};

type ProfileInfoType = {
  [key in Language]: {
    [key in Year]: {
      [key: string]: ProfileLinkProps | ProfilePairProps;
    };
  };
};

const ProfileInfo: ProfileInfoType = {
  de: {
    "2024": {
      name: {
        attributeType: "PAIR",
        description: "Name",
        value: "Tilman - Sören Bertram",
      },
      birthdate: {
        attributeType: "PAIR",
        description: "Geburtsdatum",
        value: "09.05.2001",
      },
      major: {
        attributeType: "PAIR",
        description: "Fachrichtung",
        value: "Informatik",
      },
      location: {
        attributeType: "PAIR",
        description: "Ort",
        value: "Bayern, Landshut",
      },
      mail: {
        attributeType: "MAIL",
        description: "Mail",
        url: "mailto:tilmansoerenw@protonmail.com",
        linkText: "tilmansoerenw@protonmail.com",
      },
      gitHub: {
        attributeType: "GITHUB",
        description: "GitHub",
        url: "https://www.github.com/d2tsb",
        linkText: "d2tsb",
      },
      work: {
        attributeType: "LINK",
        description: "Arbeit",
        url: "https://www.campudus.com",
        linkText: "Campudus Developers",
      },
    },
    "2025": {
      gitHub: {
        attributeType: "GITHUB",
        description: "GitHub",
        url: "https://www.github.com/dxdye",
        linkText: "dxdye",
      },
      gitHub2: {
        attributeType: "GITHUB",
        description: "GitHub2",
        url: "https://www.github.com/d2tsb",
        linkText: "d2tsb",
      },
    },
  },
  en: {
    "2024": {
      name: {
        attributeType: "PAIR",
        description: "Full Name",
        value: "Tilman - Sören Bertram",
      },
      birthdate: {
        attributeType: "PAIR",
        description: "Birthdate",
        value: "09/05/2001",
      },
      location: {
        attributeType: "PAIR",
        description: "Loc",
        value: "Bavaria, Landshut",
      },
      major: {
        attributeType: "PAIR",
        description: "Major",
        value: "Computer Science",
      },
      mail: {
        attributeType: "MAIL",
        description: "Mail",
        url: "mailto:tilmansoerenw@protonmail.com",
        linkText: "tilmansoerenw@protonmail.com",
      },
      gitHub: {
        attributeType: "GITHUB",
        description: "GitHub",
        url: "https://www.github.com/d2tsb",
        linkText: "d2tsb",
      },
      work: {
        attributeType: "LINK",
        description: "Work",
        url: "https://www.campudus.com/en",
        linkText: "Campudus Developers",
      },
    },
    "2025": {
      gitHub: {
        attributeType: "GITHUB",
        description: "GitHub",
        url: "https://www.github.com/dxdye",
        linkText: "dxdye",
      },
      gitHub2: {
        attributeType: "GITHUB",
        description: "GitHub2",
        url: "https://www.github.com/d2tsb",
        linkText: "d2tsb",
      },
    },
  },
};

const accumulateInfos = (selectedYear: Year, language: Language) => {
  const selectedYears = Object.keys(ProfileInfo[language]) as Year[];
  return Object.values(
    selectedYears
      .sort((x, y) => parseInt(x) - parseInt(y))
      .map((year) => {
        if (parseInt(year) <= parseInt(selectedYear)) {
          return ProfileInfo[language][year];
        }
        return {};
      })
      .reduce((x, y) => ({ ...x, ...y })),
  );
};

const Profile = () => {
  const { language, year } = useContext(PageContext);
  const infos = accumulateInfos(year, language);
  return (
    <div className="profile">
      <div className="profile__content">
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
        {infos.map((v) => ProfileAttribute(v))}
      </div>
    </div>
  );
};

export default Profile;
