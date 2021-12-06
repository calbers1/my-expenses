import "./NewExpense.css";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import { React, useState } from "react";
const NewExpense = (props) => {
  const numberOfExpenses = props.numberOfExpenses + 1;
  const [expenseBtnPressed, setExpenseBtnPressed] = useState(false);

  const submitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: "e" + numberOfExpenses,
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setExpenseBtnPressed(false);
  };

  const cancelExpenseHandler = () => {
    setExpenseBtnPressed(false);
  };

  const displayBtnClickHandler = () => {
    setExpenseBtnPressed(true);
  };

  let displayItem = (
    <button onClick={displayBtnClickHandler}>Create Expense</button>
  );

  if (expenseBtnPressed) {
    displayItem = (
      <ExpenseForm
        onNewExpenseSubmit={submitExpenseDataHandler}
        cancel={cancelExpenseHandler}
      />
    );
  }

  return <Card className="new-expense">{displayItem}</Card>;
};

export default NewExpense;
