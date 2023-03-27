import React from 'react'
import './InboxPage.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageCard from '../Layout/MessageCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InboxPage = () => {

    const navigate = useNavigate();

    const handalClickBackArrow = () => {
        navigate("/");
    }

    const handalClickMessageCard = () => {
        navigate("/MessageDetails");
    }

    const handalClickAddNew = () => {
        navigate("/AddSplit");
    }


    return (
        <>
            <div className='InboxPage'>
                <div className='InboxPage-header'>
                    <div className='InboxPage-headerLeft'>
                        <ArrowBackIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} onClick={handalClickBackArrow} />
                        <div className='ChatCard-avatar'>
                            <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='50px' height='50px' alt='' />
                        </div>
                        <p className='InboxPage-headerName'> Group Name</p>
                    </div>
                    <div className='InboxPage-headerRight'>
                        <MoreVertIcon style={{ fontSize: '2.5rem', color: 'lightgray' }} />
                    </div>
                </div>
                <div className='InboxPage-body'>
                    <div onClick={handalClickMessageCard} >
                        <MessageCard MessageCardSide={'left'} />
                    </div>
                    <div onClick={handalClickMessageCard}>
                        <MessageCard MessageCardSide={'right'} />
                    </div>
                    <div onClick={handalClickMessageCard}>
                        <MessageCard MessageCardSide={'left'} />
                    </div>
                    <div onClick={handalClickMessageCard}>
                        <MessageCard MessageCardSide={'right'} />
                    </div>
                </div>
                <div className='InboxPage-footer' onClick={handalClickAddNew}>
                    <Button variant="contained"> Add New </Button>
                </div>
            </div>
        </>
    )
}

export default InboxPage
