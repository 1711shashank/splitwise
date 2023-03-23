import React from 'react'
import './Header.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='header-left'>
            <p className='heading-title'>SplitWise</p>
            {/* <AccountCircleIcon  sx={{ fontSize: 30, color: '#ADBAC1' }}/> */}
        </div>
        <div className='hedaer-right'>
            <MoreVertIcon sx={{ fontSize: 25, color: '#ADBAC1' }}/>
        </div>
    </div>
    </>
  )
}

export default Header
