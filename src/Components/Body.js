import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Body.css'
import ChatCard from '../Layout/ChatCard'
import { useNavigate } from "react-router-dom";
import GroupAddIcon from '@mui/icons-material/GroupAdd';



const Body = () => {

    // let paybaleAmount = 0;
    // let netAmount = 40;
    const navigate = useNavigate();
    const [inboxList, setInboxList] = useState([]);
    const [paybaleAmount, setPaybaleAmount] = useState();

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

    const calAmount = () => {

        let netAmount = 0;

        inboxList.forEach((inbox) => {
            inbox.messageCard.forEach((curMessageCard) => {
                if (curMessageCard.email === localStorage.getItem('email'))
                    netAmount += parseInt(curMessageCard.amount);
                else {
                    netAmount -= parseInt(curMessageCard.amount);
                }
            });
        });

        setPaybaleAmount(netAmount);
        console.log(netAmount);

    }

    useEffect( () => {

        (async () => {
            await fetchData();
            await calAmount();
        })()


    }, [paybaleAmount]);

    return (
        <>
            <div className='body'>
                {
                    inboxList.map((curIndexList) => (
                        <div className='body-chatcard' key={curIndexList._id}>
                            <div onClick={() => handalClickChatCard(curIndexList._id)}>
                                <ChatCard paybaleAmount={paybaleAmount} inboxName={curIndexList.inboxName} />
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
