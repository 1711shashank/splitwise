import React from 'react'
import './MessageDetailsPage.css'
import IndividualContributionProfile from '../Layout/IndividualContributionProfile'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const MessageDetailsPage = () => {

    const navigate = useNavigate();

    const handalClickBackArrow = () => {
        navigate('/inbox');        
    }


    return (
        <>
            <div className='MessageDetailsPage'>
                <div className='MessageDetailsPage-header'>
                    <ArrowBackIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} onClick={handalClickBackArrow}/>
                    <MoreVertIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} />
                </div>
                <div className='MessageDetailsPage-body'>
                    <div className='ChatCard-avatar'>
                        <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='75px' height='75px' alt='' />
                    </div>
                    <div className='MessageDetailsPage-message'>
                    <p>Kumar Shashank paid $ 500</p>


                    </div>
                    <div className='MessageDetailsPage-individualContribution'>

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

export default MessageDetailsPage
