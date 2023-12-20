
import React from "react";
import "./Lifeline.css"

const Lifeline = () => {

  const divStyle0 = {position: 'absolute', 
                    bottom: '40px', 
                    right: '10px', 
                    fontsize: '12px'};

  const divStyle1 = {position: 'absolute', 
                    bottom: '15px', 
                    right: '10px', 
                    fontsize: '12px'};


  //"position: absolute; bottom: 15px; left: 10px; font-size: 18px; font-weight: bold"


  const divStyle2 = {position: 'absolute', 
                    bottom: '15px', 
                    left: '10px',
                    fontsize: '18px',
                    fontweight: 'bold'};


  return (
    <div>
      <h1>
      </h1>
      <div class="flex-parent">
        <div class="input-flex-container">
          <div class="input">
            <span data-year="2001" data-info="Birth *, 05.09.2001"></span>
          </div>
          <div class="input">
            <span data-year="2007" data-info="jungle gym"></span>
          </div>
          <div class="input">
            <span data-year="2011" data-info="chocolate chip cookie"></span>
          </div>
          <div class="input">
            <span data-year="2017" data-info="Jeep"></span>
          </div>
          <div class="input">
            <span data-year="2019" data-info="leaf blower"></span>
          </div>
          <div class="input active">
            <span data-year="2020 -" data-info="magnetic stripe card"></span>
          </div>
          <div class="input">
            <span data-year="1970" data-info="wireless LAN"></span>
          </div>
          <div class="input">
            <span data-year="1980" data-info="flash memory"></span>
          </div>
       </div>
      </div>
    </div>
  );
};

export default Lifeline;
