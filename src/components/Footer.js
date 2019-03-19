import React from "react";
import logo from "../assets/images/logo_visual.svg";
const Footer = () => (
  <footer>
    <div className="branding">
      <img src={logo} />
      <p>&copy; 2017 Weingut Müller</p>
    </div>
    <nav className="footer-nav">
      <ul>
        <li className="menu-item menu-item-143">
          <a href="/">
            <span>Startseite</span>
          </a>
        </li>
        <li className="menu-item menu-item-675">
          <a href="/impressum">
            <span>Impressum</span>
          </a>
        </li>
        <li className="menu-item menu-item-677">
          <a href="/datenschutz">
            <span>Datenschutzinformationen</span>
          </a>
        </li>
        <li className="menu-item menu-item-147">
          <a href="/rotweine">
            <span>Shop</span>
          </a>
        </li>
        <li className="menu-item menu-item-677">
          <a href="/agb">
            <span>AGB's</span>
          </a>
        </li>
        <li className="menu-item menu-item-676">
          <a href="/versand">
            <span>Lieferung und Versandkosten</span>
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);
export default Footer;
