import React,{useState} from 'react'

function ExpenseForm({addExpense}) {
    const[title,setTitle] = useState("Groceray");
    const [amount,setAmount] = useState("10.00");


const handleSubmit = (e) =>{
   e.preventDefault();
    if(!amount || !title || amount<=0) return ;

    const newExpense = {
        id:Date.now(),
        title,
        amount:parseFloat(amount).toFixed(2), 
    };

    addExpense(newExpense);
    setTitle("");
    setAmount("");
    

}


  return ( 
    <>
    <div>
        <form onSubmit = {handleSubmit}>
            <label htmlFor='expense-title'>Expenses Name</label>
            <input 
            type= "text"
            id= "expense-title"
            name= "expenseTitle"
            placeholder='Expenses name'
            value= {title}
            onChange = {(e)=>setTitle(e.target.value)}
            />


            <br/>
            <label htmlFor='expense-amount'>Enter AMount</label>

            <input 
            type="number"
            id="expense-amount"
            name="expenseAmount"
            placeholder=' Amount ($)'
            value = {amount}
            onChange = {(e)=>setAmount(e.target.value)}
            />
            <br/>

            <button 
            type= "submit">Add Expense </button>

        </form>
      
    </div>
    </>
  )
}

export default ExpenseForm
