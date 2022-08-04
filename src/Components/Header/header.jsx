import React from "react";
import Styles from "./header.module.css";
import logo from "../img/social-media.png";

const Header = () => {
  return (
    <header className={Styles.head}>
      <img src={logo}></img>
    </header>
  );
};

export default Header;