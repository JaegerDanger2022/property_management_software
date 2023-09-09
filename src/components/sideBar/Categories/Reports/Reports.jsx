import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Reports = () => {
  const dataSet = [
    { label: "Reports", startIcon: "edit_note", path: "Reports" },
    { label: "Actual Reports", startIcon: "edit_note", path: "Actual Reports" },
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
