import './ExpenseItem.css'
import {useState} from 'react';

const ExpenseItems =(props)=>{

    const month =props.exp.date.toLocaleString('en-US',{month:'long'});  
    const day =props.exp.date.toLocaleString('en-US',{day:'2-digit'});  
    const year =props.exp.date.getFullYear();  

    const[title,setTitle] =useState(props.exp.title)



    const btnHandle=()=>{
        console.log("btn clicked")
        // console.log(title)
        // console.log(props.title) 
        // console.log(props.exp.title) 
        setTitle("udated expense")
    }
    return (
        <div className='expense-item'>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
                <div className='expense-date__year'>{year}</div>
            </div>
            <div className='expense-item__description'>
                <h2 >{title}</h2>
                <p className='expense-item__price'>{props.exp.amount}</p>
            </div>
            <button  onClick={btnHandle}>ChangeTitle</button>
        </div>
    )
}

export default ExpenseItems;