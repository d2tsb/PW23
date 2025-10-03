import './Profile.scss';
import { useContext } from 'react';
import { PageContext } from '../Page/Page';
import {
  ProfilePicture,
  ProfileInfoMap,
  ProfileLogoSection,
  accumulateInfos,
} from './ProfileInfo/ProfileInfo';

const Profile = () => {
  const { language, year } = useContext(PageContext);
  const infos = accumulateInfos(year, language);
  return (
    <div className='profile'>
      <div className='profile__content'>
        <ProfilePicture />
        <ProfileLogoSection language={language} year={year} />
        <ProfileInfoMap infos={infos} />
      </div>
    </div>
  );
};

export default Profile;
