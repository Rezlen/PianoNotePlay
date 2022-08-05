import React from 'react'
import './Product.css';


// "Product" is the CARDS/ITEMS inside page
function Product() {
  return (
    <div className='product'>

      <div className='product__info'> 
      <p>The learn Info</p>
      <p className='product__price' >
        <small>$</small>
        <strong>19.99</strong>
      </p>
      <div className='product__rating' >
        <p>fohof :sta :</p>
        <p></p>
        <p></p>
      </div>

      </div>
    </div>
  );
}

export default Product