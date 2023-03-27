import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './Body.css'
import ChatCard from '../Layout/ChatCard'
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import PageContext from '../Context/PageContext';


const Body = () => {

  const navigate = useNavigate();

  const { setSenderName, setMessageCardArray } = useContext(PageContext);

  const [chatCardArray, setCharCardArray] = useState([]);

  const handalClickChatCard = (messageCardArray, senderName) => {

    setMessageCardArray(messageCardArray);
    setSenderName(senderName);
    navigate("/inbox");

  }

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/getUserData`);
    // console.log(response.data.userData);

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
            <div className='body-chatcard' key={curChatCard._id}>
              <div onClick={ () => handalClickChatCard(curChatCard.messageCard, curChatCard.friendName) }>
                <ChatCard name={curChatCard.friendName}/>
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
