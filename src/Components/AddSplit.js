import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SplitBetweenProfiles from '../Layout/SplitBetweenProfiles'
import './AddSplit.css'
import uniqid from 'uniqid';
import axios from 'axios'


const AddSplit = (props) => {
    
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState('');
    const [inboxMemberArray, setInboxMemberArray] = useState([]);

    const navigate = useNavigate();
    const emailInput = useRef(0);
    const numberOfMembers = inboxMemberArray.length;

    console.log(inboxMemberArray);

    const fetchData = async () => {
        const response = await axios.post(`http://localhost:5000/getMessages`, { inboxId: localStorage.getItem('inboxId') });
        console.log(response.data.inboxData.inboxMember)
        setInboxMemberArray(response.data.inboxData.inboxMember)
    };

    useEffect(() => {
        if (emailInput.current) {
            emailInput.current.focus();
        }
        fetchData();
    }, [])

    const handalClickSplitButton = async () => {

        const newMessage = {
            inboxId : localStorage.getItem('inboxId'),
            messageCardId : uniqid(),
            amount: amount, 
            date: new Date().toString(),
            message: message, 
            senderName:'senderName',
            splitBetween:['gyuu','aksjdh','wkjhew']
        }

        await axios.post(`http://localhost:5000/sentMessage`, { newMessage });

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
                        <div key={uniqid()}>
                            <SplitBetweenProfiles inboxMember={curInboxMember} contributionAmount={amount / numberOfMembers} />
                        </div>
                    ))}
                </div>

                <div className='AddSplit-button'>
                    <Button variant="contained" onClick={handalClickSplitButton}> Split </Button>
                </div>
            </div>
        </>
    )
}

export default AddSplit
