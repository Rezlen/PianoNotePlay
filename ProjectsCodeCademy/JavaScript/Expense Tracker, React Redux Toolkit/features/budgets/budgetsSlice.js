import {createSlice} from '@reduxjs/toolkit';
export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    // Set editBudget equal to a case reducer that receives two arguments—state and action
    editBudget: (state, action) => {
      // action.payload will have a category and amount property.
      // const {category, amount} = action.payload;
      const category = action.payload.category;
      const amount = action.payload.amount;
      // Update the state by finding the budget object
      // Note: the variables category and action, implemented below, are each assigned action.payload (referenced in the above const). 
      // Ex. category = action.payload.category ;
      // Ex. amount = action.payload.category;
      // The budget object whose .category value matches action.payload.category and changing with the .amount value to action.payload.amount.
      state.find(budget => budget.category === category).amount = amount 
    }
  },
});

/* 
// below code has been refactored using Redux Toolkit and converted to above.
export const editBudget = (budget) => {
  return {
    type: 'budgets/editBudget',
    payload: budget
  }
}

const budgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'budgets/editBudget':
      const newBudgets = state.map(budget => {
        if (budget.category === action.payload.category) {
          return action.payload;
        }
        return budget;
      })
      return newBudgets;
    default:
      return state;
  }
}
*/

export const selectBudgets = (state) => state.budgets;
export const {editBudget} = budgetsSlice.actions;
export default budgetsSlice.reducer;
