import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav className="wrapper">
        <ul>
          <li>
            <NavLink to="/statscast">Statscast</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
          <li>
            <NavLink to="/queens">Queen Standings</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
