import React, { useState } from "react";
import "../../../App.css";
import PropertyTables from "../../../components/PropertyScreenComponent/PropertyTable";
import ActionButton from "../../../components/ActionButton/ActionButton";
import { Add } from "@mui/icons-material";
import AddPropertyModal from "../../../modals/Property/AddPropertyModal";

function Property() {
  // state to trigger add property modal
  const [addPropertyOpen, setAddPropertyOpen] = useState(false);
  // function to close add property modal
  const handleAddPropertyClose = () => {
    setAddPropertyOpen(false);
  };
  return (
    <div className="propertyContainer">
      <div
        style={{
          display: "grid",
          marginBottom: "2dvh",
        }}
      >
        <h1 style={{ lineHeight: "1" }}>Property</h1>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionButton
            label={"Add Property"}
            startIcon={<Add />}
            handleAction={() => setAddPropertyOpen(true)}
          />
        </div>
      </div>
      <div>
        <PropertyTables />
      </div>
      {/* add property modal */}
      <AddPropertyModal
        addPropertyOpen={addPropertyOpen}
        setAddPropertyOpen={setAddPropertyOpen}
        handleAddPropertyClose={handleAddPropertyClose}
      />
    </div>
  );
}

export default Property;
