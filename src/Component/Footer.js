import React, { useState } from "react";
import "./Footer.css";


const Footer = () => {

    const[state,setState]=useState(false);
    const[text,setText]=useState('Show details')
    const visible=()=>{
        !state?setState(true):setState(false)
        !state?setText('Hide details'):setText('Show details')
    }

  return (
    <div style={{ marginTop: 30 }}>
      <p type='button'
        class="dropdown-toggle"
        onClick={visible}
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: "black",
          backgroundColor: "#fff",
          border: "none",
          width: "100%",
          textAlign: "center",
        }}
      >
        {text}
      </p>
      <div style={{display:!state?"none":'block'}}>
      <div style={{ width: "100%" }}>
        <span style={{ fontWeight: 600, fontSize: 14,color:"black" }}>APY</span>
        <span style={{ float: "right",fontWeight: 700,
fontSize: 20,color:'#FAC200'}}>63.34%</span>
      </div>
      <br />
      <br />
      <ul style={{fontWeight: 500,
fontSize: 14,color: '#A3A3A3'}}>
        <li>Calculated based on current rates</li>
        <br />
        <li>
          All fugures are estimated provided for your convenience only, and by
          no means represent guaranted returns.
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Footer;
