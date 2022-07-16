import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        DATASTORE
      </div>
      <div className="menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/data">Data</a></li>
        </ul>
      </div>
    </header>


  );
};

export default Header;