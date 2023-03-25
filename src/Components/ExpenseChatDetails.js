import React from 'react'
import './ExpenseChatDetails.css'
import IndividualContributionProfile from './IndividualContributionProfile'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpenseChatDetails = () => {
    return (
        <>
            <div className='ExpenseChatDetails'>
                <div className='ExpenseChatDetails-header'>
                    <ArrowBackIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} />
                    <MoreVertIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} />
                </div>
                <div className='ExpenseChatDetails-body'>
                    <div className='chatBox-avatar'>
                        <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='75px' height='75px' alt='' />
                    </div>
                    <div className='ExpenseChatDetails-message'>
                    <p>Kumar Shashank paid $ 500</p>


                    </div>
                    <div className='ExpenseChatDetails-individualContribution'>

                        <IndividualContributionProfile/>
                        <IndividualContributionProfile/>
                        <IndividualContributionProfile/>
                        <IndividualContributionProfile/>
                        
                    </div>
                </div>


            </div>
        </>
    )
}

export default ExpenseChatDetails
