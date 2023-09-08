import React from "react";
import "../../App.css";
import PropertyTables from "../../components/PropertyScreenComponent/PropertyTable";

function Property() {
  return (
    <div className="propertyContainer">
      <div>
        <h1 style={{ lineHeight: "1" }}>Property</h1>{" "}
      </div>
      <div>
        <PropertyTables />
      </div>
    </div>
  );
}

export default Property;
