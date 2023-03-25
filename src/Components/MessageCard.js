import React from 'react'
import './MessageCard.css'

const MessageCard = () => {
    return (
        <>
            <div className='MessageCard'>
                <div className='MessageCard-sender'>
                    <p> Kumar Shashank </p>
                </div>
                <div className='MessageCard-amount'>
                    <p> $ 550 </p>
                </div>
                <div className='MessageCard-status'>
                    <p> Borrowed </p>
                </div>

                <div className='MessageCard-details'>
                    <p className='MessageCard-message'> Food and travel </p>
                    <p className='MessageCard-time'> 8:45 pm</p>
                </div>

            </div>
        </>
    )
}

export default MessageCard
