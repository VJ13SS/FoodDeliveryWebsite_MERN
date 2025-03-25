import { useState } from "react";
import "./loginPopup.css";
import { useCallback } from "react";
import { StoreContext } from "../../context/storeContext";

export default function LoginPopup({ setShowLogin }) {

  const {url} = useCallback(StoreContext)
  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const closeLoginPopup = () =>{
    setShowLogin(false)
    document.body.classList.remove('no-scroll')
  }

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={closeLoginPopup}
            src="./Images/cross_icon.png"
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" name="name" onChange={onChangeHandler} value={data.name} required />
          )}

          <input type="email"  placeholder="Your Email" name="email" onChange={onChangeHandler} value={data.email} required />
          <input type="password" name="password" placeholder="Password" onChange={onChangeHandler} value={data.password} required />
        </div>
        <button>
          {currentState === "Sign up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" required />
          <p>By Continuing, i agree to the terms of use & privacy Ppolicy.</p>
        </div>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign up")}>
            Create a new accoutn? <span>Click here</span>
          </p>
        ) : (
          <p onClick={() => setCurrentState("Login")}>
            Already have an account? <span>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}
