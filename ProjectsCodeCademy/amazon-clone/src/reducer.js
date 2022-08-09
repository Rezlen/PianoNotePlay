//reducer sends the date to: dataLayer > React Context API/Redux

import { returnTrue } from "react-currency-format/lib/utils";

export const initialState = {
  basket: [],
};

// Selector function here. This sends the Basket amount to the SUBTOTAL.JS page an displays on basket area
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
        // using the index causes that all item with the same ID does not get removed, instead that item only will be removed
      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not n basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }

    default: 
      return state;
  }
};

export default reducer;