import React, { Component, useState } from "react";
import "./Lifeline.css";

const LifelineElement = (probs) => {
  return (
    <div>
      <div style={{ paddingRight: "70px" }}>
        <span
          className="dot"
          style={{ animationDelay: probs.probs.probsdelay }}
        ></span>
        <div
          className="dotDivText"
          style={{ animationDelay: probs.probs.probsdelay }}
        >
          <span className="">{probs.probs.text}</span>
        </div>
      </div>
    </div>
  );
};

const Lifeline = ({ language }) => {
  // Values should be only date
  //const VALUES = ["09.05.2001", "2007", "2017", "2019", "2020"];

  // Description array corresponding to values
  const description = [
    [
      "2001: *",
      "2011: Entering HighSchool",
      "2017: Secondary School leaving Certificate",
      "2019: 'Abitur' (High school diploma), Begin Economy Studies",
      "2020: Begin Computer Science Studies",
    ],

    [
      "2001: *",
      "2011: Eintritt Gymnasium",
      "2017: Mittlere Reife",
      "2019: Abitur, Studium BWL",
      "2020: Studium Informatik",
    ]
  ];
  const numElements = description[language].length;
  const LifeLineElements = [];
  for (var i = 0; i < numElements; i++) {
    LifeLineElements.push(
      <LifelineElement
        probs={{ probsdelay: i * 0.1 + "s", text: description[language][i] }}
      />
    );
  }

  return (
    <div className="root-div">
      <hr className="hrAnimatedLine" />
      <div className="dotDiv">{LifeLineElements}</div>
    </div>
  );
};

export default Lifeline;
