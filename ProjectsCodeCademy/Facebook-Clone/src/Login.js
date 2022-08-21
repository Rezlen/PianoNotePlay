import { Button } from '@mui/material';
import React, { useState } from 'react';
import { auth, provider } from './firebase';   // Sign in authentication by Google
import './Login.css';
import {actionTypes} from './reducer';
import { useStateValue } from './StateProvider';

// React Context API, instead of React REDUX.
function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // Sign in authentication by Google
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })

      .catch((error) => alert(error.message));
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