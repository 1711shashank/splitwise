import React from 'react'
import './MessageCard.css'

const MessageCard = (props) => {

    const {senderName, messageCard} = props;

    const displayName =  messageCard.messageStatus === 'SEND' ? 'block' : 'none';
    const messageCardSide =  messageCard.messageStatus === 'SEND' ? 'left' : 'right';
    const messageCardColor =  messageCard.messageStatus === 'SEND' ? '#1F2C33' : '#105e55';
    const messageStatusColor =  messageCard.messageStatus === 'SEND' ? '#FF5733' : '#68FF00';

    return (
        <>
            <div className='MessageCard' style={{ float: messageCardSide, backgroundColor: messageCardColor}}>
                <div className='MessageCard-sender'>
                    <p style={{display: displayName}}> {senderName} </p>
                </div>

                <div className='MessageCard-amount'>
                    <p> $ {messageCard.amount} </p>
                </div>

                <div className='MessageCard-status'>
                    <p style={{color:messageStatusColor}}>  {messageCardSide ==='left' ? "Borrowed" : "Lended"} </p>
                </div>

                <div className='MessageCard-details'>
                    <p className='MessageCard-message'> {messageCard.message} </p>
                    <p className='MessageCard-time'> {messageCard.date}</p>
                </div>
            </div>
        </>
    )
}

export default MessageCard
