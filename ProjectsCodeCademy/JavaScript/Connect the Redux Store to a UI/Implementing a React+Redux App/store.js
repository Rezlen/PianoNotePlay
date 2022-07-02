import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// REDUX CODE
///////////////////////////////////

const increment = () => {
  return {type: 'increment'} 
}

const decrement = () => { 
  return {type: 'decrement'}
}

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state; 
  }
} 

const store = createStore(counterReducer);

// REACT CODE
///////////////////////////////////

const render = () => {
  ReactDOM.render(
  // The CounterApp component should display the current state of the store. Before it can display the current state, it must be given the current state value.
    <CounterApp 
      state={store.getState()} 
    />,
    document.getElementById('root')
  )
}
render(); //call render() once to render the UI with the initial state.
 
// Render once with the initial state.
// Subscribe render to changes to the store's state. 
function CounterApp(props) {
  //declare a variable called state. It should be assigned the value of props.state.
  const state = props.state

  const onIncrementButtonClicked = () => {
    // Dispatch an 'increment' action.
  store.dispatch(increment())
  }
 
  const onDecrementButtonClicked = () => {
    // Dispatch an 'decrement' action.
  store.dispatch(decrement())

  }
  
  return (   
    <div id='counter-app'>
      <h1> {state} </h1>
      <button onClick={onIncrementButtonClicked}>+</button> 
      <button onClick={onDecrementButtonClicked}>-</button>
    </div>
  )
}

store.subscribe(render);

