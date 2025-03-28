import { useContext, useState } from "react";
import "./loginPopup.css";
import { StoreContext } from "../../context/storeContext";
import axios from "axios"


export default function LoginPopup({ setShowLogin }) {

  const {url,setToken} = useContext(StoreContext)
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

  const onLogin = async (event) =>{
    event.preventDefault()
    let newUrl = url
    if(currentState === "Login"){
      newUrl += "/api/user/login"
    }else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl,data)
    
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      closeLoginPopup()
    }
    else{
      alert(response.data.message)
    }
  }

  const closeLoginPopup = () =>{
    setShowLogin(false)
    document.body.classList.remove('no-scroll')
  }

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container" onSubmit={onLogin}>
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
        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" required />
          <p>By Continuing, i agree to the terms of use & privacy Ppolicy.</p>
        </div>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")}>
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
