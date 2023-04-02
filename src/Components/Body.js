import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './Body.css'
import ChatCard from '../Layout/ChatCard'
import { useNavigate } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PageContext from '../Context/PageContext';



const Body = () => {

    const navigate = useNavigate();

    // const { setInboxId } = useContext(PageContext);

    const [inboxList, setInboxList] = useState([]);

    const handalClickChatCard = (inboxId) => {
        // setInboxId(inboxId);
        localStorage.setItem('inboxId',inboxId);
        navigate("/inbox");
    }
    const handalClickCreateGroup = () => {
        navigate("/createGroup");

    }
    const fetchData = async () => {
        const response = await axios.post(`http://localhost:5000/getInboxList`, { email: 'authUserData.email' });
        setInboxList(response.data.inboxList);
    };

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <div className='body'>

                {
                    inboxList.map((curIndexList) => (
                        <div className='body-chatcard' key={curIndexList._id}>
                            <div onClick={() => handalClickChatCard(curIndexList._id )}>
                                <ChatCard inboxName={curIndexList.inboxName} />
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
