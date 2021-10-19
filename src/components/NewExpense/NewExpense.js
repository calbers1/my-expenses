import "./NewExpense.css";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const numberOfExpenses = props.numberOfExpenses + 1;
  const submitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: "e" + numberOfExpenses,
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <Card className="new-expense">
      <ExpenseForm onNewExpenseSubmit={submitExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
