import { image_map } from "../../resources/image_source/image_map";
import "./LightDarkSwitch.scss"

const LightDarkSwitch = ({value, setValue}) => {
  return (
    <div>
      <div onClick={ ()=> {setValue(!value);  }}>
        <img className={!value ? "ldmSwitch" : "ldmSwitch ldmSwitchInverse"   } src={image_map.lightLogo} alt="LightDarkmode" />
      </div>
      
      

    </div>
  )
}

export default LightDarkSwitch