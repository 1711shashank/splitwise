import React, { useEffect, useState } from 'react'
import Body from './Components/Body';
import Header from './Layout/Header';
import InboxPage from './Components/InboxPage';
import AddSplit from './Components/AddSplit';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './auth/LoginPage';
import PageContext from './Context/PageContext';
import CreateGroup from './Components/CreateGroup';



const Home = () => {

    const [inboxId, setInboxId] = useState('');
    const [inboxMemberArray, setInboxMemberArray] = useState([]);


    useEffect(() => {
        document.title = 'Splitwise';
    }, [])

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const authToken = urlParams.get('authToken');

        if (authToken) {
            localStorage.setItem('authToken', authToken);

            window.location.href = 'http://localhost:3000';
        }

    }, []);

    return (
        <PageContext.Provider value={{ setInboxId, setInboxMemberArray }}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {
                                    localStorage.getItem('authToken') === null
                                        ? <LoginPage />
                                        : <><Header /> <Body /> </>
                                }
                            </>
                        }
                    />
                </Routes>
                <Routes >
                    <Route path="/inbox" element={<InboxPage />} />
                </Routes>
                <Routes>
                    <Route path="/addSplit" element={<AddSplit inboxId={inboxId} inboxMemberArray={inboxMemberArray} />} />
                </Routes>
                <Routes>
                    <Route path="/createGroup" element={<CreateGroup />} />
                </Routes>
            </Router>
        </PageContext.Provider>

    )
}

export default Home
