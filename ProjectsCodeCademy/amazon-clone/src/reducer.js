//reducer sends the date to: dataLayer > React Context API/Redux

export const initialState = {
  basket: [],
};

// Selector function here. This sends the Basket amount to the SUBTOTAL.JS page an displays on basket area
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
    return {
      ...state,
      basket: [...state.basket, action.item],
    };
    default: 
      return state;
  }
};

export default reducer;