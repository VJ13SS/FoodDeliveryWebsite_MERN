import { useContext, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

export default function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const showLogin = () => {
    setShowLogin(true);
    document.body.classList.add("no-scroll");
  };

  const navigate = useNavigate()

  const logout = ()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate('/')
  }
  return (
    <div className="navbar">
      <Link to="/">
        <img src="./Images/logo.png" alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("Mobile App")}
          className={menu === "Mobile App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src="./Images/search_icon.png" alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src="./Images/basket_icon.png" alt="" />
          </Link>

          <div className={getTotalCartAmount() ? "dot" : ""}></div>
        </div>
        {!token ? (
          <button onClick={showLogin}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src="./Images/profile_icon.png" alt="" />
            <ul className="nav-profile-dropdown">
              <li><img src="./Images/bag_icon.png" alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src="./Images/logout_icon.png" alt="" /><p>Logout</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
