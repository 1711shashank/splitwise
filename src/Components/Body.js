import React, { useEffect } from 'react'
import axios from 'axios';
import './Body.css'
import ChatCard from '../Layout/ChatCard'
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';


const Body = () => {

  const navigate = useNavigate();

  const handalClickChatCard = () => {
    navigate("/inbox");
  }

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/getUserData`);
    console.log(response.data.userData);

  };

  useEffect(() => {
    fetchData();
  }, [])


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
