import { Box } from "@mui/material";
import React, { useState } from "react";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { AddPropertyModal } from "../../modals/Property/AddPropertyModal";

function Property() {
  // state to trigger addProperty Modal
  const [addPropertyOpen, setAddPropertyOpen] = useState(false);
  // function to close addProperty Modal
  const handleAddPropertyClose = () => {
    setAddPropertyOpen(false);
  };
  return (
    <Box>
      <ActionButton
        handleAction={() => setAddPropertyOpen(true)}
        label={"Create New"}
      />
      <AddPropertyModal
        addPropertyOpen={addPropertyOpen}
        handleAddPropertyClose={handleAddPropertyClose}
      />
    </Box>
  );
}

export default Property;
