import "../App.scss";
import "./Texts.scss";
import { useState } from "react";
import "../Lifeline/Lifeline";
import Lifeline from "../Lifeline/Lifeline";
import { useContext } from "react";
import { PageContext } from "../Page/Page";
import { textsWritten } from "../../__resources__/text/TextsWritten";
import { menuBarOptions } from "../../__resources__/structure";

const Texts = () => {
  const { language, year } = useContext(PageContext);
  const description = [
    textsWritten.text0[year][language] ?? "no description found",
    textsWritten.text1[year][language] ?? "no description found",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const getTextElement = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <div className="texts__content collapser">
            <text> {description[0]} </text>
          </div>
        );
      case 1:
        return (
          <div className="texts__content collapser">
            <text> {description[1]} </text>
          </div>
        );
      case 2:
        return <Lifeline />;
      default:
        return <text></text>;
    }
  };

  return (
    <div className="texts">
      <ul className="texts__elements">
        {menuBarOptions[language].length === 0 ||
        menuBarOptions[language] === undefined ? (
          <p> No Option. </p>
        ) : (
          menuBarOptions[language].map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <text
                className={
                  selectedIndex === index
                    ? "texts__element--active"
                    : "texts__element"
                }
              >
                {item}
              </text>
            </li>
          ))
        )}
      </ul>
      {getTextElement()}
    </div>
  );
};

export default Texts;
