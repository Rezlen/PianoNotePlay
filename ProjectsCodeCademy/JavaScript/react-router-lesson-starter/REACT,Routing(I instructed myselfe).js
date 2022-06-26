Build react on you computer (https://www.youtube.com/watch?v=tuxt25oaous) (https://www.codecademy.com/learn/learn-express)

Instruction video for below contents: (https://www.youtube.com/watch?v=vi_MzFyosSA)
REACT ROUTER
Installing React Router
Jan 2022 Update: This project is meant to be written using React Router v5. React Router v6 introduces breaking changes and your project will not work using these instructions if you install v6. Check out React Router’s documentation to learn more about upgrading from v5 to v6.

In order to use React Router, you will need to include the react-router-dom package (the version of React Router built specifically for web browsers) in your project by using npm like so:

npm install --save react-router-dom@5.2.0
Once you have added react-router-dom to your project, you can import one of its router components to add routing to your project. React Router provides several router components however the most common one is the BrowserRouter. The other option and the reasons you might choose one over the other are outside the scope of this lesson, but you can read more about that here.

For the sake of simplicity and readability, it is common to alias BrowserRouter as Router when importing, like so:

import { BrowserRouter as Router} from ‘react-router-dom’
Instructions
Task 1
Before we can install react-router-dom, we need to install all of the dependencies for this project. This can be done by running the command below in your terminal:

npm install
Hint

In the root directory of the project, run the command
npm install
You should see a folder called node_modules appear in your file system.

Task 2
Next, install react-router-dom@5.2.0.

To verify that you have successfully added the package to your project, navigate to package.json and check that react-router-dom appears in the “dependencies”.

Hint

Your terminal command should look like this:
npm install --save react-router-dom@5.2.0
Task 3
In App.js import BrowserRouter from react-router-dom and rename it to Router.

To confirm that you’ve followed these steps properly, run npm start in your terminal to start your application. Then, inspect the console and you should see no red errors related to react-router-dom (you may see yellow warnings though!).

Hint

The syntax for importing a component and renaming it looks like this:
import { ComponentName as AliasName } from `name-of-package`;
=========================

https://www.youtube.com/watch?v=pzxHs_2b62Y
REACT ROUTER
Rendering A <Router>
In the React Router paradigm, the different views of your application, also called routes, along with the Router itself, are just React components. To include them in your application, you will need to render them.

The first step is to render a Router component as the top-level component in your application.

import { BrowserRouter as Router } from 'react-router-dom';
 
export default function App () {
  return (
    <Router>
      {/* Application views are rendered here */
    </Router>
  )
}
 
Making Router the top-level component prevents URL changes from causing the page to reload. Instead, URL changes will allow the Router to determine which of its child components to render while passing along information about the current URL’s path as props.

In the next exercises, you will see how the children of the Router can make use of this information but for now, let’s add a Router to our application.

Instructions
Task 1
To add routing to your application, in App.js, replace the <div> component which currently surrounds the entire application’s contents with a Router component.

Hint

At this point, the `App` component should return the following:
<Router>
  <Header />
  <main>
    {/* Add Routes here! */}
  </main>
  <Footer />
</Router>
=================

