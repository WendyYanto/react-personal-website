import React from "react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Home from "components/home";
import AboutMe from "components/about-me";
import "./App.scss";

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
