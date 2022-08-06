import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className='subtotal'>

      <CurrencyFormat />

      <button> Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal