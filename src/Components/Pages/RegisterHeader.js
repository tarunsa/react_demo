import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
function RegisterHeader() {
  return (
    <div className="header sticky-top">
      <Link className="link" to="/">
        <h1 className="head_logo" style={{color:'#f5a422'}}>Demo</h1>
      </Link>

      <Link to="/">
        <button className="head_btn1">
          <p style={{ marginLeft: 15, marginTop: -3 }}>Login</p>
        </button>
      </Link>
    </div>
  );
}

export default RegisterHeader;