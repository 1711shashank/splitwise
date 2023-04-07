import React, { useEffect } from 'react'
import Body from './Body';
import InboxPage from './InboxPage';
import AddSplit from './AddSplit';
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from '../auth/LoginPage';
import CreateGroup from './CreateGroup';



const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Splitwise';
    }, [])

    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const authToken = urlParams.get('authToken');
        const email = urlParams.get('email');

        if (authToken) {
            localStorage.setItem('authToken', authToken);
            localStorage.setItem('email', email);

            window.location.href = '/';
        }

        
        if (localStorage.getItem('authToken') === null) navigate("/login");


    }, []);

    return (
        <>
            <Routes>
                <Route exact path="/inbox" element={<InboxPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/addSplit" element={<AddSplit />} />
                <Route exact path="/createGroup" element={<CreateGroup />} />
                <Route path="/" element={<Body />} />

            </Routes>
        </>

    )
}

export default Home
