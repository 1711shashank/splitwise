import React, { useContext } from 'react'
import './Body.css'
import ChatBox from './ChatBox'
import PageContext from '../Context/PageContext';
import AddIcon from '@mui/icons-material/Add';


const Body = () => {

  const { setExpenseChat } = useContext(PageContext);

  return (
    <>
      <div className='body'>
        <div onClick={() => setExpenseChat(true)}>
          <ChatBox />
        </div>
        <div onClick={() => setExpenseChat(true)}>
          <ChatBox />
        </div>
        <div onClick={() => setExpenseChat(true)}>
          <ChatBox />
        </div>
        <div onClick={() => setExpenseChat(true)}>
          <ChatBox />
        </div>
        <div onClick={() => setExpenseChat(true)}>
          <ChatBox />
        </div>
        
        <div className='body-addButton'>
          <AddIcon
            style={{ fontSize: '3.3rem', color: 'white' }}
          />
        </div>
      </div>


    </>
  )
}

export default Body
