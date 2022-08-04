import React from "react";
import Styles from "./content.module.css";

const Content = () => {
  return (
    <div className={Styles.content}>
      <div>
        <img src="https://p4.wallpaperbetter.com/wallpaper/684/601/150/new-york-city-triple-screen-wide-angle-cityscape-wallpaper-preview.jpg"></img>
      </div>
      <div>ava + desc</div>
      <div>My posts</div>
      <div>New post</div>
      <div className="posts">
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  );
};

export default Content;
