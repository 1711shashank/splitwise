import React, { useState } from 'react'
import Body from './Components/Body';
import Header from './Layout/Header';
import InboxPage from './Components/InboxPage';
import AddSplit from './Components/AddSplit';
import MessageDetailsPage from './Components/MessageDetailsPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './auth/LoginPage';
import PageContext from './Context/PageContext';



const Home = () => {

    const [inboxType, setInboxType] = useState('');
    const [inboxName, setInboxName] = useState('');
    const [inboxMemberArray, setInboxMemberArray] = useState([]);
    const [messageCardArray, setMessageCardArray] = useState([]);

    return (
        <PageContext.Provider value={{ setInboxType, setInboxName, setInboxMemberArray, setMessageCardArray }}>
            <Router>
                <Routes>
                    <Route path="/" element={<> <Header /> <Body /> </>}></Route>
                </Routes>
                <Routes>
                    <Route path="/login" element={<LoginPage />}></Route>
                </Routes>
                <Routes>
                    <Route path="/inbox" element={<InboxPage inboxType={inboxType} inboxName={inboxName} messageCardArray={messageCardArray}/>}></Route>
                </Routes>
                <Routes>
                    <Route path="/MessageDetails" element={<MessageDetailsPage />}></Route>
                </Routes>
                <Routes>
                    <Route path="/addSplit" element={<AddSplit inboxMemberArray={inboxMemberArray}/>}></Route>
                </Routes>
            </Router>
        </PageContext.Provider>

    )
}

export default Home
