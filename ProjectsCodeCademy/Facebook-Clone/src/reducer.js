//reducer sends the date to: dataLayer > React Context API/Redux

export const initialState = {
  user: null
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:// If you receive an action (Here USER ACTION) with the type SET_USER, then return the new state with the user property set to the action's user property OTHERWISE return the default state.
      return {
        ...state,
        user: action.user,
      };

    default: 
      return state;
  }
};

export default reducer;