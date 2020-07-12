import React from "react";
import "./index.css";
import config from "config";
import NavbarItem from './navbar-item';

const ITEMS = config.navbar_items;

const Navbar = () => {
  const renderItems = () => {
    return ITEMS.map((item) => <NavbarItem name={item} />);
  };

  return (
    <div>
      Navigation Bar
      <ul>{renderItems()}</ul>
    </div>
  );
};

export default Navbar;