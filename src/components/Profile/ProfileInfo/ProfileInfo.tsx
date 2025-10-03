import { imageMap } from '../../../__resources__/imageMap';
import { AccountLink, Language, Year } from '../../../__resources__/types';
import {
  ProfileInfo,
  accountLinks,
  linkedInUrl,
  schoolUrl,
} from '../../../__resources__/structure';
import { ProfileLinkProps, ProfilePairProps } from '../../../__resources__/types';
import { match } from 'ts-pattern';
import { PageContext } from '../../Page/Page';
import { useContext } from 'react';

const ProfileLink = ({ description, url, linkText }: ProfileLinkProps) => {
  return (
    <div>
      <span> {(description ?? 'no description') + ': '} </span>
      <a className='profile__link' href={url ?? ''}>
        {linkText ?? 'no link text'}
      </a>
    </div>
  );
};

const ProfilePair = ({ description, value }: { description?: string; value?: string }) => {
  return (
    <div>
      <span> {(description ?? 'no description') + ': '} </span>
      <span>{value ?? 'no value'}</span>
    </div>
  );
};

const ProfileAttribute = (values: ProfileLinkProps | ProfilePairProps) => {
  return match(values.attributeType)
    .with('PAIR', () => <ProfilePair {...values} />)
    .with('LINK', () => <ProfileLink {...values} />)
    .with('GITHUB', () => <ProfileLink {...values} />)
    .with('MAIL', () => <ProfileLink {...values} />)
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
  const { showMenu } = useContext(PageContext);
  return (
    <img
      src={imageMap.me}
      alt='me'
      className={
        showMenu ? 'profile__content--img profile__content--hide' : 'profile__content--img '
      }
    />
  );
};

const ProfileLogo =
  ({ urlDest, imageLink, invert, alt }: AccountLink) =>
  (language: Language) => (
    <a
      href={match(language)
        .with('en', () => urlDest.en ?? urlDest.de)
        .otherwise(() => urlDest.de)}
    >
      <img
        src={imageLink}
        style={!invert ? { filter: 'invert(0)' } : {}}
        className='profile__logo'
        alt={alt}
      ></img>
    </a>
  );

export const ProfileLogoSection = ({ language, year }: { language: Language; year: Year }) => {
  return (
    <div className='profile__logos'>
      {accountLinks[year].map((acl) => ProfileLogo(acl)(language))}
    </div>
  );
};
export const ProfileInfoMap = ({
  infos,
}: {
  infos: (ProfileLinkProps | ProfilePairProps | undefined)[];
}) => {
  return infos.filter((v) => v !== undefined).map((v) => ProfileAttribute(v));
};
