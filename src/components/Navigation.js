import React from "react";

const Navigation = () => (
  <nav className="main-navigation">
    <ul>
      <li>
        <a href="/">
          <span className="icon-i_logo-05" />
          <span className="label">Startseite</span>
        </a>
      </li>

      <li className="active">
        <a href="/rotweine">
          <span className="icon-i_bottles" />
          <span className="label">Shop</span>
        </a>
      </li>

      <li>
        <a href="/weine">
          <span className="icon-i_barrels" />
          <span className="label">Wein-Kategorien</span>
        </a>
      </li>

      <li>
        <a href="/aktuelles">
          <span className="icon-i_news" />
          <span className="label">Aktuelles &amp; Termine</span>
        </a>
      </li>

      <li>
        <a href="/gasthaus">
          <span className="icon-i_lamb" />
          <span className="label">Gasthaus</span>
        </a>
      </li>
    </ul>
  </nav>
);
export default Navigation;
