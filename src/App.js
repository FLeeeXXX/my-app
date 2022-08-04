import React from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Nav from "./Components/Nav/nav";
import Content from "./Components/Content/content";

const App = () => {
  return (
    <div className="main_menu">
      <Header></Header>
      <Nav></Nav>
      <Content></Content>
    </div>
  );
};

export default App;
