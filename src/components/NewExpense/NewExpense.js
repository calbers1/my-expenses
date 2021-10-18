import './NewExpense.css';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props)=>{

    const submitExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    
    return(
        <Card className="new-expense">
            <ExpenseForm onNewExpenseSubmit={submitExpenseDataHandler}/>
        </Card>
    );

}

export default NewExpense;