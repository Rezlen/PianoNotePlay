Introduction: Redux
In this unit, you will be introduced to Redux.

The goal of this unit is to introduce you to the Redux library. Redux is most commonly used with React to manage application state, but can also be used with other libraries and frameworks, such as Angular. 
Redux is good for when your application becomes very large and has lots of moving parts. 
You may not always need Redux in an application, but it is helpful to learn and a good thing to have on your resume.

After this unit, you will be able to:

Use the Redux library
Understand why and when to use Redux in a React app
Know how to use Redux as middleware logic
Learning is social. Whatever you’re working on, be sure to connect with the Codecademy community in the forums. 
Remember to check in with the community regularly, including for things like asking for code reviews on your project work and providing code reviews to others in the projects category, which can help to reinforce what you’ve learned.
----------------

Introduction to Redux
Imagine a calendar app. One part of the app lists all of the events. Another part of the app sets filters on which types of events are shown. A third part of the app sets the current time zone and a fourth part creates new events. Whew, that’s a lot to keep track of!

In React, each of these “parts” would be a component and data would need to be shared and updated by these components. Developers call this shared data the state of the application. Meanwhile, the process of sharing and updating this state is called state management. Depending on the size and complexity of your state, state management can be a complicated process in plain React.

That’s where Redux comes in. Redux is a state management library that follows a pattern known as the Flux architecture. In the Flux pattern, and in Redux, shared information is not stored in components but in a single object. Components are just given data to render and can request changes using events called actions. The state is available throughout the application and updates are made in a predictable manner: components are “notified” whenever a change is made to the state.

To put it another way, here’s the description from the Redux documentation: “The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.”

There are similar tools like Recoil, MobX, and Apollo Client, but Redux is the tried-and-true tool for state management in React applications. It’s more popular in the developer community and it’s well supported with documentation and online tutorials.

This lesson will cover the core concepts of Redux: how Redux works and the basic terminology used to describe a Redux app. It assumes you know JavaScript functions, arrays, and objects. If you need to review these, check out the corresponding units in our Learn JavaScript course.
-----------------
My Home
Path Menu
Get Unstuck
Tools


Avatar
Core Concepts in Redux: One-Way Data Flow
Learn
CORE CONCEPTS IN REDUX
One-Way Data Flow
In most applications, there are three parts:

State – the current data used in the app
View – the user interface displayed to users
Actions – events that a user can take to change the state
The flow of information would go like this:

The state holds the current data used by the app’s components.
The view components display that state data.
When a user interacts with the view, like clicking a button, the state will be updated in some way.
The view is updated to display the new state.
With plain React, these three parts overlap quite a bit. Components not only render the user interface, but they also may manage their own state. When actions that may change the state occur, components need to directly communicate these changes to each other.

Redux helps separate the state, the view, and actions by requiring that the state be managed by a single source. Requests to change the state are sent to this single source by view components in the form of an action. Any components of the view that would be affected by these changes are informed by this single source. By imposing this structure, Redux makes our code more readable, reliable, and maintainable.
-----------------
Actions
Most well-designed applications will have separate components that need to communicate and share data with each other.

A todo list might have an input field where the user can type in a new todo item. The application might transfer this data from the input field, add it to an array of all todos, and then render them as text on the screen. This entire interaction can be defined as an action. In Redux, actions are represented as plain JS objects.

Here’s what that action might look like:

const action = {
  type: 'todos/addTodo',
  payload: 'Take selfies'
};
Every action must have a type property with a string value. This describes the action.
Typically, an action has a payload property with an object value. This includes any information related to the action. In this case, the payload is the todo text.
When an action is generated and notifies other parts of the application, we say that the action is dispatched.
Here are two more example actions:

“Remove all todos”. This requires no payload because no additional information is needed:

const action = {
  type: 'todos/removeAll'
}
“Remove the ‘Pack snacks’ todo”:

const action = {
  type: 'todos/removeTodo',
  payload: 'Pack snacks'
}
-------------
Reducers
So far, we’ve defined the state of our application and the actions representing requests to change that state, but we haven’t seen how these changes are carried out in JavaScript. The answer is a reducer.

A reducer, or reducer function, is a plain JavaScript function that defines how the current state and an action are used in combination to create the new state.

Here’s an example of a reducer function for a todo app:

const initialState = [ 'Print trail map', 'Pack snacks', 'Summit the mountain' ];
 
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/addTodo': {
      return [ ...state, action.payload];
    }
    case 'todos/removeAll': {
      return [];
    }
    default: {
      return state;
    }
  }
}
There a few things about this reducer that are true for all reducers:

It’s a plain JavaScript function
It defines the application’s next state given a current state and a specific action
It returns a default initial state if no action is provided
It returns the current state if the action is not recognized
There are two intermediate JavaScript syntaxes used here:

We use the equals sign = to supply a default value for the state parameter.
We use the spread operator (...) to copy the current state and any changed values into a new object, not the existing state argument. We’ll explain why in the next exercise.

// Define reducer here
//Default state to initialState if no value is provided
const reducer = (state=initialState, action) => {
  // Use a switch statement on the action.type property
  switch (action.type) {
    // Add a case for the 'songs/addSong' action type
    case 'songs/addSong': {
      // If the action.type is 'songs/addSong', return a copy of the state object with the new song added.
      return [...state, action.payload];
    }
    case 'songs/removeSong': {
      // If the action.type is 'songs/removeSong', return a copy of the state object with the specified song removed
      return state.filter(song=> song !== action.payload);
    }
    default: {
      return state;
    }
  }
}


const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
  type: 'songs/addSong',
  payload: 'Halo'
};

const removeSong = {
  type: 'songs/removeSong',
  payload: 'Take Five'
};

const removeAll = {
  type: 'songs/removeAll'
}
------------
Rules of Reducers
In the previous exercise, we wrote reducers that returned a new copy of the state rather than editing it directly. We did this to adhere to the rules of reducers provided by the Redux documentation:

They should only calculate the new state value based on the state and action arguments.
They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
They must not do any asynchronous logic or have other “side effects”.
By asynchronous logic or “side effects”, we mean anything that the function does aside from returning a value, e.g. logging to the console, saving a file, setting a timer, making an HTTP request, generating random numbers.

These rules make Redux code predictable and easy to debug: tests run reliably and other developers know what to expect from your code.

------------
Immutable Updates and Pure Functions
In programming, there is a more general way to describe the three rules of reducers in Redux: reducers must make immutable updates and be pure functions.

If a function makes immutable updates to its arguments, it does not change the argument but instead makes a copy and changes that copy. (Sounds similar to rule 2, no?) It’s called updating immutably because the function doesn’t change, or mutate, the arguments.

This function mutates its argument:

const mutableUpdater = (obj) => {
  obj.completed = !obj.completed;
  return obj;
}
 
const task = { text: 'do dishes', completed: false };
const updatedTask = mutableUpdater(task);
console.log(updatedTask); 
// Prints { text: 'do dishes', completed: true };
 
console.log(task); 
// Prints { text: 'do dishes', completed: true };
Meanwhile, this function “immutably updates” its argument:

const immutableUpdater = (obj) => {
  return {
    ...obj,
    completed: !obj.completed
  }
}
 
const task = { text: 'iron clothes', completed: false };
const updatedTask = immutableUpdater(task);
console.log(updatedTask); 
// Prints { text: 'iron clothes', completed: true };
 
console.log(task); 
// Prints { text: 'iron clothes', completed: false };
By copying the contents of the argument obj into a new object ({...obj}) and updating the completed property of the copy, the argument obj will remain unchanged.

Note that, plain strings, numbers, and booleans are immutable in JavaScript so we can just return them without making a copy:

const immutator = (num) => num + 1;
const x = 5;
const updatedX = immutator(x);
 
console.log(x, updatedX); // Prints 5, 6
If a function is pure, then it will always have the same outputs given the same inputs.

This is a combination of rules 1 and 3:

Reducers should only calculate the new state value based on the state and action arguments.
Reducers must not do any asynchronous logic or other “side effects”.
In this example, the function is not a pure function because its returned value depends on the status of a remote endpoint.

const addItemToList = (list) => {
  let item;
  fetch('https://anything.com/endpoint')
    .then(response => {
      if (!response.ok) {
        item = {};
      }
 
      item = response.json();
   });
 
   return [...list, item];  
};
The function can be made pure by pulling the fetch() statement outside of the function.

let item;
  fetch('https://anything.com/endpoint')
    .then(response => {
      if (!response.ok) {
        item = {};
      }
 
      item = response.json();
   });
 
const addItemToList = (list, item) => {
    return [...list, item];
};
------------
Store
So far we have covered state, actions, reducers, and how they participate in the one-way data flow. Where, in JavaScript, does all of this take place?

Redux uses a special object called the store. The store acts as a container for state, it provides a way to dispatch actions, and it calls the reducer when actions are dispatched. In nearly every Redux application, there will only be one store.

We can rephrase our data flow using the new term:

The store initializes the state with a default value.
The view displays that state.
When a user interacts with the view, like clicking a button, an action is dispatched to the store.
The dispatched action and the current state are combined in the store’s reducer to determine the next state.
The view is updated to display the new state.
We won’t be writing any code for the store during this lesson, but it’s important that you understand this term for future Redux lessons.

------------------
//initial wagon object holding key/value pairs to indicate progress on road journey
const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
};

//reducer to manage state of the journey
const gameProgress = (state=initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {
        ...state, 
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1
      };
    }

    case 'travel': {
      return {
        ...state, 
        supplies: state.supplies - (20 * action.payload),
        distance: state.distance + (10 * action.payload),
        days: state.days + action.payload
      }; 
      // if supplies are not sufficient to travel, return current state    
      if (!state.supplies === action.payload) {
        return state
      }
    }

    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      };
    }

    case 'sell': {
      return {
        ...state,
        supplies: state.supplies - 20,
        cash: state.cash + 5,
      };
    }

    case 'buy': {
      return {
        ...state,
        supplies: state.supplies + 25,
        cash: state.cash - 15,
      };
    }

    case 'theft': {
      return {
        ...state,
        cash: state.cash / 2,
      };
    }

    default: {
      return state
    }
  }
}

//initialization
let wagon = gameProgress(undefined, {});

//day 1 actions
wagon = gameProgress(wagon, {type: 'travel', payload: 1});
console.log(wagon)

//day 2 actions
wagon = gameProgress(wagon, {type: 'gather', payload: 0});
console.log(wagon)

//river accident actions
wagon = gameProgress(wagon, {type: 'tippedWagon', payload: 0});
console.log(wagon)

//buy supplies to replace lost from wagon accident
wagon = gameProgress(wagon, {type: 'buy', payload: 0});
console.log(wagon)

//day 3 actions
wagon = gameProgress(wagon, {type: 'travel', payload: 3});
console.log(wagon)

//theft
wagon = gameProgress(wagon, {type: 'theft'});
console.log(wagon)
-----------------






