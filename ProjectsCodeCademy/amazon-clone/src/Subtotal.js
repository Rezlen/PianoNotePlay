import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className='subtotal'>

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/*Part of the home work */}
              Subtotal (0 Items): <strong>0</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This Order Contain a Gift
            </small>
          </>
        )}
        

        decimalScale= {2}
        value={0} // Part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'£'}

      />

      <button> Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal