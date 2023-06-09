import React, { useEffect, useState } from "react";
import { OutlinedInput, InputLabel, MenuItem, Select, FormControl, Chip, ListItemText, Avatar, Button, TextField } from "@mui/material";
import axios from "axios";
import './CreateGroup.css'
import { useNavigate } from "react-router-dom";


const CreateGroup = () => {

    const navigate = useNavigate();

    const [selectedNames, setSelectedNames] = useState([]);
    const [groupName, setGroupName] = useState([]);
    const [userList, setUserList] = useState([]);

    const handalClickCreateGroup = async () => {

        await axios.post(`https://splitwise-server.onrender.com/createGroup`, { authToken: localStorage.getItem('authToken'), inboxName: groupName, inboxMember: selectedNames });

        navigate("/");

    }

    const fetchData = async () => {
        const response = await axios.post(`https://splitwise-server.onrender.com/getUserList`, {authToken: localStorage.getItem('authToken')});
        setUserList(response.data.userList);
    }

    useEffect(() => {
        if(localStorage.getItem('authToken') === null) navigate("/login");

        fetchData();
    }, [])

    return (
        <>
            <div className="CreateGroup" onSubmit={handalClickCreateGroup} >
                <TextField
                    required
                    id="outlined-basic"
                    label="Group Name"
                    variant="outlined"
                    color='success'
                    onChange={(e) => setGroupName(e.target.value)}
                    sx={{ m: 2, width: '80%', maxWidth: 400 }} />
                <FormControl
                    variant="outlined"
                    color='success'
                    sx={{ m: 1, width: '80%', maxWidth: 400 }}>
                    <InputLabel id="select-label">Add Member</InputLabel>
                    <Select
                        multiple
                        labelId="select-label"
                        id="select"
                        value={selectedNames}
                        onChange={(event) => setSelectedNames(event.target.value)}
                        input={<OutlinedInput label="Add Member" />}
                        renderValue={(selected) => (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {selected.map((pair) => (
                                    <Chip
                                        key={pair.email}
                                        variant="outlined"
                                        avatar={<Avatar alt="" src="/link.jpg" />}
                                        sx={{ margin: '5px' }}
                                        label={`${pair.name} : ${pair.email}`}
                                        onDelete={() => setSelectedNames(selectedNames.filter((item) => item.value !== pair.value))}
                                    />
                                ))}
                            </div>
                        )}>

                        {
                            userList.map((user) => (
                                <MenuItem key={user.value} value={user}>
                                    <ListItemText primary={user.name} secondary={user.email} />
                                </MenuItem>
                            ))
                        }

                    </Select>
                </FormControl>
            </div>

            <div className='InboxPage-footer' onClick={handalClickCreateGroup}>
                <Button variant="contained"> Create Group </Button>
            </div>

        </>
    );
}

export default CreateGroup
