import { useState } from "react";
import "./loginPopup.css";

export default function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src="./Images/cross_icon.png"
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" name="" placeholder="Your Email" required />
          <input
            type="password"
            name=""
            placeholder="Password"
            required
          />
        </div>
        <button>
          {currentState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" required />
          <p>By Continuing, i agree to the terms of use & privacy Ppolicy.</p>
        </div>
        {currentState === "Login" ? (
          <p onClick = {() => setCurrentState("Sign up")}>
            Create a new accoutn? <span>Click here</span>
          </p>
        ) : (
          <p onClick = {() => setCurrentState("Login")}>
            Already have an account? <span>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
