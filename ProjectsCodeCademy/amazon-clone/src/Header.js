import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img 
        className='header_logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
      />

      <div className='header_search'>
        <input
          className='header_searchInput' type='text'
        />
      </div>

      <div className='header_nav'>
        <input
          className='header_searchInput' type='text'
        />
      </div>

    </div>
  )
}

export default Header