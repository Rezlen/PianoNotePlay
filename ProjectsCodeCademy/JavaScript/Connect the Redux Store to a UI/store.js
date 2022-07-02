/* Note to learners: 
Normally, you would import redux like this:

  import { createStore } from 'redux';

Due to Codecademy's technical limitations 
for testing this exercise, we are using 
`require()`.
*/
const { createStore } = require('redux');

// Action Creators
function increment() { 
  return {type: 'increment'}
}

function decrement() { 
  return {type: 'decrement'}
}

// Reducer / Store
const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1; 
    case 'decrement':
      return state - 1; 
    default:
      return state;
  }
};  
const store = createStore(countReducer);

//These below functions and elements will allow us to plug the Redux store into the UI. 
// 1- counterElement, incrementer, and decrementer: references to the HTML elements in index.html
// HTML Elements
const counterElement = document.getElementById('counter');
const incrementer = document.getElementById('incrementer');
const decrementer = document.getElementById('decrementer');

// 2-render: A state-change listener for responding to changes to the store‘s state. 
// Store State Change Listener
const render = () => {
  counterElement.innerHTML = store.getState();
}
  store.subscribe(render);
  render();

// In order for the UI to react to changes to the state of the store, you have to subscribe a change listener to the store using store.subscribe()
store.subscribe(render);


// 3-incrementerClicked and decrementerClicked: DOM event handlers for responding to the buttons being clicked by the user
// DOM Event Handlers
const incrementerClicked = () => {
  store.dispatch(increment());
}
incrementer.addEventListener('click', incrementerClicked);
 
const decrementerClicked = () => {
  store.dispatch(decrement());
}
decrementer.addEventListener('click', decrementerClicked);




