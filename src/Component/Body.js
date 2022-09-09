import React from "react";
import "./Body.css";
import Button from "./Button";
import Footer from "./Footer";
import GreyButton from "./GreyButton";
import RoundButton from "./RoundButton";
import RoundNotColorBtn from "./RoundNotColorBtn";

const Body = () => {
  return (
    <div className="data" style={{ marginTop: "40px" }}>
      <input type="text" value="2.100000 CAKE" />
      <span style={{ float: "right", fontSize: "12px", marginTop: "5px" }}>
        ~$20.82
      </span>
      <div className="d-flex" style={{ marginTop: "20px" }}>
        <Button />
        <GreyButton amount="$1000" />
        <GreyButton amount="$100" />
      </div>
      <h5
        style={{
          fontWeight: 600,
          fontSize: "14px",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Timeframe
      </h5>
      <div className="d-flex">
        <RoundButton time="1 Day" />
        <RoundNotColorBtn date="7 Days" />
        <RoundNotColorBtn date="30 Days" />
        <RoundNotColorBtn date="1 Year" />
        <RoundNotColorBtn date="5 Year" />
      </div>
      <div style={{display:'flex',alignItems:'center'}}>
      <h5
        style={{
          fontWeight: 500,
          fontSize: "16px",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Enable Accelerated APY
      </h5>
      <div class="form-check form-switch" style={{marginLeft:'auto'}}>
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked
          style={{backgroundColor:'#F8C400',borderColor:'#F8C400'}}
        />
        <label class="form-check-label" for="flexSwitchCheckChecked" style={{marginTop:'3px'}}>
            USD
        </label>
      </div>
      </div>
      <p style={{ color: "#A3A3A3", fontSize: 14, fontWeight: 600 }}>
        Select Tier
      </p>
      <div className="d-flex">
        <RoundNotColorBtn date="Tier 1" />
        <RoundNotColorBtn date="Tier 2" />
        <RoundNotColorBtn date="Tier 3" />
        <RoundButton time="Tier 4" />
        <RoundNotColorBtn date="Tier 5" />
      </div>
      <p
        style={{
          color: "#A3A3A3",
          fontSize: 14,
          fontWeight: 600,
          float: "right",
          marginTop: 20,
        }}
      >
        ROI at Current Rates
      </p>
      <input type="text" value="100.0 USD" />
      <p
        style={{
          color: "#A3A3A3",
          fontSize: 14,
          fontWeight: 600,
          float: "right",
          marginTop: 20,
        }}
      >
        ~ 3CAKE + 10DON
      </p>
      <div style={{ marginTop: 60, display: "flex", justifyContent: "center" }}>
        <button
          className="mainBtn"
          style={{ color: "#fff", backgroundColor: "#000000", marginRight: 20 }}
        >
          Apply
        </button>
        <button
          className="mainBtn"
          style={{ color: "#666666", backgroundColor: "#fff", marginLeft: 20 }}
        >
          Cancel
        </button>
      </div>
    
      <Footer/>
        
      
    </div>
  );
};

export default Body;
