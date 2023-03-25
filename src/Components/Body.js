import React from 'react'
import './Body.css'
import ChatBox from './ChatBox'
import Chip from '@mui/material/Chip';
import ReceiptIcon from '@mui/icons-material/Receipt';



const Body = () => {



  return (
    <>
      <div className='body'>
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <Chip
          className='body-addButton'
          icon={<ReceiptIcon style={{ color: 'white' }} />}
          label="Add expense"
          size="medium"
          style={{ fontSize: '7rem' }} />
      </div>


    </>
  )
}

export default Body
