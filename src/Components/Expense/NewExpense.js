import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense =(props)=>{

    const [showForm,setShowForm] = useState(false)

    const showFormHandler=()=>{
        setShowForm(true)
    }
    const stopShowForm=()=>{
        setShowForm(false)
    }

    const saveExpenseDataHandler =(inputExpenseData)=>{}
  

    const addExpenseHandler=(inputExpense)=>{
        console.log('in onAddExpense')

        const expenseData ={
            ...inputExpense,
            id:Math.random().toString()
        }
        // console.log(expenseData)
        props.onData(expenseData)
        
    }
    return(

        <div className="new-expense">
            {!showForm && <button className='han' onClick={showFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onCancel={stopShowForm} onSaveExpenseData={saveExpenseDataHandler} onAddExpense={addExpenseHandler}  />}
        </div>
)


    // return(
    //     <div className="new-expense">
    //         <from>
    //             <saveExpenseDataHandler />
    //             <ExpenseForm onAddExpense={addExpenseHandler} />
    //         </from>
    //     </div>
    // )
}

export default NewExpense;