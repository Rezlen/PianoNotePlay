import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";


// This function component, reflect the top bar of the home page 
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (

    /* Reflects the homepage logo */
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Image from http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      </Link>
      
      {/* Reflects the homepage searchbar & Icon*/}
      <div className='header__search'>
        <input className='header__searchInput' type='text'/>
        <SearchIcon className='header__searchIcon'/>
      </div>

      {/* Reflects the 3 options on the homepage top right corner */}
      <div className='header__nav'>

        <div className='header__option' >
          <span className='header__optionLineOne' > Hello Guest</span>
          <span className='header__optionLineTwo' > Sign In</span>
        </div>

        <div className='header__option' >
          <span className='header__optionLineOne' > Returns </span>
          <span className='header__optionLineTwo' > & Orders </span>
        </div>

        <div className='header__option' >
          <span className='header__optionLineOne' > Your </span>
          <span className='header__optionLineTwo' > Prime </span>
        </div>

        <Link to='/checkout'>
          <div className='header__optionBasket' >
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount' >{basket?.length}</span>
            {/*Important: This {basket?.length} connect the basket & each product in Product.js to count in the basket */}
          </div>
        </Link>
      
      </div>

    </div>
  );
}

export default Header