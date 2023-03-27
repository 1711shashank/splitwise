import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './Body.css'
import ChatCard from '../Layout/ChatCard'
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import PageContext from '../Context/PageContext';


const Body = () => {

  const navigate = useNavigate();

  const { setInboxId, setInboxName, setMessageCardArray } = useContext(PageContext);

  const [chatCardArray, setCharCardArray] = useState([]);

  const handalClickChatCard = ( inboxId, inboxName, messageCardArray) => {

    setMessageCardArray(messageCardArray);
    setInboxName(inboxName);
    setInboxId(inboxId);
    navigate("/inbox");

  }

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/getUserData`);
    console.log(response.data.userData);

    setCharCardArray(response.data.userData.chatCard);

  };

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <>
      <div className='body'>

        {
          chatCardArray.map((curChatCard) => (
            <div className='body-chatcard' key={curChatCard.inboxId}>
              <div onClick={ () => handalClickChatCard( curChatCard.inboxId, curChatCard.inboxName, curChatCard.messageCard) }>
                <ChatCard inboxName={curChatCard.inboxName}/>
              </div>
            </div>
          ))
        }

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
