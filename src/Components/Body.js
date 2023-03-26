import React, { useContext } from 'react'
import './Body.css'
import ChatCard from '../Layout/ChatCard'
import PageContext from '../Context/PageContext';
import AddIcon from '@mui/icons-material/Add';


const Body = () => {

  const { setShowSplitPage, setShowInboxPage, setShowMessageCardDetailPage } = useContext(PageContext);

  const handalClickChatCard = () => {
    setShowInboxPage(true);

    setShowSplitPage(false);
    setShowMessageCardDetailPage(false);


  }

  return (
    <>
      <div className='body'>
        <div className='body-chatcard'>
          <div onClick={handalClickChatCard}>
            <ChatCard />
          </div>
          <div onClick={handalClickChatCard}>
            <ChatCard />
          </div>
          <div onClick={handalClickChatCard}>
            <ChatCard />
          </div>
          <div onClick={handalClickChatCard}>
            <ChatCard />
          </div>
          <div onClick={handalClickChatCard}>
            <ChatCard />
          </div>
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
