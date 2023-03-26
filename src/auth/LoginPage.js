import { Button } from '@mui/material'
import React, { useContext } from 'react'
import PageContext from '../Context/PageContext';
import './LoginPage.css'


const LoginPage = () => {

    const { setShowLoginPage } = useContext(PageContext);
    

    const handalClickLoginButton = () => {
        setShowLoginPage(false);
    }

    return (
        <>
            <div className='LoginPage'>
                <p className='LoginPage-heading'>Split Expense</p>
                <img className='LoginPage-image' src={"https://cdn.dribbble.com/users/3460475/screenshots/15099151/media/5a8a3c7e7bcba6c66de9c56847a82061.gif"} alt="" />
                <Button variant="outlined" className='LoginPage-rightButton' onClick={handalClickLoginButton}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"} alt="my" width={"20px"} />
                    <p>Sign in with Google</p>
                </Button>
            </div>
        </>
    )
}

export default LoginPage