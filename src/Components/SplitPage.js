import { Button } from '@mui/material'
import React, { useContext, useEffect, useRef } from 'react'
import PageContext from '../Context/PageContext'
import SplitBetweenProfiles from '../Layout/SplitBetweenProfiles'
import './SplitPage.css'


const SplitPage = () => {

    const { setShowSplitPage, setShowInboxPage } = useContext(PageContext);
    const emailInput = useRef(0);

    useEffect(() => {
        if (emailInput.current) {
            emailInput.current.focus();
        }
    }, []);

    const handalClickSplitButton = () => {
        setShowInboxPage(true);
        setShowSplitPage(false);
    }

    return (
        <>
            <div className='SplitPage'>
                <div className='SplitPage-details'>
                    <p className='SplitPage-text'>Total</p>
                    <input className='SplitPage-total' type='number' placeholder='0' ref={emailInput} />
                    <input className='SplitPage-for' type='text' placeholder="What's this for" />
                </div>

                <div className='SplitPage-profiles'>
                    <SplitBetweenProfiles />
                    <SplitBetweenProfiles />
                    <SplitBetweenProfiles />
                    <SplitBetweenProfiles />
                </div>

                <div className='SplitPage-button'>
                    <Button variant="contained" onClick={handalClickSplitButton}> Split</Button>
                </div>
            </div>
        </>
    )
}

export default SplitPage
