THE REDUX TOOLKIT
Intro to Redux Toolkit
You’ve seen how verbose working with Redux can be. There’s a lot of moving parts and semantics to remember. You’d be far from alone.

Some common issues/complaints people have when using Redux include:

“Configuring a Redux store is too complicated.”
“I have to add a lot of packages to get Redux to do anything useful.”
“Redux requires too much boilerplate code.”
“Writing immutable updates is too error-prone.”
Fortunately, the Redux team created Redux Toolkit to address these concerns!

Redux Toolkit contains packages and functions that are essential for building a Redux app. It builds in the best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

Because of how effective it has proven to be at addressing the concerns of the verbose “hand-written” logic of the past, Redux Toolkit has become the preferred way to write Redux application logic.

In this lesson, we’ll be covering two essential methods: createSlice() and configureStore(). If you want to learn more about the remaining methods that Redux Toolkit has to offer, head over to the Redux Toolkit docs!

-----------------

"Slices" of State
Before we dive deeper into this lesson, let’s refresh our memory about what we’re referring to when talking about a “slice” of state.

A normal Redux application has a JS object at the top of its state tree. We refer to one key/value section of that object as a “slice”. In the following example, state.todos and state.visibilityFilter are slices.

const state = {
  todos: [
    {
      id: 0,
      text: "Learn Redux-React",
      completed: true,
    },
    {
      id: 1,
      text: "Learn Redux Toolkit",
      completed: false,
    }
  ], 
  visibilityFilter: "SHOW_ALL"
}
We typically define one reducer for each slice of the state. Those are called “slice reducers”. Let’s take a look at the slice reducer for the state.todos slice:

/* todosSlice.js  */
const addTodo = (todo) => {
  return {
    type: 'todos/addTodo',
    payload: todo
  }
}
 
const toggleTodo = (todo) => {
  return {
    type: 'todos/toggleTodo',
    payload: todo
  }
}
 
const todos = (state = [], action) => {
 switch (action.type) {
   case 'todos/addTodo':
     return [
       ...state,
       {
         id: action.payload.id,
         text: action.payload.text,
         completed: false
       }
     ]
   case 'todos/toggleTodo':
     return state.map(todo =>
       todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
     )
   default:
     return state
 }
}
Notice that this file only deals with the state.todos data and completely ignores the state.visibilityFilter slice. Managing the state one slice at a time allows us to more effectively manage the distinct logic of each individual part of our application.

In the example above, the logic for the reducer and the action creators is all written in the same file. However, in a larger application, this logic would likely be split up even further, with the reducer logic in one file and the action creators in another.

In the next exercise, we’ll take a closer look at how we can take advantage of Redux Toolkit’s createSlice() function to further simplify the logic for us. First, let’s import it.

Instructions
---------------

THE REDUX TOOLKIT
Refactoring with createSlice()
In the last exercise, we looked at one way to define a slice reducer and the associated action creators.

/* todosSlice.js  */
const addTodo = (todo) => {
 // logic omitted...
}
 
const toggleTodo = (todo) => {
  // logic omitted...
}
 
const todos = (state = [], action) => {
  // logic omitted...
}
We can do the same work, but more simply, with createSlice()! createSlice() has one parameter, options, which is an object with the following properties

name: a string that is used as the prefix for generated action types
initialState: the initial state value for the reducer
reducers: an object of methods, where the keys determine the action type strings that can update the state, and whose methods are reducers that will be executed when that action type is dispatched. These are sometimes referred to as “case reducers”, because they’re similar to a case in a switch statement.
/* todosSlice.js */
const options = {
 name: 'todos',
 initialState: [],
 reducers: {
   addTodo: (state, action) => {
     return [
       ...state,
       {
         id: action.payload.id,
         text: action.payload.text,
         completed: false
       }
     ]
   },
   toggleTodo: (state, action) => {
     return state.map(todo =>
       (todo.id === action.payload.id) ? { ...todo, completed: !todo.completed } : todo
     )
   }
 }
}
 
const todosSlice = createSlice(options);
In the options object passed to createSlice() in the snippet above, name is set to 'todos', initialState is set to an empty array, and we have two case reducers: addTodo and toggleTodo. Note that the names of the case reducer functions are conventionally written in lowerCamelCase.

With createSlice()…
8888888888888888 Important 88888888888888
We can write the case reducers as functions inside of an object, instead of having to write a switch/case statement.
Action creators that correspond to each case reducer function we provide will be automatically generated, so we don’t need to worry about defining those ourselves.
No default handler needs to be written. The reducer generated by createSlice() will automatically handle all other action types by returning the current state, so we don’t have to list that ourselves.
For now, let’s practice calling createSlice(). In the next exercise, we’ll take a look at the object that is returned by createSlice().
88888888888888 important 888888888888888


--------oldFavoriteRecipesSlice.js-------------

import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// Reducer
///////////////////////////////////////

const initialState = [];
export const favoriteRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'favoriteRecipes/addRecipe':
      return [...state, action.payload]
    case 'favoriteRecipes/removeRecipe':
      return state.filter(recipe => recipe.id !== action.payload.id)
    default:
      return state;
  }
}

// Action Creators
///////////////////////////////////////

export function addRecipe(recipe) {
  return {
    type: 'favoriteRecipes/addRecipe',
    payload: recipe
  }
}

export function removeRecipe(recipe) {
  return {
    type: 'favoriteRecipes/removeRecipe',
    payload: recipe
  }
}

// Selectors
///////////////////////////////////////

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

---------------favoriteRecipesSlice.js----------------
import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from './searchTermSlice.js';

export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    },
  },
});

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const {addRecipe, removeRecipe} = favoriteRecipesSlice.actions;

// Begin writing code here.
// print the entire object returned by createSlice(). Note how each action type corresponds to the name of a case reducer.
console.log(favoriteRecipesSlice);
// export the reducer as the default export.
export default favoriteRecipesSlice.reducer;


-----------------------
Writing "Mutable" Code with Immer
Because Redux reducers must never mutate state, we often write immutable updates by using JavaScript’s array and object spread operators and other functions that return copies of the original values. However, accidentally mutating state in reducers is the single most common mistake Redux users make!

While you still have the option of writing immutable updates the old fashioned way, Redux Toolkit’s createSlice() function uses a library called Immer inside of it which helps avoid this mistake.

Immer uses a special JS object called a Proxy to wrap the data you provide and lets you write code that “mutates” that wrapped data. Immer does this by tracking all the changes you’ve made and then uses that list of changes to return an immutably updated value as if you’d written all the immutable update logic by hand.

So, instead of this:

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        {
          ...action.payload,
          completed: false
        }
      ]
    },
    toggleTodo: (state, action) => {
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      )
    }
  }
})
You can write code that looks like this:

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ 
        ...action.payload, 
        completed: false 
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})
addTodo is calling state.push() here, which is normally bad because the array.push() function mutates the existing array. Similarly, toggleTodo is simply finding the matching todo object, and then mutating it by reassigning its value.

Thanks to Immer, however, this code will work just fine!

You don’t need to learn the Immer library. All you do need to know is that createSlice() takes advantage of it, allowing us to safely “mutate” our state. You may find it useful to look through some of the common update patterns used with Immer.

--------------------

Return Object - Reducers
Let’s now take a closer look at reducer in the return object of createSlice().

const options = {
  // options fields omitted.
}
const todosSlice = createSlice(options);
 
/* Object returned by todosSlice */
{
 name: 'todos',
 reducer: (state, action) => newState,
 actions: {
   addTodo: (payload) => ({type: 'todos/addTodo', payload}),
   toggleTodo: (payload) => ({type: 'todos/toggleTodo', payload})
 },
 // case reducers field omitted
}
todosSlice.reducer is the complete reducer function, a.k.a the “slice reducer”.

When an action with the type 'todos/addTodo' is dispatched, todosSlice will execute todosSlice.reducer() to check if the dispatched action’s type matches one of todos.actions case reducers. If so, it will run the matching case reducer function and if not, it will return the current state. This is exactly the same pattern that we had previously implemented with switch/case statements!

Finally, todosSlice.reducer needs to be exported so that it can be passed to the store and be used as the todos slice of state. While the todosSlice.actions are exported as named exports, the todosSlice.reducer value is used as the default export.

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer

--------------------
THE REDUX TOOLKIT
Converting the Store to Use `configureStore()`
Redux Toolkit has a configureStore() method that simplifies the store setup process. configureStore() wraps around the Redux library’s createStore() method and the combineReducers() method, and handles most of the store setup for us automatically.

For example, take a look at this file which creates and exports a rootReducer…

// rootReducer.js
 
import { combineReducers } from 'redux'
 
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
 
const rootReducer = combineReducers({
 // Define a top-level state field named `todos`, handled by `todosReducer`
 todos: todosReducer,
 visibilityFilter: visibilityFilterReducer
})
 
export default rootReducer
… and this file which creates and exports the store.

// store.js
 
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
 
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
 
const store = createStore(rootReducer, composedEnhancer)
export default store
Now, let’s take a look at how we can refactor these two files using configureStore(). configureStore() accepts a single configuration object parameter. The input object should have a reducer property that defines either a function to be used as the root reducer, or an object of slice reducers which will be combined to create a root reducer.

There are many properties available in this object, but for the purposes of this lesson, just the reducer property will be sufficient.

import { configureStore } from '@reduxjs/toolkit'
 
import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
 
const store = configureStore({
 reducer: {
   // Define a top-level state field named `todos`, handled by `todosReducer`
   todos: todosReducer,
   filters: filtersReducer
 }
})
 
export default store
Note all the work that this one call to configureStore() does for us:

It combines todosReducer and filtersReducer into the root reducer function, which will handle a root state that looks like {todos, filters}, removing the need to call combineReducers()
It creates a Redux store using that root reducer, removing the need to call createStore()
It automatically adds the thunk middleware (which you will learn about in the next lesson!)
It automatically adds more middleware to check for common mistakes like accidentally mutating the state
It automatically sets up the Redux DevTools Extension connection
Because of how much boilerplate code we’re able to bypass with configureStore(), we can just import the individual slice reducers straight into this file instead of creating a separate file for the root reducer and having to export/import it.

Since this is as simple as switching out the store setup code, all of the application’s existing feature code will work just fine!

Let’s confirm this in the instructions below.
----------------------


