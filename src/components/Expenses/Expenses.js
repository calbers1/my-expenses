import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import { React, useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2021");

  const expenseFilterHandler = (filter) => {
    setFilterValue(filter);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterValue}
          onExpenseFilterSet={expenseFilterHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
