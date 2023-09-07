import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const People = () => {
  const dataSet = [
    { label: "Tenants", startIcon: "person", path: "people" },
    { label: "Owners", startIcon: "supervisor_account", path: "people" },
    { label: "Vendors", startIcon: "real_estate_agent", path: "people" },
    { label: "Prospects", startIcon: "psychology", path: "people" },
  ];

  return (
    <CategoryAccordion
      categoryLabel="People"
      categoryIcon={"diversity_3"}
      categoryOptionsList={dataSet}
    />
  );
};
export default People;
