import React from "react";
import config from "config";
import "./index.css";

const USERNAME = config.username;

const Home = () => {
  return (
    <div className="section home">
      <h1>I'm {USERNAME}</h1>
      <p>Android & Full Stack Developer</p>
    </div>
  );
};

export default Home;
