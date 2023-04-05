import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Body.css'
import ChatCard from '../Layout/ChatCard'
import { useNavigate } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { calculatePaybaleAmount } from '../Utils/calculatePaybaleAmount';



const Body = () => {

    const navigate = useNavigate();
    const [inboxList, setInboxList] = useState([]);

    const handalClickChatCard = (inboxId) => {
        localStorage.setItem('inboxId', inboxId);
        navigate("/inbox");
    }
    const handalClickCreateGroup = () => {
        navigate("/createGroup");

    }

    const fetchData = async () => {
        const response = await axios.post(`http://localhost:5000/getInboxList`, { authToken: localStorage.getItem('authToken') });
        setInboxList(response.data.inboxList);
        console.log(response.data.inboxList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='body'>
                {
                    inboxList.map((curIndexList) => (
                        <div className='body-chatcard' key={curIndexList._id}>

                            <div onClick={() => handalClickChatCard(curIndexList._id)}>
                                <ChatCard paybaleAmount={calculatePaybaleAmount(curIndexList)} inboxName={curIndexList.inboxName} />
                            </div>
                        </div>
                    ))
                }
                <div className='body-createGroup' onClick={handalClickCreateGroup}>
                    <GroupAddIcon
                        style={{ fontSize: '3.3rem', color: 'white', padding: '5px' }}
                    />
                </div>
            </div>
        </>
    )
}

export default Body
