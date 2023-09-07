import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Reports = () => {
  const dataSet = [
    { label: "Annoucements", startIcon: "edit_note", path: "campaign" },
  ];

  return (
    <CategoryAccordion
      categoryLabel="Reports"
      categoryIcon={"outgoing_mail"}
      categoryOptionsList={dataSet}
    />
  );
};

export default Reports;
