import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Accounting = () => {
  const dataSet = [
    { label: " Unpaid Rent", startIcon: "strikethrough_s", path: "accounting" },
    {
      label: "Open Bills",
      startIcon: "paid",
      path: "accounting",
    },
    { label: "Reconcilliation", startIcon: "recycling", path: "accounting" },
    {
      label: "Recurring Bills",
      startIcon: "currency_exchange",
      path: "accounting",
    },
    { label: "Banking", startIcon: "account_balance", path: "accounting" },
    {
      label: "Chart of Accounts",
      startIcon: "person_book",
      path: "Lease Renewals",
    },
    { label: "Print Checks", startIcon: "print", path: "accounting" },
    {
      label: "Outgoing Payments",
      startIcon: "pie_chart",
      path: "accounting",
      path: "accounting",
    },
  ];

  return (
    <CategoryAccordion
      categoryLabel="Accounting"
      categoryIcon={"payments"}
      categoryOptionsList={dataSet}
    />
  );
};

export default Accounting;
