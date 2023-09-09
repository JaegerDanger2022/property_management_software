import React from "react";
import CategoryAccordion from "../../Accordion/CategoryAccordion";

const Accounting = () => {
  const dataSet = [
    { label: "Unpaid Rent", startIcon: "strikethrough_s", path: "Unpaid Rent" },
    {
      label: "Open Bills",
      startIcon: "paid",
      path: "Open Bills",
    },
    {
      label: "Reconcilliation",
      startIcon: "recycling",
      path: "Reconcilliation",
    },
    {
      label: "Recurring Bills",
      startIcon: "currency_exchange",
      path: "Recurring Bills",
    },
    { label: "Banking", startIcon: "account_balance", path: "Banking" },
    {
      label: "Chart of Accounts",
      startIcon: "person_book",
      path: "Chart of Accounts",
    },
    { label: "Print Checks", startIcon: "print", path: "Print Checks" },
    {
      label: "Outgoing Payments",
      startIcon: "pie_chart",
      path: "accounting",
      path: "Outgoing Payments",
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
