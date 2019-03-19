import React from "react";

import SubpageHeader from "../components/SubpageHeader";
import WineNavigation from "../components/WineNavigation";
import Wines from "../components/Wines";
import { WineFragment } from "../fragments";

export default ({ location, data }) => (
  <div className="content-container">
    <SubpageHeader />

    <WineNavigation location={location} />

    <h2>Roséweine</h2>
    <Wines wines={data.allWine.edges.map(edge => edge.node)} />
  </div>
);

export const query = graphql`
  query RoseWineQuery {
    allWine(filter: { type: { eq: "rose" } }) {
      edges {
        node {
          ...WineFragment
        }
      }
    }
  }
`;
