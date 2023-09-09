import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Leasing = () => {
  const dataSet = [
    { label: "Active Leases", startIcon: "check", path: "Active Leases" },
    {
      label: "Draft Leases",
      startIcon: "edit_note",
      path: "Draft Leases",
    },
    {
      label: "Lease Renewals",
      startIcon: "auto_mode",
      path: "Lease Renewals",
    },
    {
      label: "Rental Applications",
      startIcon: "attach_money",
      path: "Rental Applications",
    },
  ];

  return (
    <CategoryAccordion
      categoryLabel="Leasing"
      categoryIcon={"description"}
      categoryOptionsList={dataSet}
    />
  );
};

export default Leasing;
