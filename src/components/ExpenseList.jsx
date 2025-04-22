import React from 'react'

function ExpenseList({expenses,deleteExpense}) {




  return (
    <div>
        <ul>
            {expenses.length=== 0 ? 
            (<p> No expenses added</p>):

            (expenses.map((expense)=>(
                <li 
                key={expense.id}
                >

                    <span>{expense.title}</span>
                    <span>${expense.amount}</span>

                    <button onClick = {()=> deleteExpense(expense.id)}>

                      X  
                    </button>




                </li>

            )))
        
        
        }





        </ul>
      
    </div>
  )
}

export default ExpenseList
