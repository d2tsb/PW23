import "./Lifeline.scss";
import { lifeLineDescriptions as descriptions } from "../../__resources__/structure";
import { PageContext } from "../Page/Page";
import { useContext } from "react";

interface LifelineElementProps {
  probsdelay: string;
  description: string;
  index: number;
}
const LifelineElement = ({
  probsdelay,
  description,
  index,
}: LifelineElementProps) => {
  return (
    <div>
      <div style={{ paddingRight: "70px" }}>
        <span
          className="lifeline__element"
          style={{ animationDelay: probsdelay }}
        ></span>

        {!index ? <hr className="lifeline__line" /> : null}
        <div
          className="lifeline__element--text"
          style={{ animationDelay: probsdelay }}
        >
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

const Lifeline = () => {
  const { language } = useContext(PageContext);
  const numElements = descriptions[language].length;
  const LifeLineElements = [];
  for (var i = 0; i < numElements; i++) {
    LifeLineElements.push(
      <LifelineElement
        probsdelay={i * 0.1 + "s"}
        description={descriptions[language][i] ?? "no description found"}
        index={i}
      />
    );
  }

  return (
    <div className="lifeline">
      <div className="lifeline__elements">{LifeLineElements}</div>
    </div>
  );
};

export default Lifeline;
