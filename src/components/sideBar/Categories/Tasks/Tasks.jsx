import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Tasks = () => {
  const dataSet = [
    {
      label: "Unassigned Tasks",
      startIcon: "edit_note",
      path: "Unassigned Tasks",
    },
    { label: "My Tasks", startIcon: "task", path: "My Tasks" },
    { label: "Work Orders", startIcon: "draft_orders", path: "Work Orders" },
    { label: "All Tasks", startIcon: "task", path: "All Tasks" },
    {
      label: "Recurring Tasks",
      startIcon: "task_alt",
      path: "Recurring Tasks",
    },
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
