import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg' alt='Image from https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg'/>
      
        <div className='checkout__title'>
          <h2>My Shopping Basket</h2>
        </div>

      </div>

      <div className='checkout__right'>
          <Subtotal />
      </div>

    </div>
  );
}

export default Checkout;