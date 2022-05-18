import React from "react";
import "./home.scss";
import NavBar from "../../components/navbar/navbar";
import Featured from "../../components/featured/featured";
import List from "../../components/list/list";

const home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default home;
