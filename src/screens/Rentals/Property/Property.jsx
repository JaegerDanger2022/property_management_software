import React, { useState } from "react";
import "../../../App.css";
import PropertyTables from "../../../components/PropertyScreenComponent/PropertyTableComponents/PropertyTable";
import ActionButton from "../../../components/ActionButton/ActionButton";
import { Add } from "@mui/icons-material";
import AddPropertyModal from "../../../modals/Property/AddPropertyModal";

function Property() {
  return (
    <div className="propertyContainer">
      <div
        style={{
          display: "grid",
          // marginBottom: "2dvh",
        }}
      >
        <h1 style={{ lineHeight: "1" }}>Property</h1>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <AddPropertyModal />
        </div>
      </div>
      <div
        style={{
          overflowY: "scroll",
          paddingTop: "1%",
          // This height is to prevent the whole property page from exceeding the 100vh limit on the screen which prevents scroll of the whole page
          height: "67vh",
        }}
      >
        <PropertyTables />
      </div>
      {/* add property modal */}
    </div>
  );
}

export default Property;
