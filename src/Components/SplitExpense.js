import { Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import SplitBetweenProfiles from './SplitBetweenProfiles'
import './SplitExpense.css'


const SplitExpense = () => {

    const emailInput = useRef(0);

    useEffect(() => {
        if (emailInput.current) {
          emailInput.current.focus();
        }
      }, []);
    
    return (
        <>
            <div className='splitExpense'>
                <div className='splitExpense-details'>
                    <p className='splitExpense-text'>Total</p>
                    <input className='splitExpense-total' type='number' placeholder='0' ref={emailInput}  />
                    <input className='splitExpense-for' type='text' placeholder="What's this for" />
                </div>

                <div className='splitExpense-profiles'>
                    <SplitBetweenProfiles />
                    <SplitBetweenProfiles />
                    <SplitBetweenProfiles />
                    <SplitBetweenProfiles />
                </div>

                <div className='splitExpense-button'>
                    <Button variant="contained"> Split</Button>
                </div>
            </div>
        </>
    )
}

export default SplitExpense
