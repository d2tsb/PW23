import "./Profile.scss";
import { imageMap } from "../../__resources__/imageMap";
import { useContext } from "react";
import { PageContext } from "../Page/Page";
import { Language, Year } from "../../__resources__/types";
import { match } from "ts-pattern";
import {
  ProfilePicture,
  ProfileInfoMap,
  ProfileLogoSection,
  accumulateInfos,
} from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  const { language, year } = useContext(PageContext);
  const infos = accumulateInfos(year, language);
  return (
    <div className="profile">
      <div className="profile__content">
        <ProfilePicture />
        <ProfileLogoSection language={language} />
        <ProfileInfoMap infos={infos} />
      </div>
    </div>
  );
};

export default Profile;
