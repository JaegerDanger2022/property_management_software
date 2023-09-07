import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Communications = () => {
  const dataSet = [
    { label: "Annoucements", startIcon: "edit_note", path: "campaign" },
    {
      label: "CommunicationLog",
      startIcon: "chat",
      path: "communications",
    },
    {
      label: "SignatureRequests",
      startIcon: "edit_note",
      path: "communications",
    },
    {
      label: "SignatureTemplates",
      startIcon: "border_color",
      path: "communications",
    },
  ];

  return (
    <CategoryAccordion
      categoryLabel="Communications"
      categoryIcon={"phonelink_ring"}
      categoryOptionsList={dataSet}
    />
  );
};

export default Communications;
