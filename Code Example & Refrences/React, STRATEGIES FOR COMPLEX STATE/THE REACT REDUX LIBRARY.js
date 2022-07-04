THE REACT REDUX LIBRARY
Introduction
React Redux is the official Redux-UI binding package for React. This means React Redux handles the interactions between React’s optimized UI rendering and Redux’s state management. In this lesson, you will explore the benefits of using the React Redux library and then incorporate the tools provided by the library into a Redux application.

Throughout this lesson, you will be working with a recipe application that uses React for the UI and Redux for state management. You should be comfortable with React and how to create functional components, pass data through props, and nest components to create a complete application.

The recipe application also has a Redux implementation so you should be familiar with creating and combining reducers, creating the store, and dispatching actions.

Most importantly you should be familiar with Redux’s one-way data flow:

Starting with the application state
Rendering components based on that state
Dispatching an action to trigger state changes
Re-rendering any component affected by the new state
React Redux provides tools that will help you implement each stage of the data flow with a React UI.

Instructions
Before continuing you should note the application’s current functionality that will be replaced in the following exercises:

Calling ReactDOM.render() using render().
Passing store.getState() through <App> component props.
Passing store.dispatch through <App> component props.
Subscribing render() to the Redux store so it is called after state updates.
Using the props parameter in App.js to pass data through the component, also known as props drilling.
Move to the next exercise to learn about each of these elements of the current application and how React Redux can help improve on them.

--------------

Why React Redux
The recipe application in the code editor works. Run it right now and give it a try. React is handling the UI rendering through ReactDOM.render() which is inside the render() function. Redux is managing the state with the store and passing the state and dispatch references through props. Redux also triggers the UI to re-render with store.subscribe(render). So why do you need to use React Redux?

Even though the application works, this is not the best implementation, especially if the application were to grow.

The first issue with this implementation is passing the state and dispatch reference through props. Using props to access the state or to dispatch actions adds unneeded complexity. Keeping track of errors in this situation is unmanageable as the number of components increases.

Also, the <App> component uses props drilling, which means it is passing props to child components without using them. This is something React developers like to avoid in order to make components more reusable.

The last issue is subscribing render() to changes in the state. This creates more overhead by repeatedly calling ReactDOM.render(), which is not the intended implementation for rendering React components.

With React Redux you will learn how to solve these issues by:

Giving the entire application access to the Redux store without using props and props drilling.
Subscribing individual components to specific pieces of the application state for optimized rendering.
Easily dispatching actions within components.

-------------------

Installing react-redux
To take advantage of React Redux within your application, you must install the react-redux package using npm, the Node Package Manager. If you’re not familiar with npm, you can learn more in the documentation. This includes understanding the directory structure, confirming installation and versions of your packages.

To install React Redux using npm, type the following command into your terminal and hit the “enter” key:

npm install react-redux
After installation, your application will have access to the tools provided by the React Redux package.

------------------

THE REACT REDUX LIBRARY
Selectors
The Redux store is provided to the React components of the application using the <Provider>component. Now, for each React component, you need to define which data from the store that component needs access to. This can be done by creating selector functions. These are not provided by the react-redux library but instead are user-defined.

A selector function, or selector, is a pure function that selects data from the Redux store’s state. Each component in an application that needs access to the state will have one or more selectors that extract only the necessary data for that component.

As pure functions, selectors should output the same data given the same input. This means that no randomness or side effects can occur inside the function.

A selector:

Takes state as an argument.
Returns what is needed by the component from state.
/* 
Given a state with an array of objects, labeled 'todos', and a string, labeled 'filter':
 
state = {
  todos: [
    {id: 1, isComplete: true, text: 'Go shopping'}
    {id: 2, isComplete: false, text: 'Call home'}  
  ],
  filter: 'SHOW_ALL'
}
*/
 
// Select the current filter
export const selectFilter = state => state.filter;
 
// Select the `text` from each todo in an array.
export const selectTodoText = state => state.todos.map(
  todo => todo.text);
 
// Select the id values of completed todos in an array.
export const selectIsCompleteIDs = state => state.todos.filter(
  todo => todo.isComplete).map(todo => todo.id)
The first selector selectFilter returns the string state.filter.
selectTodoText returns an array of the .text value for each todo object .
selectIsCompleteIDs returns an array of the id values from the todo objects where isCompleted is true.
It is a convention to give selectors a name that starts with select and that represents the specific piece of data they retrieve.

Now, let’s implement some selectors for the Recipes app!

The AllRecipes component needs to display the entire set of recipes loaded from the database. If a search term is supplied, however, it needs to display only the recipes that match the search term. To accomplish this task you will need the allRecipes array and the searchTerm string from the Redux store.

Take a look at searchTermSlice.js where the selectSearchTerm() selector function has been implemented and exported for you. In allRecipesSlice.js the selectSearchTerm() function has been imported and it will be up to you to use it to help implement the selectors for the allRecipes slice.


import allRecipesData from '../../../data.js'
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  }
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return action.payload;
    case 'favoriteRecipes/addRecipe':
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe':
      return [...allRecipes, action.payload]
    default:
      return allRecipes;
  }
}

// Implement the selectors below.
export const selectAllRecipes = state => state.allRecipes;

export const selectFilteredAllRecipes = state => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

    return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));


};


// This code is for testing the seletors only.
const testState = {
  allRecipes: allRecipesData,
  searchTerm: 'ch'
}

const testSelectAllRecipes = () => {
  console.log('All Recipes')
  console.log(selectAllRecipes(testState));
}

const testSelectFilteredAllRecipes = () => {
  console.log('\nRecipes filtered by searchTerm')
  console.log(selectFilteredAllRecipes(testState));
}

// Uncomment these to test each selector.
testSelectAllRecipes();
testSelectFilteredAllRecipes(); 


------------------------
The useSelector() Hook
With selectors, you have given your application the instructions to access data from the Redux store. To use these instructions the useSelector() hook is provided by react-redux. useSelector() accomplishes two things:

It returns data from the Redux store using selectors
It subscribes a child component of <Provider /> to changes in the store. React, not Redux, will re-render the component if the data from the selector changes.
These tasks are both accomplished by calling useSelector() inside a component definition and assigning its returned value to a variable.

// Todos.js
import { useSelector } from 'react-redux';
import { selectTodos } from 'todosSlice.js';
 
export const Todos = () => {
  const todos = useSelector(selectTodos);
 
  return (
    <p>{todos}</p>
  )
};
In the above example, useSelector() takes the imported selector function selectTodos as an argument. The returned value is the selected data from the Redux store and is assigned to todos.

Calling useSelector()inside the component definition also subscribes the Todos component to re-render if any changes occur in the todos portion of the Redux store. This optimizes the performance of the application by only re-rendering components that have had their data change and not the entire application.

useSelector() can also use an inline selector as an argument:

const todos = useSelector(state => state.todos);
Inline selectors can be useful if you need to use props for data retrieval.

export const Todo = (props) => {
  const todo = useSelector(state => state.todos[props.id]);
 
This final example uses props.id to extract a single element from an array or object in the Redux store.

useSelector() completes the 3 step process for accessing data from the Redux store using react-redux.

The <Provider> component is used to provide the Redux store to the nested application.
Selectors are created to give instructions on retrieving data from the store.
useSelector() is called within a child component of <Provider> for executing selector instructions to retrieve data and subscribe to re-rendering.



import React, { useEffect } from 'react';
// Implement the import statements below.
import { useSelector } from 'react-redux';

// Add the selector to the below import statement 
import { loadData, selectFilteredAllRecipes } from './allRecipesSlice.js';
import { addRecipe } from '../favoriteRecipes/favoriteRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllRecipes = () => {
  // Implement allRecipes variable below.
  const allRecipes = useSelector(selectFilteredAllRecipes);
  
  const onFirstRender = () => {
    // dispatch(loadData());
  }
  useEffect(onFirstRender, []);

  const onAddRecipeHandler = (recipe) => {
    // dispatch(addRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddRecipeHandler(recipe)}
            icon={favoriteIconURL}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};



-------------------
THE REACT REDUX LIBRARY
The useDispatch() Hook
With the <Provider> component, selectors, and useSelector() implemented, you are now able to access the application state and subscribe component rendering to data changes. In this exercise, you are going to look at the final step: dispatching actions.

Without the react-redux library, you needed to create a reference to store.dispatch and pass it through the application’s props. With react-redux you can now access this reference from each component with useDispatch().

import { useDispatch } from 'react-redux';
 
// within component definition
const dispatch = useDispatch() 
dispatch({type: 'addTodo'});
The above example:

Imports useDispatch from react-redux.
Calls useDispatch() to obtain a reference to the Redux store dispatch() function and assigns it to dispatch.
Dispatches an action using dispatch() with an action object as the argument.
Here is a complete example with action creators and a Component definition:

import { useSelector, useDispatch } from 'react-redux';
import { selectTodo } from './todoSlice.js';
import { removeTodo } from './todoSlice.js';
 
const Todo = () => {
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch();
 
  return (
    <button onClick={() => dispatch(removeTodo(todo))}>
      {todo}
    </button>
  )
}
This example demonstrates:

Importing useDispatch (alongside useSelector).
Importing the removeTodo action creator from ./todoSlice.js
Creating the dispatch variable that holds the reference to the Redux store dispatch function.
Dispatching an action using dispatch() with removeTodo.
The useDispatch hook allows you to dispatch actions from any component that is a descendent of the <Provider> component, therefore avoiding passing a reference to store.dispatch through props. Both approaches accomplish the same thing but useDispatch() avoids props drilling.

In AllRecipes.js, take a look at the functions onFirstRender() and onAddRecipeHandler(). These handlers are still implemented from the earlier version of the app when dispatch was made available through props. You will now provide a new reference to the Redux store’s dispatch function.

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeRecipe, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice.js';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';

export const FavoriteRecipes = () =>{
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const dispatch = useDispatch();

  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch the action below.
    dispatch(removeRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {favoriteRecipes.map(createRecipeComponent)}
    </div>
  );

  // Helper Function
  function createRecipeComponent(recipe) {
    return (
      <Recipe recipe={recipe} key={recipe.id}>
        <FavoriteButton
          onClickHandler={() => onRemoveRecipeHandler(recipe)}
          icon={unfavoriteIconUrl}
        >
          Remove Favorite
        </FavoriteButton>
      </Recipe>
    )
  } 
};
-------------------

