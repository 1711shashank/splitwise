import { Button } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SplitBetweenProfiles from '../Layout/SplitBetweenProfiles'
import './AddSplit.css'
import uniqid from 'uniqid';
import axios from 'axios'
import PageContext from '../Context/PageContext'



const AddSplit = (props) => {

    const { inboxId, inboxMemberArray } = props;
    const { setMessageCardId } = useContext(PageContext);

    const numberOfMembers = inboxMemberArray.length;

    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const emailInput = useRef(0);

    useEffect(() => {
        if (emailInput.current) {
            emailInput.current.focus();
        }
    }, []);

    const handalClickSplitButton = async () => {

        const messageCardId = uniqid();
        setMessageCardId(messageCardId);

        const newEntry = {
            userId: '64230141bdb38307719b55c4', 
            inboxId: inboxId, 
            messageCardId : messageCardId,
            amount: amount, 
            date: new Date().toString(),
            message: message, 
            messageStatus: 'SEND'
        }

        await axios.post(`http://localhost:5000/sentMessage`, { newEntry });

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
                    {inboxMemberArray.map((inboxMember) => (
                        <div key={uniqid()}>
                            <SplitBetweenProfiles inboxMember={inboxMember} contributionAmount={amount / numberOfMembers} />
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
