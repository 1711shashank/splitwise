import React from 'react'
import Body from './Components/Body';
import Header from './Layout/Header';
import InboxPage from './Components/InboxPage';
import AddSplit from './Components/AddSplit';
import MessageDetailsPage from './Components/MessageDetailsPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './auth/LoginPage';


const Home = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<> <Header /> <Body /> </>}></Route>
            </Routes>
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
            <Routes>
                <Route path="/inbox" element={<InboxPage />}></Route>
            </Routes>
            <Routes>
                <Route path="/MessageDetails" element={<MessageDetailsPage />}></Route>
            </Routes>
            <Routes>
                <Route path="/addSplit" element={<AddSplit />}></Route>
            </Routes>
        </Router>
    )
}

export default Home
