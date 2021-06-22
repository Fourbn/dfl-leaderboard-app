import React from "react";
import logo from "../logo.svg";
import PhilLogo from '../assets/code-turkey.svg';

const Header = () => {
  return (
    <header>
      <a
        className="homeButton"
        href="https://fantasyleaguedrag.wixsite.com/dragfantasyleague"
      >
        <img src={logo} alt="Logo for the Drag Race Fantasy League" />
      </a>
      <a className="coderButton" href="https://codeturkie.io" title="App built by Philip Turkiewicz">
        <img src={PhilLogo} alt="Logo for Philip Turkiewicz's portfolio site" />
      </a>
    </header>
  );
};

export default Header;
