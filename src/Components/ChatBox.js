import React from 'react'
import './ChatBox.css'

const ChatBox = () => {
  return (
    <>
      <div className='chatBox'>
        <div className='chatBox-avatar'>
          <img src = 'https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='50px' height='50px'  alt='' />
        </div>
        <div className='chatBox-details'>
            <p className='chatBox-name'>Kumar Shashank</p>
            <div className='chatBox-info'>
                <p className='chatBox-info-credit' style={{'color':'#507050'}}> +500 </p>
                <p className='chatBox-info-debit' style={{'color':'#846464'}}> -400 </p>
            </div>

        </div>
      </div>
    </>
  )
}

export default ChatBox
