import React from "react";
import "./DataDisplay.scss";
import GridLayot from "../GridLayot/GridLayot";

function DataDisplay2({ loading, items }) {
    console.log(items)
  return loading ? (
    <h1>Loading....</h1>
  ) : (
      <div className="grid-container">
        {items.map((item) => (
          <GridLayot key={item.episode_id} name={item.series} />
        ))}
      </div>
  );
}

export default DataDisplay2;
