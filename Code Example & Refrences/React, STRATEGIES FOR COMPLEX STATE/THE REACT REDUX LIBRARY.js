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

