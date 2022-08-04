import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

// This function component, reflect the top bar of the home page 
function Header() {
  return (

    /* Reflects the homepage logo */
    <div className='header'>
      <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />

      {/* Reflects the homepage searchbar*/}
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>

      {/* Reflects the 3 options on the homepage top right corner */}
      <div className='header_nav'>

        <div className='header_option' >
          <span className='header_optionOne' > Hello Guest</span>
          <span className='header_optionTwo' > Sign In</span>
        </div>

        <div className='header_option' >
          <span className='header_optionOne' > Returns </span>
          <span className='header_optionTwo' > & Orders </span>
        </div>

        <div className='header_option' >
          <span className='header_optionOne' > Your </span>
          <span className='header_optionTwo' > Prime </span>
        </div>

      </div>

    </div>
  )
}

export default Header