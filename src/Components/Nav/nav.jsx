import React from "react";
import Styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={Styles.menu}>
      <div className={Styles.menu_text}>
        <div className={Styles.text}><a>Profile</a></div>
        <div className={Styles.text}><a>Messages</a></div>
        <div className={Styles.text}><a>News</a></div>
        <div className={Styles.text}><a>Music</a></div>
        <div className={Styles.text}><a>Settings</a></div>
      </div>
    </nav>
  );
};

export default Nav;
