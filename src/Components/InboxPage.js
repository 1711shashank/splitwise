import React, { useEffect, useState } from 'react'
import './InboxPage.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageCard from '../Layout/MessageCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InboxPage = () => {

    const navigate = useNavigate();

    const [inboxData, setIndoxData] = useState({});
    const [messageCardArray, setMessageCardArray] = useState([]);

    const handalClickBackArrow = () => {
        localStorage.removeItem('inboxId');
        navigate("/");
    }

    const handalClickAddNew = () => {
        navigate("/AddSplit");
    }

    const fetchData = async () => {
        const response = await axios.post(`http://localhost:5000/getMessages`, { authToken: localStorage.getItem('authToken'), inboxId: localStorage.getItem('inboxId') });
        
        setIndoxData(response.data.inboxData);
        setMessageCardArray(response.data.inboxData.messageCard);
    };


    useEffect(() => {
        fetchData();
    }, [])



    return (
        <>
            <div className='InboxPage'>

                <div className='InboxPage-header'>
                    <div className='InboxPage-headerLeft'>
                        <ArrowBackIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} onClick={handalClickBackArrow} />
                        <div className='ChatCard-avatar'>
                            <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='50px' height='50px' alt='' />
                        </div>
                        <p className='InboxPage-headerName'> {inboxData.inboxName} </p>
                    </div>
                    <div className='InboxPage-headerRight'>
                        <MoreVertIcon style={{ fontSize: '2.5rem', color: 'lightgray' }} />
                    </div>
                </div>

                <div className='InboxPage-body'>
                    {
                        messageCardArray.map((curMessageCard) => (
                            <MessageCard messageCard={curMessageCard} inboxType={inboxData.inboxType} key={curMessageCard.messageCardId}/>
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
