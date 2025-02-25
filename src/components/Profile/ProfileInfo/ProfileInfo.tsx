import { imageMap } from "../../../__resources__/imageMap";
import { Language, Year } from "../../../__resources__/types";
import { ProfileInfo, linkedInUrl } from "../../../__resources__/structure";
import {
  ProfileLinkProps,
  ProfilePairProps,
} from "../../../__resources__/types";
import { match } from "ts-pattern";

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
    .with("PAIR", () => <ProfilePair {...values} />)
    .with("LINK", () => <ProfileLink {...values} />)
    .with("GITHUB", () => <ProfileLink {...values} />)
    .with("MAIL", () => <ProfileLink {...values} />)
    .exhaustive();
  //maybe refactor later to use PREFIXs for the different types MAIL and GITHUB
};

export const accumulateInfos = (selectedYear: Year, language: Language) => {
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

export const ProfilePicture = () => {
  return <img src={imageMap.me} alt="me" className="profile__content--img" />;
};
export const ProfileLogoSection = ({ language }: { language: Language }) => {
  return (
    <div className="profile__logos">
      <a href={linkedInUrl}>
        <img
          src={imageMap.linkedInLogo}
          className="profile__logo"
          alt="linked in logo"
        ></img>
      </a>
      <a
        href={
          language ? "https://www.campudus.com/" : "https://www.campudus.com/en"
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
  );
};
export const ProfileInfoMap = ({
  infos,
}: {
  infos: (ProfileLinkProps | ProfilePairProps)[];
}) => {
  return infos.map((v) => ProfileAttribute(v));
};
