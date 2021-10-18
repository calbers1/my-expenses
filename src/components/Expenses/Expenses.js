import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react/cjs/react.development';

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState('');
  const expenseFilterHandler = (filter)=>{
    setFilterValue(filter);
    console.log("filter value in expenses: ")
    console.log(filterValue);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onExpenseFilterSet={expenseFilterHandler}></ExpensesFilter>
      <ExpenseItem
        title={props.expenseData[0].title}
        amount={props.expenseData[0].amount}
        date={props.expenseData[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseData[1].title}
        amount={props.expenseData[1].amount}
        date={props.expenseData[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseData[2].title}
        amount={props.expenseData[2].amount}
        date={props.expenseData[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseData[3].title}
        amount={props.expenseData[3].amount}
        date={props.expenseData[3].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
