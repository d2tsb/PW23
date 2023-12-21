import React, { Component, useState } from "react";
import "./Lifeline.css";

const LifelineElement = (probs) => {
  return (
    <div>
      <span className="dot" style={{ animationDelay: probs.probs.probsdelay}}></span>
      <div className="dotDivText" 
      style={{ animationDelay: probs.probs.probsdelay}}
      
      >
        <span className="">hello</span>
      </div>
    </div>
  );
};

const Lifeline = () => {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  // Values should be only date
  const VALUES = ["09.05.2001", "2007", "2017", "2019", "2020"];

  // Description array corresponding to values
  const description = ["Birth", "", "The event of 22 March 2021 : Board Exam"];
  const numElements = 5
  const LifeLineElements = [];
  for (var i = 0; i < numElements; i++) {
    LifeLineElements.push (<LifelineElement probs={{probsdelay: i* 0.1 + 's'}} />);
  }

  return (
    <div className="root-div">
      <hr className="hrAnimatedLine" />
      <div className="dotDiv">{LifeLineElements}</div>
    </div>
  );
};

export default Lifeline;
