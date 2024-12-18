import { imageMap } from "../../__resources__/imageMap";
import { PageContext } from "../Page/Page";
import { useContext } from "react";
import "./LightDarkSwitch.scss";

const LightDarkSwitch = () => {
  const { colorTheme, setColorTheme } = useContext(PageContext);
  return (
    <div>
      <div
        onClick={() => {
          setColorTheme((colorTheme + 1) % 2);
        }}
      >
        <img
          className={
            !colorTheme ? "theme-switch" : "theme-switch theme-switch--inverse"
          }
          src={imageMap.lightLogo}
          alt="LightDarkmode"
        />
      </div>
    </div>
  );
};

export default LightDarkSwitch;
