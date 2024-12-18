import "../App.scss";
import "./Texts.scss";
import { useState } from "react";
import "../Lifeline/Lifeline";
import Lifeline from "../Lifeline/Lifeline";
import { useContext } from "react";
import { PageContext } from "../Page/Page";
import { textsWritten } from "../../__resources__/text/TextsWritten";

const menuItems = {
  en: ["About", "Preferences and Focus", "History"],
  de: ["Übersicht", "Fokus", "Werdegang"],
};
const Texts = () => {
  const { language } = useContext(PageContext);
  const description = [
    textsWritten.text0[language] ?? "no description found",
    textsWritten.text1[language] ?? "no description found",
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
