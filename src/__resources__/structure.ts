import { imageMap } from './imageMap';
import { AccountLinks, ProfileInfoType } from './types';

export const menuBarOptions = {
  en: ['About', 'Preferences and Focus', 'History'],
  de: ['Übersicht', 'Fokus', 'Werdegang'],
};

export const bottomBarOptions = {
  en: 'Legals',
  de: 'Impressum',
};

export const lifeLineDescriptions = {
  en: [
    '2001: *',
    '2011: Entering Highschool',
    '2017: Secondary school-leaving Certificate (Mittlere Reife)',
    '2019: High school diploma (Abitur)& Economy Studies',
    '2020: Computer-Science Studies',
    '2024: Webdeveloper at Campudus Developers',
  ],
  de: [
    '2001: *',
    '2011: Eintritt Gymnasium',
    '2017: Mittlere Reife',
    '2019: Abitur, Studium BWL',
    '2020: Studium Informatik',
    '2024: Webdeveloper at Campudus Developers',
  ],
};
export const ProfileInfo: ProfileInfoType = {
  de: {
    '2024': {
      name: {
        attributeType: 'PAIR',
        description: 'Name',
        value: 'Tilman - Sören Bertram',
      },
      birthdate: {
        attributeType: 'PAIR',
        description: 'Geburtsdatum',
        value: '05.09.2001',
      },
      major: {
        attributeType: 'PAIR',
        description: 'Fachrichtung',
        value: 'Informatik',
      },
      location: {
        attributeType: 'PAIR',
        description: 'Ort',
        value: 'Bayern, Landshut',
      },
      mail: {
        attributeType: 'MAIL',
        description: 'Mail',
        url: 'mailto:tilmansoerenw@ürtonmail.com',
        linkText: 'tilmansoerenw@protonmail.com',
      },
      gitHub: {
        attributeType: 'GITHUB',
        description: 'GitHub',
        linkText: 'd2tsb',
      },
      work: {
        attributeType: 'LINK',
        description: 'Arbeit',
        url: 'https://www.campudus.com',
        linkText: 'Campudus Developers',
      },
    },
    '2025': {
      gitHub: {
        attributeType: 'GITHUB',
        description: 'GitHub',
        url: 'https://www.github.com/dxdye',
        linkText: 'dxdye',
      },
      gitHub2: {
        attributeType: 'GITHUB',
        description: 'GitHub (privat)',
        url: 'https://www.github.com/d2tsb',
        linkText: 'd2tsb',
      },
      work: undefined,
    },
  },
  en: {
    '2024': {
      name: {
        attributeType: 'PAIR',
        description: 'Full Name',
        value: 'Tilman - Sören Bertram',
      },
      birthdate: {
        attributeType: 'PAIR',
        description: 'Birthdate',
        value: '09/05/2001',
      },
      location: {
        attributeType: 'PAIR',
        description: 'Loc',
        value: 'Bavaria, Landshut',
      },
      major: {
        attributeType: 'PAIR',
        description: 'Major',
        value: 'Computer Science',
      },
      mail: {
        attributeType: 'MAIL',
        description: 'Mail',
        url: 'mailto:tilmansoerenw@protonmail.com',
        linkText: 'tilmansoerenw@protonmail.com',
      },
      gitHub: {
        attributeType: 'GITHUB',
        description: 'GitHub',
        url: 'https://www.github.com/d2tsb',
        linkText: 'd2tsb',
      },
      work: {
        attributeType: 'LINK',
        description: 'Work',
        url: 'https://www.campudus.com/en',
        linkText: 'Campudus Developers',
      },
    },
    '2025': {
      gitHub: {
        attributeType: 'GITHUB',
        description: 'GitHub',
        url: 'https://www.github.com/dxdye',
        linkText: 'dxdye',
      },
      gitHub2: {
        attributeType: 'GITHUB',
        description: 'GitHub (private)',
        url: 'https://www.github.com/d2tsb',
        linkText: 'd2tsb',
      },
      work: undefined,
    },
  },
};

export const linkedInUrl = 'https://www.linkedin.com/in/tsbertram/';
export const schoolUrl = 'https://www.haw-landshut.de/';
export const awsBadgeCredlyUrl =
  'https://www.credly.com/badges/d98f62d3-8d8e-446d-b945-583e67d83da5/public_url';

export const accountLinks: AccountLinks = {
  2025: [
    {
      imageLink: imageMap.linkedInLogo,
      urlDest: {
        de: linkedInUrl,
      },
      invert: true,
      alt: 'linkedin logo',
    },
    {
      imageLink: imageMap.hawLogo,
      urlDest: {
        de: schoolUrl,
      },
      alt: 'haw logo',
    },
    {
      imageLink: imageMap.creedlyAwsCloudFoundations,
      urlDest: {
        de: awsBadgeCredlyUrl,
      },
      alt: 'aws badge logo',
      height: '42px',
      width: '42px',
      bigZoom: true,
    },
  ],
  2024: [
    {
      imageLink: imageMap.linkedInLogo,
      invert: true,
      urlDest: {
        de: linkedInUrl,
      },
      alt: 'linkedin logo',
    },
    {
      imageLink: imageMap.hawLogo,
      urlDest: {
        de: schoolUrl,
      },
      alt: 'haw logo',
    },
    {
      imageLink: imageMap.campudusLogo,
      urlDest: {
        de: 'https://www.campudus.com/',
        en: 'https://www.campudus.com/en',
      },
      alt: 'campudus logo',
    },
  ],
};
