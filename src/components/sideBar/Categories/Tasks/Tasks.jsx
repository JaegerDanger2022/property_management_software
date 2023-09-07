import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Tasks = () => {
  const dataSet = [
    { label: "Unassigned Tasks", startIcon: "edit_note", path: "Tasks" },
    { label: "My Tasks", startIcon: "task", path: "Tasks" },
    { label: "Work Orders", startIcon: "draft_orders", path: "Tasks" },
    { label: "All Tasks", startIcon: "task", path: "Tasks" },
    { label: "Recurring Tasks", startIcon: "task_alt", path: "Tasks" },
  ];

  return (
    <CategoryAccordion
      categoryLabel="Tasks"
      categoryIcon={"task"}
      categoryOptionsList={dataSet}
    />
  );
};
export default Tasks;
