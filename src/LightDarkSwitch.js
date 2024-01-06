import React from 'react'
import "./css/cssdark/LightDarkSwitch.css"
import SwitchLogo from "./ressources/lm.png"

const LightDarkSwitch = ({value, setValue}) => {
  return (
    <div>
      <div onClick={ ()=> {setValue(!value);  }}>
        <img className={!value ? "ldmSwitch" : "ldmSwitch ldmSwitchInverse"   } src={SwitchLogo} alt="LightDarkmode" />
      </div>
      
      

    </div>
  )
}

export default LightDarkSwitch