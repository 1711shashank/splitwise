import { Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import SplitBetweenProfiles from '../Layout/SplitBetweenProfiles'
import './AddSplit.css'
import uniqid from 'uniqid';



const AddSplit = (props) => {

    const { inboxMemberArray } = props;

    const navigate = useNavigate();
    const emailInput = useRef(0);

    useEffect(() => {
        if (emailInput.current) {
            emailInput.current.focus();
        }
    }, []);

    const handalClickSplitButton = () => {
        navigate("/inbox");
    }

    return (
        <>

            <div className='AddSplit'>

                <div className='AddSplit-details'>
                    <p className='AddSplit-text'>Total</p>
                    <input className='AddSplit-total' type='number' placeholder='0' ref={emailInput} />
                    <input className='AddSplit-for' type='text' placeholder="What's this for" />
                </div>

                <div className='AddSplit-profiles'>
                    {inboxMemberArray.map((inboxMember) => (
                        <div key={uniqid()}>
                        <SplitBetweenProfiles inboxMember={inboxMember} />
                        </div>
                    ))}
                </div>

                <div className='AddSplit-button'>
                    <Button variant="contained" onClick={handalClickSplitButton}> Split</Button>
                </div>
            </div>
        </>
    )
}

export default AddSplit
