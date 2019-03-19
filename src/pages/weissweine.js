import React from "react";

import SubpageHeader from "../components/SubpageHeader";
import WineNavigation from "../components/WineNavigation";
import Wines from "../components/Wines";

import { WineFragment } from "../fragments";
import { filterPremium } from "../util";

export default ({ location, data }) => (
  <div className="content-container">
    <SubpageHeader />

    <WineNavigation location={location} />

    <h2>Weißweine</h2>
    <Wines wines={filterPremium(data, false)} />

    <h2>Premium Weißweine</h2>
    <Wines wines={filterPremium(data, true)} />
  </div>
);

export const query = graphql`
  query WhiteWineQuery {
    allWine(filter: { type: { eq: "white" } }) {
      edges {
        node {
          ...WineFragment
        }
      }
    }
  }
`;
