import React, { useContext } from 'react'
import './Body.css'
import ChatBox from './ChatBox'
import Chip from '@mui/material/Chip';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PageContext from '../Context/PageContext';

const Body = () => {

  const { setSplitExpense } = useContext(PageContext);

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
        <div className='body-addExpense'>
          <Chip
            className='body-addButton'
            icon={<ReceiptIcon style={{ color: 'white' }} />}
            label="Add expense"
            size="medium"
            style={{ fontSize: '7rem' }}
            onClick={() => setSplitExpense(true)}
          />
        </div>
      </div>


    </>
  )
}

export default Body
