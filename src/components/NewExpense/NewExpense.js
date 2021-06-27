import { useState  } from "react";

import "./NewExpense.css"
import ExpenseFrom from '../NewExpense/ExpenseForm';


const NewExpense = (props) => {
    const [ isEditing, setIsEditing ] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return <div className="new-expense">
        { !isEditing && (
            <button onClick={ startEditingHandler } >Add Expense</button>
        )}
        { isEditing && (
            <ExpenseFrom 
            onSaveExpenseData={ saveExpenseDataHandler } 
            onCancel= { stopEditingHandler } /> 
        )}
    </div>
}

export default NewExpense