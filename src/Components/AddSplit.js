import React, { useState, useEffect, useRef } from 'react';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import axios from 'axios';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './AddSplit.css'
import uniqid from 'uniqid'


function AddSplit() {

    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState('');
    const [selectedMember, setSelectedMember] = useState([]);
    const [inboxMemberArray, setInboxMemberArray] = useState([]);

    const navigate = useNavigate();
    const emailInput = useRef(0);
    const numberOfMembers = inboxMemberArray.length;

    const fetchData = async () => {
        const response = await axios.post(`http://localhost:5000/getMessages`, { authToken: localStorage.getItem('authToken'), inboxId: localStorage.getItem('inboxId') });
        setInboxMemberArray(response.data.inboxData.inboxMember);
        console.log(response.data.inboxData.inboxMember);
    };

    useEffect(() => {
        if (emailInput.current) {
            emailInput.current.focus();
        }
        fetchData();
    }, [])

    const handleToggle = (emailId) => () => {
        if (selectedMember.includes(emailId)) {
            setSelectedMember(selectedMember.filter((email) => email !== emailId));
        } else {
            setSelectedMember([...selectedMember, emailId]);
        }
    };

    const handalClickSplitButton = async () => {

        const newMessage = {
            inboxId: localStorage.getItem('inboxId'),
            messageCardId: uniqid(),
            amount: amount,
            date: new Date().toString(),
            message: message,
            senderName: 'senderName',
            splitBetween: selectedMember
        }

        await axios.post(`http://localhost:5000/sentMessage`, { authToken: localStorage.getItem('authToken'), newMessage });

        navigate("/inbox");

    }

    return (
        <>
            <div className='AddSplit'>
                <div className='AddSplit-details'>
                    <p className='AddSplit-text'>Total</p>
                    <input className='AddSplit-total' type='number' placeholder='0' ref={emailInput} onChange={(e) => setAmount(e.target.value)} />
                    <input className='AddSplit-for' type='text' placeholder="What's this for" onChange={(e) => setMessage(e.target.value)} />
                </div>

                <div className='AddSplit-profiles'>
                    {inboxMemberArray.map((curInboxMember) => (
                        <ListItem className='AddSplit-SplitBetweenProfiles' key={curInboxMember.email} dense button onClick={handleToggle(curInboxMember.email)}>
                            <div className='AddSplit-SplitBetweenProfiles-left'>
                                <Checkbox checked={selectedMember.includes(curInboxMember.email)} />
                                <div className='ChatCard-avatar'>
                                    <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='35px' height='35px' alt='' />
                                </div>
                                <p className='AddSplit-profile-name'> {curInboxMember.name} </p>
                            </div>

                            <div className='AddSplit-SplitBetweenProfiles-right'>
                                <p style={{ fontSize: '16px', width: 80, color: 'white', padding: '0 10px' }}>
                                    {amount / numberOfMembers}
                                </p>
                            </div>
                        </ListItem>
                    ))}
                </div>

                <div className='AddSplit-button'>
                    <Button variant="contained" onClick={handalClickSplitButton}> Split </Button>
                </div>
            </div>
        </>
    );
}

export default AddSplit;





