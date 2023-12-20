
import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";



const Lifeline = () => {


    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);
 
    // Values should be only date
    const VALUES = ["09.05.2001", "2021-01-15", "2021-03-22"];
 
    // Description array corresponding to values
    const description = [
        "Birth",
        "",
        "The event of 22 March 2021 : Board Exam",
    ];
 




  return (

     <div className="root-div">
            <div style={{
                width: "60%",
                height: "100px",
                margin: "0 auto"
            }}>
                <HorizontalTimeline
                    styles={{ outline: "#000", foreground: "#FFF" }}
                    index={value}
                    indexClick={(index) => {
                        setValue(index);
                        setPrevious(value);
                    }} 
                    values={VALUES}
                />
            </div>
            <div className="" style={{rotate:"-30deg", margin:"0 0"}}>{description[value]}</div>
        </div>
  )
}

export default Lifeline
