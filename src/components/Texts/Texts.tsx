import "../App.scss";
import "./Texts.scss";
import { useState } from "react";
import "../Lifeline/Lifeline";
import Lifeline from "../Lifeline/Lifeline";
const TextsWritten = require("../../resources/text/TextsWritten");

const Texts = ({ language }) => {
  const Descriptions = [
    TextsWritten.default.Text0[language],
    TextsWritten.default.Text1[language],
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuItems = [
    ["About", "Preferences and Focus", "History"],
    ["Übersicht", "Fokus", "Werdegang"],
  ];

  const getTextElement = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <div className="texts__content collapser">
            <text> {Descriptions[0]} </text>
          </div>
        );
      case 1:
        return (
          <div className="texts__content collapser">
            <text> {Descriptions[1]} </text>
          </div>
        );
      case 2:
        return <Lifeline language={language} />;
      default:
        return <text></text>;
    }
  };

  return (
    <div className="texts">
      <ul className="texts__elements">
        {menuItems[language].length === 0 ||
        menuItems[language] === undefined ? (
          <p> No Option. </p>
        ) : (
          menuItems[language].map((item, index) => (
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
