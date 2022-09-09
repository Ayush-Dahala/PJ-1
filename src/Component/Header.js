import React from "react";
import './Header.css'
import image from '../assets/close-line.svg'

const Header = () => {
  return (
    <div className="container">
      <h2>ROI Calculator
      <img src={image} alt=""/>
      </h2>

      <div className="wrapper">
      <span>🎂Cake</span>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked
          style={{backgroundColor:'#F8C400',borderColor:'#F8C400'}}
        />
        <label class="form-check-label" for="flexSwitchCheckChecked" style={{marginTop:3}}>
            USD
        </label>
      </div>
      </div>
    </div>
  );
};

export default Header;
