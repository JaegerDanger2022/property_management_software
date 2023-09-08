import React from "react";
import "../../App.css";
import PropertyTables from "../../components/PropertyScreenComponent/PropertyTable";
import ActionButton from "../../components/ActionButton/ActionButton";
import { Add } from "@mui/icons-material";

function Property() {
  return (
    <div className="propertyContainer">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <h1 style={{ lineHeight: "1" }}>Property</h1>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionButton label={"Add Property"} startIcon={<Add />} />
        </div>
      </div>
      <div>
        <PropertyTables />
      </div>
    </div>
  );
}

export default Property;
