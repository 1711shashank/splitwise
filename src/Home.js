import React, { useState } from 'react'
import Body from './Components/Body';
import Header from './Components/Header';
import ExpenseChat from './Components/ExpenseChat';
import SplitExpense from './Components/SplitExpense';
import PageContext from './Context/PageContext';


const Home = () => {

    const [splitExpense, setSplitExpense] = useState(false);
    const [expenseChat, setExpenseChat] = useState(false);


    return (

        <div className='Home'>
            <PageContext.Provider value={{ setSplitExpense, setExpenseChat }}>
                {
                   expenseChat 
                    ? <ExpenseChat/>
                    : splitExpense 
                        ? <SplitExpense/> 
                        : <> <Header/> <Body/> </>  
                }
            </PageContext.Provider>
        </div>
    )
}

export default Home
