import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();
  
  
  return (
    <div className='subtotal'>

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/*Part of the home work */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This Order Contain a Gift
            </small>
          </>
        )}
        

        decimalScale={2}
        value={getBasketTotal(basket)} // Pulls the amounts from Reducer.JS
        displayType={'text'}
        thousandSeparator={true}
        prefix={'£'}

      />

      <button> Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;