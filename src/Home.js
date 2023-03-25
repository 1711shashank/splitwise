import React, { useState } from 'react'
import Body from './Components/Body';
import Header from './Components/Header';
import ExpenseChat from './Components/ExpenseChat';
import SplitExpense from './Components/SplitExpense';
import PageContext from './Context/PageContext';
import ExpenseChatDetails from './Components/ExpenseChatDetails';


const Home = () => {

    const [splitExpense, setSplitExpense] = useState(false);
    const [expenseChat, setExpenseChat] = useState(false);
    const [expenseChatDetails, setExpenseChatDetails] = useState(false);


    return (

        <div className='Home'>
            <PageContext.Provider value={{ setSplitExpense, setExpenseChat, setExpenseChatDetails }}>
                {
                    expenseChatDetails 
                    ? <ExpenseChatDetails/>
                    : expenseChat 
                        ? <ExpenseChat/>
                        : splitExpense 
                            ? <SplitExpense/> 
                            : <> <Header/> <Body/> </>  
                }
            </PageContext.Provider>
            <ExpenseChatDetails/>
        </div>
    )
}

export default Home
