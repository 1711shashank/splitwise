import React from 'react'
import './MessageCard.css'

const MessageCard = (props) => {

    const { inboxType, messageCard } = props;

    console.log(inboxType, messageCard);

    const messageCardSide = messageCard.messageStatus === 'SEND' ? 'right' : 'left';
    const messageCardColor = messageCard.messageStatus === 'SEND' ? '#105e55' : '#1F2C33';
    const messageStatusColor = messageCard.messageStatus === 'SEND' ? '#68FF00' : '#FF5733';
    const displayName = (messageCard.messageStatus === 'SEND' || inboxType === 'INDIVIDUAL' ) ? 'none' : 'block';


    return (
        <>
            <div className='MessageCard' style={{ float: messageCardSide, backgroundColor: messageCardColor}}>
                <div className='MessageCard-sender'>
                    <p style={{display: displayName}}> {messageCard.senderName} </p>
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
