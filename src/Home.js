import React, { useState } from 'react'
import Body from './Components/Body';
import Header from './Layout/Header';
import InboxPage from './Components/InboxPage';
import SplitPage from './Components/SplitPage';
import PageContext from './Context/PageContext';
import MessageCardDetailPage from './Components/MessageCardDetailPage';


const Home = () => {

    const [showSplitPage, setShowSplitPage] = useState(false);
    const [showInboxPage, setShowInboxPage] = useState(false);
    const [showMessageCardDetailPage, setShowMessageCardDetailPage] = useState(false);


    return (

        <div className='Home'>
            <PageContext.Provider value={{ setShowSplitPage, setShowInboxPage, setShowMessageCardDetailPage }}>

                {
                    (() => {
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
            {/* <ExpenseChatDetails /> */}
        </div>
    )
}

export default Home
