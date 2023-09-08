import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Rentals = () => {
  const dataSet = [
    { label: "Property", startIcon: "apartment", path: "Property" },
    { label: "Unit", startIcon: "roofing", path: "Unit" },
  ];

  return (
    <CategoryAccordion
      categoryLabel="Rentals"
      categoryIcon={"add_circle"}
      categoryOptionsList={dataSet}
    />
  );
};
export default Rentals;
