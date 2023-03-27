import React from 'react'
import './ChatCard.css'

const ChatCard = (props) => {

  const {inboxName} = props;

  return (
    <>
      <div className='ChatCard'>
        <div className='ChatCard-avatar'>
          <img src = 'https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='50px' height='50px'  alt='' />
        </div>
        <div className='ChatCard-details'>
            <p className='ChatCard-name'>{inboxName}</p>
            <div className='ChatCard-info'>
                <p className='ChatCard-info-credit' style={{'color':'#507050'}}> +500 </p>
                <p className='ChatCard-info-debit' style={{'color':'#846464'}}> -400 </p>
            </div>

        </div>
      </div>
    </>
  )
}

export default ChatCard
