export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

export const addTransaction = (transaction) => {
  return {
    type: 'transactions/addTransaction',
    payload: transaction
  }
}

export const deleteTransaction = (transaction) => {
  return {
    type: 'transactions/deleteTransaction',
    payload: transaction
  }import {createSlice} from '@reduxjs/toolkit';

  export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
  const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))
  
  
  const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: initialState,
    reducers: {
      addTransaction: (state, action) => {
        // add the new transaction object (action.payload) to the correct category’s transaction list in the transactions state object.
        const category = action.payload.category;
        state[category].push(action.payload);
      },
      // Add a deleteTransaction property 
      deleteTransaction: (state, action) => {
        // In the deletedIndex in transactionsReducer, action.payload.category and action.payload.id are both used. 
        const id = action.payload.id;
        const category = action.payload.category;
        // It should delete the old transaction (action.payload) from the correct category’s transaction list in the transactions state object.
        // 1. Find the category in `state` that matches the `category` property on `action.payload`
        // 2.  Filter out the old transaction (the transaction with an `id` matching the `id` property on `action.payload`) from that category's transaction array.
  // using splice method to alter the original array
  const deletedIndex = state[action.payload.category].findIndex(transaction => transaction.id === action.payload.id);
  state[action.payload.category].splice(deletedIndex,1)
      },
    },
  });
  
  
  /* 
  // below code has been refactored using Redux Toolkit and converted to above.
  export const addTransaction = (transaction) => {
    return {
      type: 'transactions/addTransaction',
      payload: transaction
    }
  }
  
  export const deleteTransaction = (transaction) => {
    return {
      type: 'transactions/deleteTransaction',
      payload: transaction
    }
  }
  
  export const selectTransactions = (state) => state.transactions;
  export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);
  
  const transactionsReducer = (state = initialState, action) => {
    let newTransactionsForCategory;
    switch (action.type) {
      case 'transactions/addTransaction':
        newTransactionsForCategory = [...state[action.payload.category].slice(), action.payload]
        return { ...state, [action.payload.category]: newTransactionsForCategory}
      case 'transactions/deleteTransaction':
        const deletedIndex = state[action.payload.category].findIndex(transaction => transaction.id === action.payload.id);
        newTransactionsForCategory = state[action.payload.category].filter((item, index) => index !== deletedIndex)
        return { ...state, [action.payload.category]: newTransactionsForCategory}
      default:
        return state;
    }
  }
  */
  export { addTransaction, deleteTransaction } from transactionsSlice.action;
  export default transactionsSlice.reducer;
  
}

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

const transactionsReducer = (state = initialState, action) => {
  let newTransactionsForCategory;
  switch (action.type) {
    case 'transactions/addTransaction':
      newTransactionsForCategory = [...state[action.payload.category].slice(), action.payload]
      return { ...state, [action.payload.category]: newTransactionsForCategory}
    case 'transactions/deleteTransaction':
      const deletedIndex = state[action.payload.category].findIndex(transaction => transaction.id === action.payload.id);
      newTransactionsForCategory = state[action.payload.category].filter((item, index) => index !== deletedIndex)
      return { ...state, [action.payload.category]: newTransactionsForCategory}
    default:
      return state;
  }
}

export default transactionsReducer;
