import React from 'react'
import './MessageCard.css'

const MessageCard = ({MessageCardSide}) => {

    const MessageCardColor =  MessageCardSide === 'left' ? '#1F2C33' : '#105e55'
    const MessageStatusColor =  MessageCardSide === 'left' ? '#FF5733' : '#68FF00'



    return (
        <>
            <div className='MessageCard' style={{ float: MessageCardSide, backgroundColor: MessageCardColor}}>
                <div className='MessageCard-sender'>
                    <p> Kumar Shashank </p>
                </div>
                <div className='MessageCard-amount'>
                    <p> $ 550 </p>
                </div>
                <div className='MessageCard-status'>
                    <p style={{color:MessageStatusColor}}>  {MessageCardSide ==='left' ? "Borrowed" : "Lended"} </p>
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
