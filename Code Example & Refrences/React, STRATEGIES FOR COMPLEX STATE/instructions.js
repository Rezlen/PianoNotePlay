STRATEGIES FOR COMPLEX STATE
Introduction to Strategies for Complex State
In the last lesson, you built a simple counter app whose store state was just a single number. Though the counter app illustrates how Redux can manage the state of an application, it isn’t a great example of an application that needs Redux.

Redux really shines when used in applications with many features and a lot of data where having a centralized store to keep it all organized is advantageous. In this lesson, you will learn strategies for managing an application with a more complex store state and, in the process, you will begin to build an app that will grow throughout the rest of this course.

In the browser, you can see the final product. This application, which we will refer to as the “Recipes App”, does the following:

displays a set of recipes which are pulled from a database.
allows the user to add/remove their favorite recipes to/from a separate list.
allows the user to enter a search term to filter the visible recipes.
Now, imagine you are working for the software development company whose main product is this Recipes application. The product manager has determined the desired features and functionality, the graphic designer has defined its style, and the React engineer has created its components. Now it is up to you, the Redux Engineer, to design the state management system that can put it all together!

In reality, the Front-End Engineer would implement both React and Redux.

Before continuing on, make sure that you are familiar with the following terms and concepts relating to React and Redux:

React:
How to create components
How to render components using ReactDOM.render()
How to nest components and pass data through props
Redux:
One-way data flow model: State → View → Actions → State → View …
How to create a reducer function: (state, action) => nextState
How to write action objects and action creators
How to create a store using createStore()
How to use the store methods getState(), dispatch(), and subscribe()
Note to learners: The slightly wordy nature of Redux means that the examples in this course can be quite large. It is recommended that you expand the “Learn” section while reading through this lesson’s materi      

----------------

STRATEGIES FOR COMPLEX STATE
Actions and Payloads For Complex State
The initialState structure has been defined and you know that the state of this application has 3 slices: allRecipes, favoriteRecipes, and searchTerm. Now, you can begin thinking about how the user will trigger changes to these slices of state through actions.

Remember, actions in Redux are represented by plain JavaScript objects that have a type property and are dispatched to the store using the store.dispatch() method. 

When an application state has multiple slices, individual actions typically only change one slice at a time. Therefore, it is recommended that each action’s type follows the pattern 'sliceName/actionDescriptor', to clarify which slice of state should be updated.

For example, in a todo application with a state.todos slice, the action type for adding a new todo might be 'todos/addTodo'.

For the Recipes application, what do you think some of the action type strings might be? What user interactions might trigger them to be dispatched?

Write some of your ideas down before revealing the actions you will be using:
1- 'allRecipes/loadData': This action will be dispatched to fetch the needed data from an API right when the application starts.

2- 'favoriteRecipes/addRecipe': This action will be dispatched any time the user clicks on the ❤️ icon of a recipe from the full set of recipes.

3- 'favoriteRecipes/removeRecipe': This action will be dispatched any time the user clicks on the 💔 icon of a recipe from their list of favorites.

4- 'searchTerm/setSearchTerm': This action will be dispatched any time the user changes the text of the search input field to filter the full set of recipes.

5- 'searchTerm/clearSearchTerm': This action will be dispatched any time the user clicks on the “X” button next to the search input field.


It’s also important to consider which of these actions will have a payload — additional data passed to the reducer in order to carry out the desired change-of-state. For example, consider the actions for the searchTerm slice:

store.dispatch({ 
  type: 'searchTerm/setSearchTerm', 
  payload: 'Spaghetti' 
});
// The resulting state: { ..., searchTerm: 'Spaghetti' }
 
store.dispatch({ 
  type: 'searchTerm/clearSearchTerm' 
});
// The resulting state: { ..., searchTerm: '' }
When the learner types in a search term, that data needs to be sent to the store so that the React components know which recipes to render and which to hide.
When the user clears the search field, no additional data needs to be sent because the store can simply set the search term to be an empty string again.

************ importan************
Once you have a clear idea of the types of actions that will be dispatched in your application, when they will be dispatched, and what payload data they will carry, the next step is to make action creators.
************ importan************

Remember, action creators are functions that return a formatted action object.

Action creators enable Redux programmers to re-use action object structures without typing them out by hand and they improve the readability of their code, particularly when dealing with bulky payloads.

Take a look at store.js where you will find that action creators for the two actions above have been defined for you. Your job is to create the remaining three: loadData(), addRecipe(), and removeRecipe()

import allRecipesData from './data.js';

// The initialState structure has been defined. The state of this application has 3 slices
const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ''
};

// Dispatched when the user types in the search input.
// action creator. Sends the search term to the store.
const setSearchTerm = (term) => {
  return { 
    type: 'searchTerm/setSearchTerm', 
    payload: term 
  };
}

// action creator. Dispatched when the user presses the clear search button.
const clearSearchTerm = () => {
  return { 
    type: 'searchTerm/clearSearchTerm' 
  };
}

// Dispatched when the user first opens the application.
// action creator. Sends the allRecipesData array to the store.Remember to use the ‘sliceName/actionName’ pattern for type.
const loadData = () => {
    return { 
    type: 'allRecipes/loadData',
    payload: allRecipesData
  };
}

// Dispatched when the user clicks on the heart icon of 
// a recipe in the "All Recipes" section.
// action creator. Sends the recipe object to the store.
const addRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/addRecipe',
    payload: recipe
  };
}

// Dispatched when the user clicks on the broken heart 
// icon of a recipe in the "Favorite Recipes" section.
// action creator. Sends the recipe object to the store.
const removeRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/removeRecipe',
    payload: recipe
  };
}


--------------
STRATEGIES FOR COMPLEX STATE
Immutable Updates & Complex State
Now that you have defined which changes can occur to your application’s state, you need a reducer to execute those changes.

Remember, the store‘s reducer function is called each time an action is dispatched. It is passed the action and the current state as arguments and returns the store‘s next state. 

The second rule of reducers states that when the reducer is updating the state, it must make a copy and return the copy rather than directly mutating the incoming state. When the state is a mutable data type, like an array or object, this is typically done using the spread operator (...).

Below, the todosReducer for a todo app demonstrates this in action:

const initialState = {
  filter: 'SHOW_INCOMPLETE',
  todos: [
    { id: 0, text: 'learn redux', completed: false },
    { id: 1, text: 'build a redux app', completed: true },
    { id: 2, text: 'do a dance', completed: false },
  ]
};
 
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return {
        ...state,
        filter: action.payload
      };
    case 'todos/addTodo': 
      return {
        ...state,
        todos: [...state.todos, action.payload]
      } ;
    case 'todos/toggleTodo':
      return {
        ...state,
        todos: state.todos.map(todo => {
          return (todo.id === action.payload.id) ? 
            { ...todo, completed: !todo.completed } : 
            todo;
        })
      }
    default:
      return state;
  }
};
The todosReducer uses the initialState as the default state value.
When a 'filter/setFilter' action is received, it spreads the old state‘s contents (...state) into a new object before updating the filter property with the new filter from action.payload.
When a 'todos/addTodo' action is received, it does the same except this time, since state.todos is a mutable array, its contents are also spread into a new array, with the new todo from action.payload added to the end.
When a 'todos/toggleTodo action is received, it uses the .map() method to create a copy of the state.todos array. Additionally, the todo being toggled is found using action.payload.id and it is spread into a new object and updated.
It should be clarified that the state.todos.map() method only makes a “shallow” copy of the array, meaning the objects inside share the same references as the originals. Therefore, mutations to the objects within the copy will affect the objects within the original. For now, we can make do with this solution, but you will learn how to bypass this issue in a later lesson on the Redux Toolkit.

Now, let’s create a reducer for the Recipes app! In the store.js file, after the initialState and your action creators, you can see that this function has already been started for you. In the output terminal, you will see the results of printTests() which dispatch some actions to the store. Your task is to complete it such that it can handle each of the five action creator types that you had created in the last exercise.

import { createStore } from 'redux';
import allRecipesData from './data.js';

const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ''
};

const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  };
}

const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  }; 
};

const loadData = () => {
  return { 
    type: 'allRecipes/loadData', 
    payload: allRecipesData
  };
};

const addRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/addRecipe', 
    payload: recipe 
  };
};

const removeRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/removeRecipe', 
    payload: recipe 
  };
};

/* Complete this reducer */
const recipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'allRecipes/loadData':
      return { 
        ...state,
        allRecipes: action.payload
      }
    case 'searchTerm/clearSearchTerm':
      return {
        ...state,
        searchTerm: ''
      }
    
    case 'searchTerm/setSearchTerm':
      return {...state, searchTerm: action.payload};

    case 'favoriteRecipes/addRecipe':
      return {
        ...state, 
        favoriteRecipes: [...state.favoriteRecipes, action.payload]
        };

// The favoriteRecipes slice should be a new array that includes all the existing values from state.favoriteRecipes except for the recipe from action.payload. We recommend that you use the .filter() array method and filter out the element whose 'id' matches the recipe from action.payload
    case 'favoriteRecipes/removeRecipe':
      return {
        ...state, 
        favoriteRecipes: state.favoriteRecipes.filter(element => element.id !== action.payload.id)
        };

    default:
      return state;
  }
};

const store = createStore(recipesReducer);

/* DO NOT DELETE */
printTests();
function printTests() {
  store.dispatch(loadData());
  console.log('Initial State after loading data');
  console.log(store.getState());
  console.log();
  store.dispatch(addRecipe(allRecipesData[0]));
  store.dispatch(addRecipe(allRecipesData[1]));
  store.dispatch(setSearchTerm('cheese'));
  console.log("After favoriting Biscuits and Bulgogi and setting the search term to 'cheese'")
  console.log(store.getState());
  console.log();
  store.dispatch(removeRecipe(allRecipesData[1]));
  store.dispatch(clearSearchTerm());
  console.log("After un-favoriting Bulgogi and clearing the search term:")
  console.log(store.getState());
}
-----------------
STRATEGIES FOR COMPLEX STATE
Reducer Composition
In the last exercise, you saw how a single reducer was able to handle the logic for updating every slice of the store‘s state. Though this approach does work for these relatively small examples, as the application state becomes increasingly more complex, managing it all with a single reducer will become impractical.

The solution is to follow a pattern called reducer composition. In this pattern, individual slice reducers are responsible for updating only one slice of the application’s state, and their results are recombined by a rootReducer to form a single state object.

 
// Handles only `state.todos`.
const initialTodos = [
  { id: 0, text: 'learn redux', completed: false },
  { id: 1, text: 'build a redux app', completed: true },
  { id: 2, text: 'do a dance', completed: false },
];
const todosReducer = (todos = initialTodos, action) => {
  switch (action.type) {
    case 'todos/addTodo': 
      return [...todos, action.payload]
    case 'todos/toggleTodo':
      return todos.map(todo => {
        return (todo.id === action.payload.id) ? 
          { ...todo, completed: !todo.completed } : 
          {...todo};
      });
    default:
      return todos;
  }
};
 
// Handles only `state.filter`
const initialFilter = 'SHOW_INCOMPLETE',
const filterReducer = (filter = initialFilter, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;
    default:
      return filter;
};
 
const rootReducer = (state = {}, action) => {
  const nextState = {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
  };
  return nextState;
};
 
const store = createStore(rootReducer);
In the reducer composition pattern, when an action is dispatched to the store:

The rootReducer calls each slice reducer, regardless of the action.type, with the incoming action and the appropriate slice of the state as arguments.
The slice reducers each determine if they need to update their slice of state, or simply return their slice of state unchanged.
The rootReducer reassembles the updated slice values in a new state object.
One major advantage of this approach is that each slice reducer only receives its slice of the entire application’s state. Therefore, each slice reducer only needs to immutably update its own slice and doesn’t care about the others. This removes the problem of copying potentially deeply nested state objects.

Take a look at store.js where you will find that the reducer for the Recipe app that you wrote in the last exercise (which can be found in reducer-old.js) has been partially rewritten to follow the reducer composition pattern:

The initialState object has been replaced by individual initialSliceName variables which are used as default values for each slice reducer’s slice of state. This is another common feature of the reducer composition pattern.
The allRecipesReducer and searchTermReducer slice reducers have been created for you. Notice that they each have a default case.
Both slice reducers are called within the rootReducer to update their respective slices of state.
All that’s left is to complete the favoriteRecipesReducer() and include it in the rootReducer()!

import { createStore } from 'redux';
import allRecipesData from './data.js';

// Action Creators
////////////////////////////////////////

const addRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/addRecipe', 
    payload: recipe 
  };
}

const removeRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/removeRecipe', 
    payload: recipe 
  };
}

const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  }; 
}

const loadData = () => {
  return { 
    type: 'allRecipes/loadData', 
    payload: allRecipesData
  }; 
}

// Reducers
////////////////////////////////////////

const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch(action.type) {
    case 'allRecipes/loadData':
      return action.payload
    default:
      return allRecipes;
  }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch(action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default: 
      return searchTerm;
  }
}

// Create the initial state for this reducer.
var initialFavoriteRecipes = [];
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
  switch(action.type) {
    
    // Add action.type cases here.
  case 'favoriteRecipes/addRecipe':
    return [...favoriteRecipes, action.payload];
  case 'favoriteRecipes/removeRecipe':
    return favoriteRecipes.filter(element => element.id !== action.payload.id);
    // Don't forget to set the default case!
   default: 
     return favoriteRecipes;
  }
}


const rootReducer = (state = {}, action) => {
  const nextState = {
    allRecipes: allRecipesReducer(state.allRecipes, action),
    searchTerm: searchTermReducer(state.searchTerm, action),
    // Add in the favoriteRecipes slice using the favoriteRecipesReducer function. 
    favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action)
  } 
  return nextState;
}
const store = createStore(rootReducer);

-------------
combineReducers
In the reducer composition pattern, the same steps are taken by the rootReducer for each slice reducer:

call the slice reducer with its slice of the state and the action as arguments
store the returned slice of state in a new object that is ultimately returned by the rootReducer().
import { createStore } from 'redux';
 
// todosReducer and filterReducer omitted
 
const rootReducer = (state = {}, action) => {
  const nextState = {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
  };
  return nextState;
};
 
const store = createStore(rootReducer);
The Redux package helps facilitate this pattern by providing a utility function called combineReducers() which handles this boilerplate for us:

import { createStore, combineReducers } from 'redux'
 
// todosReducer and filterReducer omitted.
 
const reducers = {
    todos: todosReducer,
    filter: filterReducer
};
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
Let’s break this code down:

The reducers object contains the slice reducers for the application. The keys of the object correspond to the name of the slice being managed by the reducer value.
The combineReducers() function accepts this reducers object and returns a rootReducer function.
The returned rootReducer is passed to createStore() to create a store object.
Just as before, when an action is dispatched to the store, the rootReducer() is executed which then calls each slice reducer, passing along the action and the appropriate slice of state.

The last 6 lines of this example can be rewritten inline:

const store = createStore(combineReducers({
    todos: todosReducer,
    filter: filterReducer
}));
Take a look at store.js where you will find the slice reducers that you created in the last exercise. Now, however, the rootReducer() is missing. Rather than creating this function by hand, you will use combineReducers().

-----------------
// Import combineReducers from redux here.
import { createStore, combineReducers } from 'redux';
import allRecipesData from './data.js';

// Action Creators
////////////////////////////////////////

const addRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/addRecipe', 
    payload: recipe 
  };
}

const removeRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/removeRecipe', 
    payload: recipe 
  };
}

const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  }; 
}

const loadData = () => {
  return { 
    type: 'allRecipes/loadData', 
    payload: allRecipeData
  };
}

// Reducers
////////////////////////////////////////

const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch(action.type) {
    case 'allRecipes/loadData': 
      return action.payload
    default:
      return allRecipes;
  }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch(action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload
    case 'searchTerm/clearSearchTerm':
      return ''
    default: 
      return searchTerm;
  }
}

const initialFavoriteRecipes = [];
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
  switch(action.type) {
    case 'favoriteRecipes/addRecipe':
      return [...favoriteRecipes, action.payload]
    case 'favoriteRecipes/removeRecipe':
      return favoriteRecipes.filter(recipe => {
        return recipe.id !== action.payload.id
      });
    default:
      return favoriteRecipes;
  }
}

// Create your `rootReducer` here using combineReducers().
const reducers = {
  allRecipes: allRecipesReducer,
  favoriteRecipes: favoriteRecipesReducer,
  searchTerm: searchTermReducer
}

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
--------------------

A File Structure for Redux
At this point, you may have begun thinking that store.js is getting pretty long, and yet the Recipes app only has three slices! Imagine trying to fit the logic for an application with a dozen or more slices into one file. That would not be fun.

Instead, it is more common, and a better practice, to break up a Redux application using the Redux Ducks pattern, like so:

src/
|-- index.js
|-- app/
    |-- store.js
|-- features/
    |-- featureA/
        |-- featureASlice.js
    |-- featureB/
        |-- featureBSlice.js
As you can see in your coding workspace, this file structure has already been set up for you.

All of the Redux logic lives within the top-level directory called src/. It contains:

The entry point for the entire application, index.js (we will return to this file in the next exercise).
The sub-directories app/ and features/.
The src/app/ directory has only one file (for now), store.js. As before, the ultimate purpose of this file is to create the rootReducer and the Redux store. Now, however, you’ll notice that the file is empty! So where did the reducers and action creators go?!

The src/features/ directory, and its own src/features/featureX/ sub-directories, contain all of the code relating to each individual slice of the store‘s state. For example, for the state.favoriteRecipes slice, its slice reducer and action creators can be found in the file called src/features/favoriteRecipes/favoriteRecipesSlice.js.

Lucky for you, we took care of much of the tedious work involved in refactoring this code. In addition to creating new folders, new files, and copying over the relevant code, this refactor involved exporting each of the slice reducers and action creators, so that they could be imported back into store.js.

And that’s where you come in!

import { createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import { favoriteRecipesReducer } from '../features/favoriteRecipes/favoriteRecipesSlice.js';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice.js';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';

const reducers = {
  // Add the slice properties here
  favoriteRecipes: favoriteRecipesReducer,
  allRecipes: allRecipesReducer,
  searchTerm: searchTermReducer
}

// Declare the store here.
export const store = createStore(combineReducers(reducers));

---------------

Passing Store Data Through the Top-Level React Component
The file structure that you helped implement in the last exercise works nicely when we add in React components. Take a look at the src folder in your workspace and you will find the following file structure (new files have a (+) next to their name):

src/
|-- index.js
|-- app/
    |-- App.js (+)
    |-- store.js
|-- components/
    |-- FavoriteButton.js (+)
    |-- Recipe.js (+)
|-- features/
    |-- allRecipes/
        |-- AllRecipes.js (+)
        |-- allRecipesSlice.js
    |-- favoriteRecipes/
        |-- FavoriteRecipes.js (+)
        |-- favoriteRecipesSlice.js
    |-- searchTerm/
        |-- SearchTerm.js (+)
        |-- searchTermSlice.js
If you look at the actual file structure in your code editor, you may notice a few unfamiliar files / directories not mentioned in the structure above. The test/ directory and index.compiled.js file are used to test your code on Codecademy. You can ignore them. 

The new components are:

<App />: The top-level component for the entire application.
<AllRecipes />: The component for rendering the recipes loaded from the “database”.
<FavoriteRecipes />: The component for rendering the recipes favorited by the user.
<SearchTerm />: The component for rendering the search bar that filters the visible recipes.
<Recipe /> and <FavoriteButton />: Generic components used by <AllRecipes /> and <FavoriteRecipes />
Aside from the generic components, each feature-related React component file is located in the same directory as the slice file that manages the data rendered by that component. For example, FavoriteRecipes.js and favoriteRecipesSlice.js are both in the src/features/favoriteRecipes/ directory.

Open the src/app/App.js file where the top-level component, <App />, is stored. As in most React applications, this top-level component will render each feature-component and pass any data needed by those components as prop values. In Redux applications, the data passed to each feature-component includes:

The slice of the store‘s state to be rendered. For example, the state.searchTerm slice is passed to the <SearchTerm /> component.
The store.dispatch method to trigger state changes through user interactions within the component. For example, the <SearchTerm /> component will need to dispatch setSearchTerm() actions.
This distribution of the store.dispatch method and the slices of state to all of the feature-components, via the <App /> component, begins in the index.js file. Open up the src/index.js file where you will see some standard React code for rendering the top-level <App /> component. You’ll notice that the store is missing and the <App /> component isn’t receiving any props!


import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';
// Import 'store' here.
import { store } from './app/store.js';


const render = () => {
  // Pass `state` and `dispatch` props to <App />
  ReactDOM.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
    document.getElementById('root')
  )
}
render();
// Subscribe render to changes to the `store`
store.subscribe(render)
-----------s

Using Store Data Within Feature Components
At the end of the last exercise, you were able to pass the current state of the store and its store.dispatch method to the top-level component, <App />. This allowed the <App /> component to distribute the dispatch method and the slices of the store‘s state to each feature-component.

So it looks like you’re done, right? Not quite. Try adding a favorite recipe and you’ll see that it just disappears! Take a closer look at App.js and you’ll notice that the <FavoriteRecipes /> component is missing. Then, open up FavoriteRecipes.js and you’ll see that it is also incomplete. Let’s fix that.

Plugging in a feature-component to a Redux application involves the following steps:

Import the React feature-components into the top-level App.js file.
Render each feature-component and pass along the slice of state and the dispatch method as props.
Within each feature-component:
Extract the slice of state and dispatch from props.
Render the component using data from the slice of state.
Import any action creators from the associated slice file.
Dispatch actions in response to user inputs within the component.
This process is not different from how you implemented a React + Redux application in the past. Now, however, you must consider that the slices of the store‘s state and the dispatch method must be passed through props.


import React from 'react';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

// Import removeRecipe from favoriteRecipesSlice.js
import {removeRecipe} from './favoriteRecipesSlice.js'

export const FavoriteRecipes = (props) =>{
  
  const favoriteRecipes = props.favoriteRecipes;
  const dispatch = props.dispatch;
  
  const onRemoveRecipeHandler = (recipe) => {
    // Dispatch a removeRecipe() action.
    dispatch(removeRecipe(recipe))
  };

  // Map the recipe objects in favoriteRecipes to render <Recipe /> components.
  return (
    <div id='favorite-recipes' className="recipes-container">
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
--------------

Project video: https://www.youtube.com/watch?v=z8vbKfVrBgs for: https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-redux/modules/wdcp-22-core-redux-api/projects/codecademy-store
Project called: Codecademy Store : https://shop.codecademy.com/?_gl=1*rytot3*_ga*MTI3NDUxNDA0Ni4xNjQ5OTIwNDg0*_ga_3LRZM6TM9L*MTY1NjgzMDQ4MS42MTUuMS4xNjU2ODMyNTM5LjUz
