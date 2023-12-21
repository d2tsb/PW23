import "./App.css";
import "./Texts.css"
import React from "react";
import { useState } from "react";
import "./Lifeline";
import Lifeline from "./Lifeline";
const TextsWritten = require("./ressources/TextsWritten");

const Texts = () => {
  const Descriptions = [
    TextsWritten.default.Text0,
    TextsWritten.default.Text1,
    TextsWritten.default.Text1,
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuItems = ["About", "Preferences and Focus", "History"];
  //const Descriptions = ["HelloText0", "HelloText1", "HelloText2"];

  const ChooseElement = () => {
    switch (selectedIndex) {
      case 0:
        return <div className="Description_ collapser"> <text> {Descriptions[0]} </text> </div>;
      case 1:
        return <div className="Description_ collapser"> <text> {Descriptions[1]} </text> </div>;
      case 2:
        return (
          <div>
            <Lifeline/>
          </div>
        );
    }
    return <text></text>;
  };

  return (
    <div className="ListItem1">
      <ul className="ul_">
        {menuItems.length === 0 || menuItems === undefined ? (
          <p> Empty List. </p>
        ) : (
          menuItems.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              <text className={selectedIndex === index ? "liActive" : "lia"}>
                {item}
              </text>
            </li>
          ))
        )}
      </ul>
      {ChooseElement()}
    </div>
  );
};

export default Texts;
