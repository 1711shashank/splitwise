import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Body.css'
import ChatCard from '../Layout/ChatCard'
import { useNavigate } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { calculatePaybaleAmount } from '../Utils/calculatePaybaleAmount';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


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

    const handalClickMenuCard = () => {
        localStorage.removeItem('authToken');
        navigate("/login");

    }

    const fetchData = async () => {
        const response = await axios.post(`https://splitwise-server.onrender.com/getInboxList`, { authToken: localStorage.getItem('authToken') });
        setInboxList(response.data.inboxList);
        console.log(response.data.inboxList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='header'>
                <div className='header-left'>
                    <p className='heading-title'>SplitWise</p>
                </div>
                <div className='hedaer-right'>
                    <Menu className='header-logoutMenu' menuButton={<MoreVertIcon sx={{ fontSize: 25, color: '#ADBAC1' }}/>} transition>
                        <MenuItem className='header-logout' onClick={handalClickMenuCard}>Log Out </MenuItem>
                    </Menu>
                </div>
            </div>


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
