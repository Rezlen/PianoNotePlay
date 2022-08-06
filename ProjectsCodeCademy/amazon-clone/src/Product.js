import React, { startTransition } from 'react'
import './Product.css';


// "Product" is the CARDS/ITEMS inside page
function Product({id, title, image, price, rating}) {
  return (
    <div className='product'>

      <div className='product__info'> 
        <p>{title}</p>
        <p className='product__price' >
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating' >
          {Array(rating).fill().map((_, i) => (<p>🌟</p>))}
        </div>
      </div>

      <img 
      src={image}
      alt='Amazon product image fom: https://images-na.ssl-images-amazon.com/images/I/610hYytBgdL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
      />

      <button>Add To Basket</button>
    </div>
  );
}

export default Product