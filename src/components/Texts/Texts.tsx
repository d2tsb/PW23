import '../App.scss';
import './Texts.scss';
import { useEffect, useState } from 'react';
import '../Lifeline/Lifeline';
import Lifeline from '../Lifeline/Lifeline';
import { useContext } from 'react';
import { PageContext } from '../Page/Page';
import { menuBarOptions } from '../../__resources__/structure';
import { getData } from '../../__resources__/helper';
import { TextsWritten } from '../../__resources__/types';
import linebreaker from '../../__resources__/linebreaker';

const Texts = () => {
  const { language, year } = useContext(PageContext);

  // Die Texte liegen nicht im Bundle, sondern werden zur Laufzeit geholt.
  // In der Entwicklung liefert der Vite-Server sie aus public/, in Produktion
  // nginx per alias aus dem State-Verzeichnis - der Build kennt sie nicht.
  const [texts, setTexts] = useState<TextsWritten | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    getData<TextsWritten>('/texts.json')
      .then(setTexts)
      .catch(() => setFailed(true));
  }, []);

  const placeholder = failed ? 'Text konnte nicht geladen werden.' : '…';
  const description = [
    texts?.about[year]?.[language] ?? placeholder,
    texts?.focus[year]?.[language] ?? placeholder,
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const getTextElement = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <div className='texts__content collapser'>
            <div className='texts__content--margin'>
              {linebreaker(description[0] ?? 'not found')}
            </div>
          </div>
        );
      case 1:
        return (
          <div className='texts__content collapser'>
            <div className='texts__content--margin'>
              {linebreaker(description[1] ?? 'not found')}
            </div>
          </div>
        );
      case 2:
        return <Lifeline />;
      default:
        return <div></div>;
    }
  };

  return (
    <div className='texts'>
      <ul className='texts__elements'>
        {menuBarOptions[language].length === 0 || menuBarOptions[language] === undefined ? (
          <p> No Option. </p>
        ) : (
          menuBarOptions[language].map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <div
                className={selectedIndex === index ? 'texts__element--active' : 'texts__element'}
              >
                {item}
              </div>
            </li>
          ))
        )}
      </ul>
      {getTextElement()}
    </div>
  );
};

export default Texts;
