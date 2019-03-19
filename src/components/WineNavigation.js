import React from "react";
import Link from "gatsby-link";
import { logo } from "../assets";

const WineLink = ({ to, icon, location }) => (
  <li className={location.pathname.startsWith(to) ? "active" : ""}>
    <Link to={to}>
      <span className={icon}>
        <span className="path1" />
        <span className="path2" />
      </span>
    </Link>
  </li>
);

export default ({ location }) => (
  <div>
    <nav className="wine-navigation">
      <ul>
        <WineLink to="/rotweine" location={location} icon="icon-i_red" />
        <WineLink to="/weissweine" location={location} icon="icon-i_white" />
        <WineLink to="/roseweine" location={location} icon="icon-i_rose" />
        <WineLink to="/sekt" location={location} icon="icon-i_champagne" />
      </ul>
    </nav>
  </div>
);
