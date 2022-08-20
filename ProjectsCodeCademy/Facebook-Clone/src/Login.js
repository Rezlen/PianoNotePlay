import { Button } from '@mui/material';
import React from 'react'
import './Login.css'

function Login() {
  const signIn = () => {
  
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://www.facebook.com/images/fb_icon_325x325.png'
          alt='facebook Logo'
        />
        <img
          src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
          alt='facebook Logo'
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login;