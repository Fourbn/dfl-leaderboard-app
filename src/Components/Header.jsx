import React from "react";
import logo from "../logo.svg";
import PhilLogo from '../assets/code-turkey.svg';

const Header = () => {
  return (
    <header>
      <a className="homeButton" href="https://www.dragfantasyleague.com/">
        <img src={logo} alt="Logo for the Drag Race Fantasy League" />
      </a>
      <h1>Drag Race - Season 14</h1>
      <a
        className="coderButton"
        href="https://codeturkie.io"
        title="App built by Philip Turkiewicz"
      >
        <img src={PhilLogo} alt="Logo for Philip Turkiewicz's portfolio site" />
      </a>
    </header>
  );
};

export default Header;
