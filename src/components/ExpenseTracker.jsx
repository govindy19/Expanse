import React,{useState,useEffect} from 'react'
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";



function ExpenseTracker() {
    const[expenses,setExpenses]= useState([]);


    // Load saved expenses from the local storage
    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
        setExpenses(savedExpenses);
      }, []);
      

//Save expenses to local storage whereever he updates

useEffect(()=>{
    localStorage.setItem("expenses", JSON.stringify(expenses));

},[expenses]);

const addExpense = (expense)=>{
    setExpenses([...expenses,expense]);
}

const deleteExpense =(id)=>{
setExpenses(expenses.filter((expense)=>expense.id !==id));
}

const totalAmount = expenses.reduce((acc,curr)=>acc+curr.amount, 0);


  return (
    <div>
        <h3>Expense Tracker</h3>
        <ExpenseForm addExpense = {addExpense}/>
        <ExpenseList expenses = {expenses } deleteExpense = {deleteExpense}/>
        <h3> Total Spent:  ${totalAmount}</h3>
      
    </div>
  )
}

export default ExpenseTracker
