import React, { useEffect, useState } from 'react'
import './InboxPage.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageCard from '../Layout/MessageCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InboxPage = (props) => {

    const navigate = useNavigate();


    const { inboxId } = props;

    if (!localStorage.getItem('inboxId')) {
        localStorage.setItem('inboxId', inboxId);
    }

    const handalClickBackArrow = () => {
        navigate("/");
    }

    const handalClickMessageCard = () => {
        navigate("/MessageDetails");
    }

    const handalClickAddNew = () => {
        navigate("/AddSplit");
    }

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:5000/getInboxData/${localStorage.getItem('inboxId')}`);
        // console.log(response.data);
    };


    useEffect(() => {
        fetchData();
    })



    return (
        <>
            <div className='InboxPage'>

                <div className='InboxPage-header'>
                    <div className='InboxPage-headerLeft'>
                        <ArrowBackIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} onClick={handalClickBackArrow} />
                        <div className='ChatCard-avatar'>
                            <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='50px' height='50px' alt='' />
                        </div>
                        <p className='InboxPage-headerName'> {localStorage.getItem('inboxId')} </p>
                    </div>
                    <div className='InboxPage-headerRight'>
                        <MoreVertIcon style={{ fontSize: '2.5rem', color: 'lightgray' }} />
                    </div>
                </div>

                <div className='InboxPage-body'>
                    {/* {
                        messageCardArray123.map((curMessageCard) => (
                            <div onClick={handalClickMessageCard} key={ uniqid() }>
                                <MessageCard inboxType={inboxType} messageCard={curMessageCard} />
                            </div>
                        ))
                    } */}
                </div>

                <div className='InboxPage-footer' onClick={handalClickAddNew}>
                    <Button variant="contained"> Add New </Button>
                </div>

            </div>
        </>
    )
}

export default InboxPage
