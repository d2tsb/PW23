import '../App.scss';
import './Texts.scss';
import { useState } from 'react';
import '../Lifeline/Lifeline';
import Lifeline from '../Lifeline/Lifeline';
import { useContext } from 'react';
import { PageContext } from '../Page/Page';
import { textsWritten } from '../../__resources__/text/TextsWritten';
import { menuBarOptions } from '../../__resources__/structure';
import linebreaker from '../../__resources__/linebreaker';

const Texts = () => {
  const { language, year } = useContext(PageContext);
  const description = [
    textsWritten.about[year][language] ?? 'no description found',
    textsWritten.focus[year][language] ?? 'no description found',
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const getTextElement = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <div className='texts__content collapser'>
            {linebreaker(description[0] ?? 'not found')}
          </div>
        );
      case 1:
        return (
          <div className='texts__content collapser'>
            {linebreaker(description[1] ?? 'not found')}
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
