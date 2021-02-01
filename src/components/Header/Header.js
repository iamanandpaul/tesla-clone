import React, { useState } from "react";
import logo from "../../assets/teslaLogoSmall.svg";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div>
        <a href="#">
          <img className="header__logo" src={logo} alt="tesla" />
        </a>
      </div>
      <ul className={click ? "header__center active" : "header__center"}>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <a href="#">model s</a>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <a href="#">model 3</a>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <a href="#">model x</a>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <a href="#">model y</a>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <a href="#">solar roof</a>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <a href="#">solar panels</a>
        </li>
      </ul>

      <div className="header__right">
        <ul
          className={click ? "header__rightitems active" : "header__rightitems"}
        >
          <li className="header__options" onClick={closeMobileMenu}>
            <a href="#">shop</a>{" "}
          </li>
          <li className="header__options" onClick={closeMobileMenu}>
            <a href="#">tesla account</a>
          </li>
        </ul>
        <div className="header__click" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
