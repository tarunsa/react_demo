import React from "react";
import { Link } from "react-router-dom";
function LoginHeader() {
    return (
      <div className="header">
        <Link className="link" to="/">
          <h1 className="head_logo" style={{color:'#f5a422'}}>Demo</h1>
        </Link>
        {/* <Link className="/register" to="/register"></Link> */}
        <Link to="/register">
          <button className="head_btn">
            <p style={{ marginLeft: 15, marginTop: -3 }}>create account</p>
          </button>
        </Link>
      </div>
    );
  }
  
  export default LoginHeader;