import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

const Expenses = (props) => {


  return (
    <Card className="expenses">
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
