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
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

/* Create your Slice object here. */
const options = {
  name: 'favoriteRecipes',
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      return [...state, action.payload]
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    },
  },
}

export const favoriteRecipesSlice = createSlice(options);

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

/* Do not delete the code below...*/

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
-----------------------