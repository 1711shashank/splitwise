import React, { useContext } from 'react'
import './MessageCardDetailPage.css'
import IndividualContributionProfile from '../Layout/IndividualContributionProfile'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PageContext from '../Context/PageContext';

const ExpenseChatDetails = () => {

  const { setShowInboxPage, setShowMessageCardDetailPage } = useContext(PageContext);


    const handalClickBackArrow = () => {
        setShowMessageCardDetailPage(false);
        setShowInboxPage(true);
    }


    return (
        <>
            <div className='ExpenseChatDetails'>
                <div className='ExpenseChatDetails-header'>
                    <ArrowBackIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} onClick={handalClickBackArrow}/>
                    <MoreVertIcon sx={{ fontSize: '3rem', color: 'lightgray', marginRight: '1rem' }} />
                </div>
                <div className='ExpenseChatDetails-body'>
                    <div className='ChatCard-avatar'>
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
