import React from 'react'
import './IndividualContributionProfile.css'

const IndividualContributionProfile = () => {
    return (
        <>
            <div className='IndividualContributionProfile'>

                <div className='IndividualContributionProfile-left'>
                    <div className='ChatCard-avatar'>
                        <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='35px' height='35px' alt='' />
                    </div>
                    <p className='AddSplit-profile-name'> Kumar Shashank </p>
                </div>

                <div className='IndividualContributionProfile-right'>
                    <p> $ 5000 </p>
                </div>
            </div>

        </>
    )
}

export default IndividualContributionProfile
