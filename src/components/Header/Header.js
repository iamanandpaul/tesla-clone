import React, { useState } from "react";
import logo from "../../assets/teslaLogoSmall.svg";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div>
        <Link to="/">
          <img className="header__logo" src={logo} alt="tesla" />
        </Link>
      </div>
      <ul className={click ? "header__center active" : "header__center"}>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <Link to="/">model s</Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <Link to="/">model 3</Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <Link to="/">model x</Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <Link to="/">model y</Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <Link to="/">solar roof</Link>
        </li>
        <li className="header__options" onClick={closeMobileMenu}>
          {" "}
          <Link to="/">solar panels</Link>
        </li>
      </ul>

      <div className="header__right">
        <ul
          className={click ? "header__rightitems active" : "header__rightitems"}
        >
          <li className="header__options" onClick={closeMobileMenu}>
            <Link to="/">shop</Link>{" "}
          </li>
          <li className="header__options" onClick={closeMobileMenu}>
            <Link to="/">tesla account</Link>
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
