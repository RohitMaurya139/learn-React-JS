// Header component for header section: Logo, Nav items
import { LOGO_URL } from "../utils/constant";
import "@fortawesome/fontawesome-free/css/all.min.css";
import{ useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li><button className="login-button" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;