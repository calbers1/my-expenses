import { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate + "CST"),
    };
    props.onNewExpenseSubmit(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  const cancelHandler = () => {
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    props.cancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            required={true}
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            required={true}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="12-31-2022"
            value={enteredDate}
            required={true}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onclick={cancelHandler}>Cancel</button>
        <button type="submit">Submit Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
