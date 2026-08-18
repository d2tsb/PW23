import { imageMap } from '../../__resources__/imageMap';
import { PageContext } from '../Page/Page';
import { useContext } from 'react';
import { nextTheme, storeTheme } from '../../__resources__/theme';
import './LightDarkSwitch.scss';

const LightDarkSwitch = () => {
  const { colorTheme, setColorTheme } = useContext(PageContext);

  // Persistiert wird nur bei bewusster Wahl: localStorage bedeutet "der Benutzer
  // hat gewaehlt", nicht "das haben wir zuletzt gerendert". Sonst friert die
  // Systemeinstellung beim ersten Rendern ein und die Seite folgt ihr nie wieder.
  const toggle = () => {
    const next = nextTheme(colorTheme);
    storeTheme(next);
    setColorTheme(next);
  };

  return (
    <div>
      <div onClick={toggle}>
        <img
          className={colorTheme === 'light' ? 'theme-switch' : 'theme-switch theme-switch--inverse'}
          src={imageMap.lightLogo}
          alt='LightDarkmode'
        />
      </div>
    </div>
  );
};

export default LightDarkSwitch;
