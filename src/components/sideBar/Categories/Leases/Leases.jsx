import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Leases = () => {
  const dataSet = [
    { label: "Draft Leases", startIcon: "edit_note", path: "Draft Leases" },
    {
      label: "Lease Renewals",
      startIcon: "edit_note",
      path: "Lease Renewals",
    },
  ];

  return (
    <CategoryAccordion
      categoryLabel="Leases"
      categoryIcon={"description"}
      categoryOptionsList={dataSet}
    />
  );
};

export default Leases;
