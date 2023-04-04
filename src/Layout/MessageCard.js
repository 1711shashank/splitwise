import React from 'react'
import './MessageCard.css'
import moment from 'moment';


const MessageCard = (props) => {

    const { messageCard } = props;
    
    const messageCardSide = messageCard.senderEmail === localStorage.getItem('email') ? 'right' : 'left';
    const messageCardColor = messageCard.senderEmail === localStorage.getItem('email') ? '#105e55' : '#1F2C33';
    const messageStatusColor = messageCard.senderEmail === localStorage.getItem('email') ? '#68FF00' : '#FF5733';
    const displayName = messageCard.senderEmail === localStorage.getItem('email') ? 'none' : 'block';



    return (
        <>
            <div className='MessageCard' style={{ float: messageCardSide, backgroundColor: messageCardColor }}>
                <div className='MessageCard-sender'>
                    <p style={{ display: displayName }}> {messageCard.senderName} </p>
                </div>

                <div className='MessageCard-amount'>
                    <p> $ {messageCard.amount} </p>
                </div>

                <div className='MessageCard-details'>
                    <div className='MessageCard-left'>
                        <p className='MessageCard-status' style={{ color: messageStatusColor }}>  {messageCardSide === 'left' ? "Borrowed" : "Lended"} </p>
                        <p className='MessageCard-message'> {messageCard.message} </p>
                    </div>

                    <div className='MessageCard-right'>
                        <p className='MessageCard-time'>  {moment(messageCard.date).format('LT')}</p>
                        <p className='MessageCard-data'> {moment(messageCard.date).format("DD MMM YY")} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageCard
