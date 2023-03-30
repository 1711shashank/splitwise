import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './Body.css'
import ChatCard from '../Layout/ChatCard'
import { useNavigate } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import PageContext from '../Context/PageContext';



const Body = () => {

  const navigate = useNavigate();

  const { setInboxId, setInboxType, setInboxName, setInboxMemberArray, setMessageCardArray } = useContext(PageContext);

  const [chatCardArray, setCharCardArray] = useState([]);

  const handalClickChatCard = ( inboxId, inboxType, inboxName, inboxMember, messageCardArray) => {

    setMessageCardArray(messageCardArray);
    setInboxMemberArray(inboxMember);
    setInboxName(inboxName);
    setInboxType(inboxType);
    setInboxId(inboxId);

    navigate("/inbox");
  }
  const handalClickCreateGroup = () => {
    navigate("/createGroup");
  }
  const handalClickNewChat = () => {

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
            <div className='body-chatcard' key={curChatCard._id}>
              <div onClick={() => handalClickChatCard( curChatCard._id, curChatCard.inboxType, curChatCard.inboxName, curChatCard.inboxMember, curChatCard.messageCard)}>
                <ChatCard inboxName={curChatCard.inboxName} />
              </div>
            </div>
          ))
        }
        <div className='body-createGroup' onClick={handalClickCreateGroup}>
          <GroupAddIcon
            style={{ fontSize: '3.3rem', color: 'white',padding: '5px' }}
          />
        </div>
        <div className='body-createInbox' onClick={handalClickNewChat}>
          <PersonAddAltSharpIcon
            style={{ fontSize: '3.3rem', color: 'white',padding: '5px' }}
          />
        </div>
      </div>
    </>
  )
}

export default Body
