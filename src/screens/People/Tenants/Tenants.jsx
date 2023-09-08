import React from "react";
import React from "react";
import { ActionButton } from "../../components/ActionButton/ActionButton";

const Tenants = () => {
  return (
    <Box>
      <ActionButton
        handleAction={() => setAddTenantModalOpen(true)}
        label={"Add Tenant"}
      />
      <AddPropertyModal
        addPropertyOpen={addPropertyOpen}
        handleAddPropertyClose={handleAddPropertyClose}
      />
    </Box>
  );
};

export default Tenants;
