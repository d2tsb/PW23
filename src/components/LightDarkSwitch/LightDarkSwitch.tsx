import { image_map } from "../../assets/imageMap";
import "./LightDarkSwitch.scss";

const LightDarkSwitch = ({ value, setValue }) => {
  return (
    <div>
      <div
        onClick={() => {
          setValue(!value);
        }}
      >
        <img
          className={
            !value ? "theme-switch" : "theme-switch theme-switch--inverse"
          }
          src={image_map.lightLogo}
          alt="LightDarkmode"
        />
      </div>
    </div>
  );
};

export default LightDarkSwitch;
