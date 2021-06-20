import React from "react";
import { NavLink } from "react-router-dom";
import { ImStatsDots, ImTrophy } from 'react-icons/im';
import { FaCrown } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <nav className="wrapper">
        <ul>
          <li>
            <NavLink to="/statscast" activeClassName="active">
              <ImStatsDots className="icon" />
              Statscast
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="active">
              <ImTrophy className="icon" />
              The Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/queens" activeClassName="active">
              <FaCrown className="icon" />
              Queen Standings
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
