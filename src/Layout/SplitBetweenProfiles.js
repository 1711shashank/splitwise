import React from 'react'
import './SplitBetweenProfiles.css'
import { Checkbox, Input } from '@mui/material';


const SplitBetweenProfiles = (props) => {

    const { inboxMember } = props;

    console.log(inboxMember);

    return (
        <>
            <div className='SplitBetweenProfiles'>
                <div className='SplitBetweenProfiles-left'>
                    <Checkbox defaultChecked/>
                    <div className='ChatCard-avatar'>
                        <img src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg' width='35px' height='35px' alt='' />
                    </div>
                    <p className='AddSplit-profile-name'> {inboxMember.name} </p>
                </div>

                <div className='SplitBetweenProfiles-right'>
                    <Input
                        defaultValue='100000'
                        sx={{ fontSize: '16px', width: 80, color: 'white', padding: '0 10px' }}
                    />
                </div>
            </div>

        </>
    )
}

export default SplitBetweenProfiles
