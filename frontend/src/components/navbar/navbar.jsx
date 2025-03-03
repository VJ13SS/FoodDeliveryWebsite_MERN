import { useContext, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

export default function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className="navbar">
      <Link to='/'><img src="./Images/logo.png" alt="" className="logo" /></Link>
      
      <ul className="navbar-menu">
        <Link to = '/' onClick={() => setMenu("Home")} className={menu === "Home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("Menu")} className={menu === "Menu"?"active":""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("Mobile App")} className={menu === "Mobile App"?"active":""}>Mobile App</a>
        <a href="#footer" onClick={() => setMenu("Contact Us")} className={menu === "Contact Us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src="./Images/search_icon.png" alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'>
          <img src="./Images/basket_icon.png" alt="" />
          </Link>
          
          <div className={getTotalCartAmount()?"dot":''}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}
