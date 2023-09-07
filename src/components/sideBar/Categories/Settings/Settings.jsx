import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Settings = () => {
  const dataSet = [
    { label: "Unassigned Tasks", startIcon: "edit_note", path: "Tasks" },
  ];

  return (
    <CategoryAccordion
      categoryLabel="Settings"
      categoryIcon={"settings"}
      categoryOptionsList={dataSet}
    />
  );
};
export default Settings;
