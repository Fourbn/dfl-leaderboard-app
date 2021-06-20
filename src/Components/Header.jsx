import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <header>
      <a
        className="homeButton"
        href="https://fantasyleaguedrag.wixsite.com/dragfantasyleague"
      >
        <img src={logo} alt="Logo for the Drag Race Fantasy League" />
      </a>
    </header>
  );
};

export default Header;
