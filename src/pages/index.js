import React from "react";
import Link from "gatsby-link";
import { Trans, withI18n } from "@lingui/react";

import logo from "../assets/images/logo.svg";
import badge from "../assets/images/badge.svg";
import family from "../assets/images/family.jpg";
import grapes from "../assets/images/grapes.jpg";
import wines from "../assets/images/wines.jpg";
import party1 from "../assets/images/party1.jpg";
import restaurant from "../assets/images/restaurant.jpg";

import config from "./index.json";
import News from '../components/News'

const Teaser = props => (
  <div className="teaser">
    <div className="icon">
      <span className={"icon-i_" + props.data.icon} />
    </div>
    <h2>{props.data.title}</h2>
    <h3>{props.data.subtitle}</h3>
    <p>{props.data.text} </p>
  </div>
);

const IndexPage = ({ i18n, data }) => (
  <div className="startseite content-container">
    <header>
      <div className="branding">
        <img src={logo} />
      </div>

      <div>
        <div className="info">
          {
            data && data.allNews.edges.map((newsdata, index) => {
              return newsdata.node.showOnHome && <h4 key={index}>{newsdata.node.title} <br />{newsdata.node.homePageDescription}</h4>
            })}
          {/* <h4>
            Weihnachtsmarkt am ersten Adventswochenende. Adventszauber im
            Schneckenhof<br />
            Sa. 1.12. ab 15 Uhr & So. 2.12. ab 11 Uhr{" "}
          </h4> */}
        </div>
      </div>
    </header>

    <section>
      <div className="image" style={{ backgroundImage: `url(${family})` }} />
      <div>
        <Teaser data={config.index.teaser.vineyard} />
      </div>
    </section>

    <section className="reverse">
      <div className="image" style={{ backgroundImage: `url(${grapes})` }} />
      <div>
        <Teaser data={config.index.teaser.grapes} />
      </div>
    </section>

    <section>
      <div className="image" style={{ backgroundImage: `url(${wines})` }} />
      <div>
        <div>
          <Teaser data={config.index.teaser.wines} />
          <div className="cta">
            <a href="weine">Mehr über unsere Weine</a>
          </div>
        </div>
      </div>
    </section>

    <section className="reverse">
      <div className="image" style={{ backgroundImage: `url(${party1})` }} />
      <div>
        <div>
          <Teaser data={config.index.teaser.events} />
          <div className="cta">
            <a href="aktuelles">Aktuelle Veranstaltungen</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div
        className="image"
        style={{ backgroundImage: `url(${restaurant})` }}
      />
      <div>
        <div>
          <Teaser data={config.index.teaser.restaurant} />
          <div className="cta">
            <a href="gasthaus">Mehr über unser Gasthaus</a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default withI18n()(IndexPage);

export const query = graphql`
  query IndexQuery {
    allNews{
      edges {
        node {
           id,
           relevantTo, 
           relevantFrom,
           title,
           shortDescription,
           description,
           startDate,
           endDate,
           showOnHome,
           homePageDescription
        }
      }
    }
  }
`
