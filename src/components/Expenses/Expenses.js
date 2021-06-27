import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from "./ExpenseFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from './ExpensesChart'

import './Expenses.css'

function Expenses(props) {
  const [ filteredYear, setFilteredYear ] = useState('2020');

    const filterChangeHandler = (filter) => {
      setFilteredYear(filter);
     
    }
  const filteredExpenses = props.items.filter( expense => 
    expense.date.getFullYear().toString() === filteredYear )


    const elements = <div>
      <Card className="expenses">
        <ExpenseFilter 
        selected={ filteredYear } 
        onChangeFiltered={ filterChangeHandler }
        /> 
        <ExpensesChart expenses={ filteredExpenses }/>
        <ExpensesList items={ filteredExpenses }/>
      </Card>
    </div>

    return elements
}

export default Expenses