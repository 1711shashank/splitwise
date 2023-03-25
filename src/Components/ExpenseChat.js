import React, { useContext } from 'react'
import './ExpenseChat.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageCard from './MessageCard';
import PageContext from '../Context/PageContext';
import { Button } from '@mui/material';

const ExpenseChat = () => {

    const { setExpenseChat, setSplitExpense, setExpenseChatDetails } = useContext(PageContext);


    return (
        <>
            <div className='ExpenseChat'>
                <div className='ExpenseChat-header'>
                    <div className='ExpenseChat-headerLeft'>
                        <ArrowBackIcon onClick={() => setExpenseChat(false)} sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} />
                        <div className='chatBox-avatar'>
                            <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='50px' height='50px' alt='' />
                        </div>
                        <p className='ExpenseChat-headerName'> Group Name</p>
                    </div>
                    <div className='ExpenseChat-headerRight'>
                        <MoreVertIcon style={{ fontSize: '2.5rem', color: 'lightgray' }} />
                    </div>
                </div>
                <div className='ExpenseChat-body'>
                    <div onCanClick = {() => {setExpenseChatDetails(true); setSplitExpense(false); setExpenseChat(false);}}>
                        <MessageCard />
                    </div>
                    <div>
                        <MessageCard />
                    </div>
                    <div>
                        <MessageCard />
                    </div>
                </div>
                <div className='ExpenseChat-footer'>
                    <Button variant="contained" onClick={() => { setSplitExpense(true); setExpenseChat(false); }}> Add New </Button>
                </div>
            </div>
        </>
    )
}

export default ExpenseChat
