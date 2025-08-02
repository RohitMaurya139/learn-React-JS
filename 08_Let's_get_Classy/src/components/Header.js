// Header component for header section: Logo, Nav items
import { LOGO_URL } from "../utils/constant";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
console.log("header changed")
  useEffect(() => {
  console.log("useEffect called");
}, [btnName]);


  return (
    <div className="Header">
      <div className="logo-container">
       <Link to="/"> <img className="logo" src={LOGO_URL} alt="logo" /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <button
              className="login-button"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;