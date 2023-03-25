import React, { useState } from 'react'
import Body from './Components/Body';
import Header from './Components/Header';
import SplitExpense from './Components/SplitExpense';
import PageContext from './Context/PageContext';


const Home = () => {

    const [splitExpense, setSplitExpense] = useState(false);


    return (

        <div className='Home'>
            <PageContext.Provider value={{ setSplitExpense }}>
                {
                   !splitExpense 
                   ? <> <Header /> <Body /> </> 
                   : <SplitExpense/>    
                }
                
            </PageContext.Provider>
        </div>
    )
}

export default Home
