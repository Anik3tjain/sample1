import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [inputTitle, setInputTitle] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    const submitHandler = (event) => {
        console.log("in submit handler")
        event.preventDefault();
        const expense = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        }
        console.log(expense)
        setInputTitle('')
        setInputAmount('')
        setInputDate('')
        props.onAddExpense(expense)


    }

    const titleChangeHandler = (event) => {
        // console.log(event.target.value)
        setInputTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        // console.log(event.target.value)
        setInputAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        // console.log(event.target.value)
        setInputDate(event.target.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={inputTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={inputAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='Date' value={inputDate} onChange={dateChangeHandler} ></input>

                </div>
            </div>
            <div className='new-expense__actions'>
            <button className='han' type='button' onClick={props.onCancel}>Cancel</button>&emsp;
                <button  className='han' type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;