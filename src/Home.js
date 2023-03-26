import React, { useState } from 'react'
import Body from './Components/Body';
import Header from './Layout/Header';
import InboxPage from './Components/InboxPage';
import SplitPage from './Components/SplitPage';
import PageContext from './Context/PageContext';
import MessageCardDetailPage from './Components/MessageCardDetailPage';
import LoginPage from './auth/LoginPage';


const Home = () => {

    const [showLoginPage, setShowLoginPage] = useState(true);
    const [showSplitPage, setShowSplitPage] = useState(false);
    const [showInboxPage, setShowInboxPage] = useState(false);
    const [showMessageCardDetailPage, setShowMessageCardDetailPage] = useState(false);


    return (

        <div className='Home'>
            <PageContext.Provider value={{ setShowLoginPage, setShowSplitPage, setShowInboxPage, setShowMessageCardDetailPage }}>


                {
                    (() => {
                        if(showLoginPage) 
                            return <LoginPage/>
                        if (showMessageCardDetailPage)
                            return <MessageCardDetailPage />
                        else if (showSplitPage)
                            return <SplitPage />
                        else if (showInboxPage)
                            return <InboxPage />
                        else
                            return <> <> <Header /> <Body /> </>   </>

                    })()
                }
            </PageContext.Provider>
        </div>
    )
}

export default Home
