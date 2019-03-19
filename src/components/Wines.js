import React from "react";

import Wine from "./Wine";

export default ({ wines }) => (
  <div className="wine-list">
    {wines
      .sort(function(a, b) {
        return a.priority - b.priority;
      })
      .map((wine, index) => <Wine wine={wine} key={index} />)}
  </div>
);
