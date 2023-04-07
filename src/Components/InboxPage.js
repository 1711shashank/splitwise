import React, { useEffect, useState } from 'react'
import './InboxPage.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageCard from '../Layout/MessageCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { calculatePaybaleAmount } from '../Utils/calculatePaybaleAmount';

const InboxPage = () => {

    const navigate = useNavigate();
    const [inboxData, setIndoxData] = useState({});
    const [paybaleAmount, setPaybaleAmount] = useState();
    const [messageCardArray, setMessageCardArray] = useState([]);

    const amountTextColor = paybaleAmount === 0 ? 'gray' : (paybaleAmount > 0 ? '#68FF00' : '#FF5733');

    const handalClickBackArrow = () => {
        localStorage.removeItem('inboxId');
        navigate("/");
    }

    const handalClickAddNew = () => {
        navigate("/AddSplit");
    }

    const fetchData = async () => {
        const response = await axios.post(`https://splitwise-server.onrender.com/getMessages`, { authToken: localStorage.getItem('authToken'), inboxId: localStorage.getItem('inboxId') });

        setIndoxData(response.data.inboxData);
        setMessageCardArray(response.data.inboxData.messageCard);
        setPaybaleAmount(calculatePaybaleAmount(response.data.inboxData));

    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className='InboxPage'>

                <div className='InboxPage-header'>
                    <div className='InboxPage-headerLeft'>
                        <ArrowBackIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} onClick={handalClickBackArrow} />
                        <div className='ChatCard-avatar'>
                            <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='50px' height='50px' alt='' />
                        </div>
                        <div className='InboxPage-headerMid'>
                            <p className='InboxPage-headerName'> {inboxData.inboxName} </p>
                            <p className='InboxPage-headerAmount' style={{'color': amountTextColor }}> {paybaleAmount} </p>

                        </div>

                    </div>
                    <div className='InboxPage-headerRight'>
                        <MoreVertIcon style={{ fontSize: '2.5rem', color: 'lightgray' }} />
                    </div>
                </div>

                <div className='InboxPage-body'>
                    {
                        messageCardArray.map((curMessageCard) => (
                            <MessageCard messageCard={curMessageCard} key={curMessageCard.messageCardId} />
                        ))
                    }
                </div>

                <div className='InboxPage-footer' onClick={handalClickAddNew}>
                    <Button variant="contained"> Add New </Button>
                </div>

            </div>
        </>
    )
}

export default InboxPage
