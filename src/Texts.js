import "./App.css";
import React from "react";
import { useState } from "react";


const Text_L = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n invidunt ut labore et dolore magna aliquyam erat,\n sed diam voluptua. At vero eos et accusam et\n justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\n sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \nsed diam voluptua. At vero eos et accusam et j\nusto duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."


const Texts = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuItems = ["About", "Preferences and Focus", "History"];
  //const Descriptions = ["HelloText0", "HelloText1", "HelloText2"];
  const Descriptions = [Text_L, Text_L + "bla\n bla\n", Text_L];

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
              <text className={selectedIndex === index ? "liActive" : "lia"} >
                {item}
              </text>
            </li>
          ))
        )}
      </ul>
      <div className="Description_">
       <text>
              {Descriptions[selectedIndex]}
      </text>

      </div>
   </div>
  );
};

export default Texts;
