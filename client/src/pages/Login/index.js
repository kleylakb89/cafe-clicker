import React, { useState } from "react";
import "./style.css";

function Login() {
  return (
    <div className="sign">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form>
            <label for="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="Username" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="up-btn">Sign up</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label for="chk" aria-hidden="true">
              <span className="log-title">Login</span>
            </label>
            <input type="text" name="txt" placeholder="Username" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="in-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;