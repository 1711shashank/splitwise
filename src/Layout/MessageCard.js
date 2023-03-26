import React from 'react'
import './MessageCard.css'

const MessageCard = ({MessageCardSide}) => {

    const displayName =  MessageCardSide === 'left' ? 'block' : 'none'
    const messageCardColor =  MessageCardSide === 'left' ? '#1F2C33' : '#105e55'
    const messageStatusColor =  MessageCardSide === 'left' ? '#FF5733' : '#68FF00'

    return (
        <>
            <div className='MessageCard' style={{ float: MessageCardSide, backgroundColor: messageCardColor}}>
                <div className='MessageCard-sender'>
                    <p style={{display: displayName}}> Kumar Shashank </p>
                </div>
                <div className='MessageCard-amount'>
                    <p> $ 550 </p>
                </div>
                <div className='MessageCard-status'>
                    <p style={{color:messageStatusColor}}>  {MessageCardSide ==='left' ? "Borrowed" : "Lended"} </p>
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
