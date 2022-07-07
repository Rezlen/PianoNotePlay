Write Your Own Middleware
Before we get to redux-thunk specifically, we want to solidify our understanding of how middleware fits into Redux’s data flow. Let’s explore how middleware actually gets invoked in Redux, so that we know how a middleware should be structured. After that, we’re going to write a simple middleware from scratch.

But first, you’ll recall from the previous exercise that middleware runs after an action is dispatched and before that action is passed along to the reducer. How does this actually work?

To add a middleware to our project, we use Redux’s applyMiddleware function like so.

import { createStore, applyMiddleware } from 'redux';
import { middleware1, middleware2, middleware3 } from './exampleMiddlewares';
import { exampleReducer } from './exampleReducer';
import { initialState} from './initialState';
 
const store = createStore(
  exampleReducer, 
  initialState, 
  applyMiddleware(
    middleware1, 
    middleware2, 
    middleware3
  )
);
The specifics of how applyMiddleware works are outside the scope of this lesson. All you need to know is that once middleware has been added to a Redux project, calls to dispatch are actually calls to the middleware pipeline (the chain of all added middlewares). This means that any actions we dispatch will be passed from middleware to middleware before they hit an app’s reducers.

Middlewares must conform to a specific, nested function structure in order to work as part of the pipeline (this nested structure is also called a higher-order function, if you’d like to read more). That structure looks like this:

const exampleMiddleware = storeAPI => next => action => {
  // do stuff here
  return next(action);  // pass the action on to the next middleware in the pipeline
}
Each middleware has access to the storeAPI (which consists of the dispatch and getState functions), as well as the next middleware in the pipeline, and the action that is to be dispatched. The body of the middleware function performs the middleware’s specific task before calling the next middleware in the pipeline with the current action (note that if the middleware is the last in the pipeline, then next is storeAPI.dispatch so calling next(action) is the same as dispatching the action to the store).

Now let’s write a custom middleware that logs the contents of our store to the console.


import { createStore, applyMiddleware } from 'redux';

const messageReducer = (state = '', action) => {
  if (action.type === 'NEW_MESSAGE') {
    return action.payload;
  } else {
    return state;
  }
}

// Paste the logger function here.
const logger = storeAPI => next => action => {
  console.log(storeAPI.getState())
  const nextState = next(action);
  console.log(nextState)
  return nextState;  // pass the action on to the next middleware in the pipeline
  
};
// Apply your custom middleware to your store by adding a third argument to the call to createStore. This argument should be the result of calling applyMiddleware with the logger middleware you’ve written.
const store = createStore(messageReducer, '', applyMiddleware(logger));
// Dispatch the action to your store
store.dispatch({
  type: 'NEW_MESSAGE', 
  payload: 'I WROTE A MIDDLEWARE'
});
--------------

REDUX MIDDLEWARE
Introduction to Thunks
Recall that our overarching goal in this lesson is to give you the tools you need to add asynchronous functionality to your Redux apps. One of the most flexible and popular ways to add asynchronous functionality to Redux involves using thunks. A thunk is a higher-order function that wraps the computation we want to perform later. For example, this add() function returns a thunk that will perform x+y when called.

const add = (x,y) => {
  return () => {
    return x + y; 
  } 
}
Thunks are helpful because they allow us to bundle up bits of computation we want to delay into packages that can be passed around in code. Consider these two function calls, which rely on the add() function above:

const delayedAddition = add(2,2)
delayedAddition() // => 4
Note that calling add() does not cause the addition to happen – it merely returns a function that will perform the addition when called. To perform the addition, we must call delayedAddition().
------------------

`redux-thunk`
To appreciate how thunks can help us integrate asynchronous actions into our Redux apps, let’s review the barriers to performing asynchronous operations that exist within traditional Redux. First, asynchronous logic returns promises, and store.dispatch expects to receive a plain object with a type property. Second, asynchronous operations create side effects. And so including them in our reducers would violate a core tenet of Redux, which is that reducers must be pure functions.

Redux recommends making code with side effects part of the action creation process. It would be great if we could write action creators that return thunks, which would handle our asynchronous operations, in addition to the plain objects we’ve returned from our action creators thus far.

As it turns out, redux-thunk is a middleware that lets you do exactly that. redux-thunk makes it simple for you to write asynchronous logic that interacts with the store by allowing you to write action creators that return thunks instead of objects. These thunks can perform asynchronous operations, and per the redux-thunk documentation, “can be used to delay dispatching an action” (for example, until after an API response is received), or “to dispatch an action only if certain conditions are met”.

For example, imagine we’ve written a simple counter whose reducer contains a single value, which is updated by a single reducer. Without redux-thunk we are limited to writing synchronous action creators like this one:

const increment = () => {
  return {
    type: 'counter/increment',
  }
}
When we call dispatch(increment()), the value in our store immediately increases. With redux-thunk, we can extend our counter app to accommodate asynchronous action creators, like asyncIncrement, in addition to synchronous ones.

const incrementLater = async () => {
  setTimeout(() => {
    dispatch(increment())    
  }, 1000)    
};
 
const asyncIncrement = () => {
  return incrementLater;
}
redux-thunk is such a popular solution for handling asynchronous logic that it is included in Redux Toolkit. It also exists as a standalone package, but you won’t need to install redux-thunk separately if you use Redux Toolkit. This is because Redux Toolkit’s configureStore function, which you learned about in a previous lesson, will apply redux-thunk to the store by default.

------------------

REDUX MIDDLEWARE
Writing Thunks in Redux
To better appreciate redux-thunk, let’s review the process of retrieving data from a Redux store. For example, suppose we have a list of users’ data, and want to retrieve the data corresponding to the user with a particular id = 32. Assuming we have that user’s data in the store, we can access the user’s data by writing a selector to retrieve the information we need.

useSelector((state) => state.users.byId[32]);
But what if we don’t have that particular user in the store? Say, for example, that we need to fetch the user’s data from an API. Ideally, we would like to be able to dispatch an action creator that would first perform an asynchronous operation (fetching the data), and then dispatch a synchronous action (adding the data to the store) after the asynchronous operation completes.

This is where thunks come in handy. Up to this point, we’ve only written action creators that returned plain objects. But redux-thunk allows us to write action creators that return thunks, within which we can perform any asynchronous operations we like. Consider the following asynchronous action creator:

import { fetchUser } from './api'
const getUser = (id) => {
  return async (dispatch, getState) => {
    const payload = await fetchUser(id);
    dispatch({type: 'users/addUser', payload: payload});
  }
}
getUser has two key parts: the synchronous outer function (otherwise known as the thunk action creator) which returns the inner, asynchronous thunk. The thunk receives dispatch and getState as arguments, and dispatches a synchronous action after the asynchronous operation (fetchUser) completes.

To get the user with id = 32, we can call dispatch(getUser(32)). Note that the argument to dispatch is not an object, but an asynchronous function that will first fetch the user’s data and then dispatch a synchronous action once the user’s information has been retrieved.


import { fetchRecipes } from '../../app/api'
import { createSlice } from "@reduxjs/toolkit";

// TO DO: write loadRecipes here!
const loadRecipes = () => {
    return async (dispatch, getState) => {
    const recipes = await fetchRecipes();
    dispatch({type: 'allRecipes/addRecipes', payload: recipes});
  }
}

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    addRecipes(state, action) {
      state.recipes = action.payload
    }
  },  
});

export default allRecipesSlice.reducer;

------------------

REDUX MIDDLEWARE
`redux-thunk` Source Code
At this point, you are ready to use thunks to define asynchronous operations in Redux. But you may be curious about how redux-thunk works. In order to allow us to write action creators that return thunks in addition to plain objects, the redux-thunk middleware performs a simple check to the argument passed to dispatch. If dispatch receives a function, the middleware invokes it; if it receives a plain object, then it passes that action along to reducers to trigger state updates.

We’ve pasted the source code into your code editor so you can see it for yourself. And here’s a link to the project’s repo in case you’d like to explore further!

We won’t worry about the extraArgument option, so for our purposes, we can focus on thunk, the default export, which is equal to the function returned on line 2.

Recall getUser, the thunk action creator from the previous exercise:

const getUser = (id) => {
  return async (dispatch, getState) => {
    const payload = await fetchUser(id)
    dispatch({type: 'users/addUser', payload: payload})
  }
}
Suppose we were to call dispatch(getUser(7)) with the thunk middleware applied. We know that getUser(7) returns a thunk, so on line 3 of the thunk middleware, typeof action === 'function' will evaluate to true. On line 4, the middleware will then invoke getUser(7) with the arguments dispatch and getState. This invocation will initiate the asynchronous fetching performed by the thunk. When that asynchronous fetching is complete, the thunk will dispatch the synchronous action {type: ‘users/addUser’, payload: payload}.

For contrast, let’s walk through what happens when we dispatch that synchronous action. Since the action is a plain object, typeof action === 'function' will evaluate to false. The redux-thunk middleware therefore skips to line 7, and invokes the next middleware in the pipeline, passing the action along.

-----------------


