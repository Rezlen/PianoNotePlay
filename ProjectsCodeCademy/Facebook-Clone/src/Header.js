import React from 'react';
import './Header.css';

// Header has 3 sections Left-Right-Middle
function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img 
        src='https://www.facebook.com/images/fb_icon_325x325.png' alt='facebook Logo'
        />      
      </div>

      <div className='header__middle'></div>
      <div className='header__right'></div>
    </div>
  
  )
}

export default Header;