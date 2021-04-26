import React from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import LoginHeader from "./LoginHeader";
export default function Login() {
  return (
      
    <div>
      <LoginHeader />
     <div className={"authBox"}>
      <div className="leftBox">
        <div className="bgOrange" />
        <div className={"imageAuth"} />
        
      </div>
      <div className="rightBox">
        <div className="box">
          <div className="titleAuth">Welcome</div>
          <div className="inputbox">
            <input className="inputs" type="text" placeholder="User name" />
          </div>
          <div className="inputbox">
            <input className="inputs" type="password" placeholder="Password" />
          </div>
          <div className="contentBox">
            <div className="checkboxbox">
              <input type="checkbox" className="checkbox" />
              <label className="checkboxLabel">Remeber</label>
            </div>
            <div className="text">Forget password?</div>
          </div>
          <Link to='/home'>
          <div className="btnAuth">Login</div></Link>
          <div className="borderbox">
            <div className="line" />
            <div className="text1 or">OR</div>
          </div>
          <div className={"sociallinks"}>
            <div className="icAuth facebook" />
            <div className=" icAuth google" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
