import React from "react";
import "./css/cssdark/Lifeline.css";

const LifelineElement = (probs) => {
  return (
    <div>
      <div style={{ paddingRight: "70px" }}>
        <span
          className="dot"
          style={{ animationDelay: probs.probs.probsdelay }}
        ></span>

        {!probs.probs.index ? <hr className="hrAnimatedLine" /> : null}
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
      "2011: Entering Highschool",
      "2017: Secondary school-leaving Certificate (Mittlere Reife)",
      "2019: High school diploma (Abitur)& Economy Studies",
      "2020: Computer-Science Studies",
      "2024: Webdeveloper at Campudus Developers"
    ],

    [
      "2001: *",
      "2011: Eintritt Gymnasium",
      "2017: Mittlere Reife",
      "2019: Abitur, Studium BWL",
      "2020: Studium Informatik",
      "2024: Webdeveloper at Campudus Developers"
    ],
  ];
  const numElements = description[language].length;
  const LifeLineElements = [];
  for (var i = 0; i < numElements; i++) {
    LifeLineElements.push(
      <LifelineElement
        probs={{
          probsdelay: i * 0.1 + "s",
          text: description[language][i],
          index: i,
        }}
      />
    );
  }

  return (
    <div className="root-div">
      <div className="dotDiv">{LifeLineElements}</div>
    </div>
  );
};

export default Lifeline;
