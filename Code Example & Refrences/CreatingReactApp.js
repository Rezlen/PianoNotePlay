Creating a React App
Use create-react-app to bootstrap a React application on your own computer

Introduction
React is a user interface framework developed by Facebook. It has a quickly growing developer adoption rate and was ranked as the most loved web framework in the 2019 Stack Overflow developer survey. This article will walk you through setting up your first React app and assumes you are familiar with text editors and command line navigation.

Getting Ready
We will be using the Node package manager (npm), so you will need to have Node installed on your computer. To check if you have Node installed, run this command in your terminal:

node -v
If you have Node installed, this command will return a version number, like v12.18.1.

If it’s not already installed, follow the steps in Setting Up Node Locally before moving on.

When you install Node, you automatically get npm installed on your computer as well. However, npm is a separate project from Node.js, and tends to update more frequently. As a result, even if you’ve just installed Node (and therefore npm), it’s a good idea to update your npm. Luckily, npm knows how to update itself!

To upgrade to the latest version of npm on *nix (OSX, Linux, etc.), you can run this command in your terminal:

sudo npm install -g npm@latest
To upgrade on Windows, follow the steps found in the npm documentation.

1. Setting Up the Boilerplate Application
It is possible to manually create a React app, but Facebook has created a Node package create-react-app to generate a boilerplate version of a React application.

Besides providing something that works out-of-the-box, this has the added benefit of providing a consistent structure for React apps that you will recognize as you move between React projects. It also provides an out-of-the-box build script and development server.

We will use npx, a package runner tool that comes with npm 5.2+ and higher, to install and run create-react-app. This will ensure that the latest version of create-react-app is used.

Open up your terminal.

If you’ve previously installed create-react-app globally via npm install -g create-react-app, it is recommended that you uninstall the package first. In your terminal run these commands:
npm uninstall -g create-react-app
npx create-react-app myfirstreactapp
If you’ve never installed create-react-app before, you can simply run this command:
npx create-react-app myfirstreactapp
If you have Yarn installed, create-react-app will use it by default to create new projects. If you would prefer to use npm, you can append --use-npm to the creation command. It will look like this:
npx create-react-app myfirstreactapp --use-npm
(Feel free to replace myfirstreactapp with whatever name you want, as long as it doesn’t contain capital letters :-))

Upon completion, you will get some quick tips on how to use the application:

createReactAppCommands

Before we run the app, let’s take a look around the app structure and see what it contains.

2. React App Structure
Change directories into the app you just created, and open the app in the text editor of your choice. You should see the following file structure:

myfirstreactapp
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
├── .gititgnore
├── package.json
├── package-lock.json
└── README.md
create-react-app has taken care of setting up the main structure of the application as well as a couple of developer settings. Most of what you see will not be visible to the visitor of your web app. React uses a tool called webpack which transforms the directories and files here into static assets. Visitors to your site are served those static assets.

Don’t worry if you don’t understand too much about webpack for now. One of the benefits of using create-react-app to set up our React application is that we’re able to bypass any sort of manual configuration for webpack. If you’re interested in delving deeper into it on your own, you can find a high-level overview of webpack’s core concepts here.

.gitignore

This is the standard file used by the source control tool git to determine which files and directories to ignore when committing code. While this file exists, create-react-app did not create a git repo within this folder. If you take a look at the file, it has taken care of ignoring a number of items (even .DS_Store for Mac users):

createReactAppGitIgnore

package.json

package_json

This file outlines all the settings for the React app.

name is the name of your app
version is the current version
"private": true is a failsafe setting to avoid accidentally publishing your app as a public package within the npm ecosystem.
dependencies contains all the required Node modules and versions required for the application. In the picture above, you’ll see six dependencies. The first three, as you may have guessed, are for the purpose of testing. The next two dependencies allow us to use react and react-dom in our JavaScript. Finally, react-scripts provides a useful set of development scripts for working with React. In the screenshot above, the react version specified is ^16.13.1. This means that npm will install the most recent major version matching 16.x.x. In contrast, you may also see something like ~1.2.3 in package.json, which will only install the most recent minor version matching 1.2.x.
scripts specifies aliases that you can use to access some of the react-scripts commands in a more efficient manner. For example, running npm test in your command line will run react-scripts test --env=jsdom behind the scenes.
You will also see two more attributes, eslintConfig and browserslist. Both of these are Node modules having their own set of values. browserslist provides information about browser compatibility of the app, while eslintConfig takes care of the code linting.
node_modules

This directory contains dependencies and sub-dependencies of packages used by the current React app, as specified by package.json. If you take a look, you may be surprised by how many there are.

Running ls -1 | wc -l within the node_modules/ directory will yield more than 800 subfolders. This folder is automatically added to the .gitignore for good reason! Don’t worry, even with all these dependencies, the basic app will only be around 50 KB after being minified and compressed for production.

package-lock.json

This file contains the exact dependency tree installed in node_modules/. This provides a way for teams working on private apps to ensure that they have the same version of dependencies and sub-dependencies. It also contains a history of changes to package.json, so you can quickly look back at dependency changes.

public

This directory contains assets that will be served directly without additional processing by webpack. index.html provides the entry point for the web app. You will also see a favicon (header icon) and a manifest.json.

The manifest file configures how your web app will behave if it is added to an Android user’s home screen (Android users can “shortcut” web apps and load them directly from the Android UI). You can read more about it here.

src

This contains the JavaScript that will be processed by webpack and is the heart of the React app. Browsing this folder, you see the main App JavaScript component (App.js), its associated styles (App.css), and test suite (App.test.js). index.js and its styles (index.css) provide an entry into the App and also kick off the registerServiceWorker.js. This service worker takes care of caching and updating files for the end-user. It allows for offline capability and faster page loads after the initial visit. More of this methodology is available here.

As your React app grows, it is common to add a components/ directory to organize components and component-related files and a views/ directory to organize React views and view-related files.

3. Starting the React App Development Server
As was stated in the success message when you ran create-react-app, you just need to run npm start in your app directory to begin serving the development server. It should auto-open a tab in your browser that points to http://localhost:3000/ (if not, manually visit that address). You will find yourself looking at a page resembling the following image:

default_react_app

As stated, any changes to the source code will live-update here. Let’s see that in action.

Leave the current terminal tab running (it’s busy serving the React app) and open src/App.js in your favorite text editor. You’ll see what looks like a mashup of JavaScript and HTML. This is JSX, which is how React adds XML syntax to JavaScript. It provides an intuitive way to build React components and is compiled to JavaScript at runtime. We’ll delve deeper into this in other content, but for now, let’s make a simple edit and see the update in the browser.

Change the main paragraph text to read Hello Codecademy! in App.js and save the file.

react_setup

If you left the terminal running, you should be able to switch over to your browser and see the update:

edited_react_app

Congratulations! You’re now up and running with React. You can now begin adding functionality for your application.

Next Steps
If you’d like to learn more about create-react-app, start with the documentation on the create-react-app website.

Since an important next step after creating a React App is to set up your environment to debug it, consider checking out our React Developer Tools article. 
There, we use the initial skeleton created with create-react-app to get you ready to begin debugging React Apps.

----------------------

In other words, React apps are made out of components, but what makes React special isn’t components themselves. 
What makes React special is the ways in which components interact.
------------
A Component in a Render Function
Here is a .render() method that returns an HTML-like JSX element:

class Example extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
You’ve seen render methods return <div></div>s, <p></p>s, and <h1></h1>s, just like in the above example.

Render methods can also return another kind of JSX: component instances.

class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}
 
class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
In the above example, Crazy‘s render method returns an instance of the OMG component class. 
You could say that Crazy renders an <OMG />.

-------------------
Apply a Component in a Render Function
This is new territory! You’ve never seen a component rendered by another component before.

You have seen a component rendered before, though, but not by another component. Instead, you’ve seen a component rendered by ReactDOM.render().

When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component.
-------------------
Require A File
When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default. ProfilePage.js and NavBar.js can’t see each other.

This is a problem!

On line 9, you just added an instance of the NavBar component class. But since you’re in ProfilePage.js, JavaScript has no idea what NavBar means.

If you want to use a variable that’s declared in a different file, such as NavBar, then you have to import the variable that you want. To import a variable, you can use an import statement:

import { NavBar } from './NavBar.js';
We’ve used import before, but not like this! Notice the differences between the above line of code and this familiar line:

import React from 'react';
The first important difference is the curly braces around NavBar. We’ll get to those soon!

The second important difference involves the contents of the string at the end of the statement: 'react' vs './NavBar.js'.

If you use an import statement, and the string at the end begins with either a dot or a slash, then import will treat that string as a filepath. import will follow that filepath, and import the file that it finds.

If your filepath doesn’t have a file extension, then “.js” is assumed. So the above example could be shortened:

import { NavBar } from './NavBar';
One final, important note:
None of this behavior is specific to React! Module systems of independent, importable files are a very popular way to organize code. React’s specific module system comes from ES6. More on all of that later.
--------------------

export
Alright! You’ve learned how to use import to grab a variable from a file other than the file that is currently executing.

When you import a variable from a file that is not the current file, then an import statement isn’t quite enough. You also need an export statement, written in the other file, exporting the variable that you hope to grab.

export comes from ES6’s module system, just like import does. export and import are meant to be used together, and you rarely see one without the other.

There are a few different ways to use export. In this course, we will be using a style called “named exports.” Here’s how named exports works:

In one file, place the keyword export immediately before something that you want to export. That something can be any top-level var, let, const, function, or class:

// Manifestos.js:
 
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  agile: 'https://agilemanifesto.org/iso/en/manifesto.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};
You can export multiple things from the same file:

// Manifestos.js:
 
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  agile:  'https://agilemanifesto.org/iso/en/manifesto.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};
 
export const alsoRan = 'TimeCube';
In a different file, import the name of the var, let, const, function, or class from the first file:

// App.js:
 
// Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';
 
// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`); 
This style of importing and exporting in JavaScript is known as “named exports.” When you use named exports, you always need to wrap your imported names in curly braces, such as:

import { faveManifestos, alsoRan } from './Manifestos';'
JavaScript’s ES6 module system goes beyond named exports and has several advanced syntax features.

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('app'))
---------------------------
this.props
Previously, you learned one way that components can interact: a component can render another component.

In this lesson, you will learn another way that components can interact: a component can pass information to another component.

Information that gets passed from one component to another is known as “props.”

Click Next to enter props-land!
-----------------
Access a Component's props
Every component has something called props.

A component’s props is an object. It holds information about that component.

To see a component’s props object, you use the expression this.props. Here’s an example of this.props being used inside of a render method:

render() {
  console.log("Props object comin' up!");
 
  console.log(this.props);
 
  console.log("That was my props object!");
 
  return <h1>Hello world</h1>;
}
Most of the information in this.props is pretty useless! But some of it is extremely important, as you’ll see.
------------------
Pass `props` to a Component
You can pass information to a React component.

How? By giving that component an attribute:

<MyComponent foo="bar" />
Let’s say that you want to pass a component the message, "This is some top secret info.". Here’s how you could do it:

<Example message="This is some top secret info." />
As you can see, to pass information to a component, you need a name for the information that you want to pass.

In the above example, we used the name message. You can use any name you want.

If you want to pass information that isn’t a string, then wrap that information in curly braces. Here’s how you would pass an array:

<Greeting myInfo={["top", "secret", "lol"]} />
In this next example, we pass several pieces of information to <Greeting />. The values that aren’t strings are wrapped in curly braces:

<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />
-------------------
Render a Component's props
You just passed information to a component’s props object!

You will often want a component to display the information that you pass.

Here’s how to make a component display passed-in information:

1 - Find the component class that is going to receive that information.
2 - Include this.props.name-of-information in that component class’s render method’s return statement.
---------------
Pass props From Component To Component
You have learned how to pass a prop to a component:

<Greeting firstName="Esmerelda" />
You have also learned how to access and display a passed-in prop:

render() {
  return <h1>{this.props.firstName}</h1>;
}
The most common use of props is to pass information to a component, from a different component. You haven’t done that yet, but it’s very similar to what you’ve seen already.

In this exercise, you will pass a prop from one component to another.

A curmudgeonly clarification about grammar:
You may have noticed some loose usage of the words prop and props. Unfortunately, this is pretty inevitable.

props is the name of the object that stores passed-in information. this.props refers to that storage object. At the same time, each piece of passed-in information is called a prop. This means that props could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information :(
    ---------------------

Render Different UI Based on props
Awesome! You passed a prop from a component to a different component, accessed that prop from the receiver component, and rendered it!

You can do more with props than just display them. You can also use props to make decisions.

In the code editor, look at the Welcome component class.

You can tell from this.props.name on line 5 that Welcome expects to receive a piece of information called name. However, Welcome never renders this piece of information! Instead, it uses the information to make a decision.

<Welcome /> instances will render the text WELCOME "2" MY WEB SITE BABYYY!!!!!, unless the user is Mozart, in which case they will render the more respectful
hello sir it is truly great to meet you
here on the web.

The passed-in name is not displayed in either case! The name is used to decide what will be displayed. This is a common technique.

Select Home.js and look at the Home component class. What will <Welcome /> render to the screen?
-------------------
Put an Event Handler in a Component Class
You can, and often will, pass functions as props. It is especially common to pass event handler functions.

In the next lesson, you will pass an event handler function as a prop. However, you have to define an event handler before you can pass one anywhere. In this lesson, you will define an event handler function.

How do you define an event handler in React?

You define an event handler as a method on the component class, just like the render method.

Take a look in the code editor. On lines 4 through 8, an event handler method is defined, with similar syntax as the render method. On line 12, that event handler method is attached to an event (a click event, in this case).

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  // this was like: function talk () {.....}
  talk () {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.talk} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

---------------
Pass an Event Handler as a prop
Good! You’ve defined a new method on the Talker component class. Now you’re ready to pass that function to another component.

You can pass a method in the exact same way that you pass any other information. Behold, the mighty JavaScript.

---------
handleEvent, onEvent, and this.props.onEvent
Let’s talk about naming things.

When you pass an event handler as a prop, as you just did, there are two names that you have to choose.

Both naming choices occur in the parent component class - that is, in the component class that defines the event handler and passes it.

The first name that you have to choose is the name of the event handler itself.

Look at Talker.js, lines 6 through 12. This is our event handler. We chose to name it talk.

The second name that you have to choose is the name of the prop that you will use to pass the event handler. This is the same thing as your attribute name.

For our prop name, we also chose talk, as shown on line 15:

return <Button talk={this.talk} />;
These two names can be whatever you want. However, there is a naming convention that they often follow. You don’t have to follow this convention, but you should understand it when you see it.

Here’s how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was “click.”

If you are listening for a “click” event, then you name your event handler handleClick. If you are listening for a “keyPress” event, then you name your event handler handleKeyPress:

class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}
Your prop name should be the word on, plus your event type. If you are listening for a “click” event, then you name your prop onClick. If you are listening for a “keyPress” event, then you name your prop onKeyPress:

class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }
 
  render() {
    return <Child onHover={this.handleHover} />;
  }
}
One major source of confusion is the fact that names like onClick have special meaning, but only if they’re used on HTML-like elements.

Look at Button.js. When you give a <button></button> an attribute named onClick, then the name onClick has special meaning. As you’ve learned, this special onClick attribute creates an event listener, listening for clicks on the <button></button>:

// Button.js
 
// The attribute name onClick
// creates an event listner:
<button onClick={this.props.onClick}>
  Click me!
</button>
Now look at Talker.js. Here, when you give <Button /> an attribute named onClick, then the name onClick doesn’t do anything special. The name onClick does not create an event listener when used on <Button /> - it’s just an arbitrary attribute name:

// Talker.js
 
// The attribute name onClick
// is just a normal attribute name:
<Button onClick={this.handleClick} />
The reason for this is that <Button /> is not an HTML-like JSX element; it’s a component instance.

Names like onClick only create event listeners if they’re used on HTML-like JSX elements. Otherwise, they’re just ordinary prop names.

-----------------
this.props.children
Every component’s props object has a property named children.

this.props.children will return everything in between a component’s opening and closing JSX tags.

So far, all of the components that you’ve seen have been self-closing tags, such as <MyComponentClass />. They don’t have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

Look at BigButton.js. In Example 1, <BigButton>‘s this.props.children would equal the text, “I am a child of BigButton.”

In Example 2, <BigButton>‘s this.props.children would equal a <LilButton /> component.

In Example 3, <BigButton>‘s this.props.children would equal undefined.

If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.

BONUS: Each <List></List> instance is passed a singular title: “Living Musician” and “Living Cat Musician,” respectively. Somehow, each <List></List> counts its list-items and automatically adds an “s” to the end of its title if the count is greater than one. We could add a second piano cat, and the second list title would automatically pluralize.

See if you can figure out how the instances of the List component class are automatically pluralizing their titles!
----------------------

defaultProps
Take a look at the Button component class.

Notice that on line 8, Button expects to receive a prop named text. The received text will be displayed inside of a <button></button> element.

What if nobody passes any text to Button?

If nobody passes any text to Button, then Button‘s display will be blank. It would be better if Button could display a default message instead.

You can make this happen by giving your component class a property named defaultProps:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
Example.defaultProps;
The defaultProps property should be equal to an object:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
// Set defaultProps equal to an object:
Example.defaultProps = {};
Inside of this object, write properties for any default props that you’d like to set:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
Example.defaultProps = { text: 'yo' }; 
If an <Example /> doesn’t get passed any text, then it will display “yo.”

If an <Example /> does get passed some text, then it will display that passed-in text.
-----------------
Setting Initial State
A React component can access dynamic information in two ways: props and state.

Unlike props, a component’s state is not passed in from the outside. A component decides its own state.

To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
 
  render() {
    return <div></div>;
  }
}
 
<Example />
Whoa, a constructor method? super(props)? What’s going on here? Let’s look more closely at this potentially unfamiliar code:

constructor(props) {
  super(props);
  this.state = { mood: 'decent' };
}
this.state should be equal to an object, like in the example above. This object represents the initial “state” of any component instance. We’ll explain that more soon!

How about the rest of the code? constructor and super are both features of ES6, not unique to React. There is nothing particularly React-y about their usage here. A full explanation of their functionality is outside of the scope of this course, but we’d recommend familiarizing yourself. It is important to note that React components always have to call super in their constructors to be set up properly.

Look at the bottom of the highest code example in this column. <Example /> has a state, and its state is equal to { mood: 'decent' }.
----------------
Access a Component's state
To read a component’s state, use the expression this.state.name-of-property:

class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
 
  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}
The above component class reads a property in its state from inside of its render function.

Just like this.props, you can use this.state from any property defined inside of a component class’s body.
-----------------------

Update state with this.setState
A component can do more than just read its own state. A component can also change its own state.

A component changes its state by calling the function this.setState().

this.setState() takes two arguments: an object that will update the component’s state, and a callback. You basically never need the callback.

In the code editor, take a look at Example.js. Notice that <Example /> has a state of:

{
  mood:   'great',
  hungry: false
}
Now, let’s say that <Example /> were to call:

this.setState({ hungry: true });
After that call, here is what <Example />‘s state would be:

{
  mood:   'great',
  hungry: true
}
The mood part of the state remains unaffected!

this.setState() takes an object, and merges that object with the component’s current state. If there are properties in the current state that aren’t part of that object, then those properties remain how they were.

import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }

  render() {
    return <div></div>;
  }
}

<Example />
--------------

Call this.setState from Another Function
The most common way to call this.setState() is to call a custom function that wraps a this.setState() call. .makeSomeFog() is an example:

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }
 
  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}
Notice how the method makeSomeFog() contains a call to this.setState().

You may have noticed a weird line in there:

this.makeSomeFog = this.makeSomeFog.bind(this);
This line is necessary because makeSomeFog()‘s body contains the word this. We’ll talk about it more soon!

Let’s walk through how a function wrapping this.setState() might work in practice. In the code editor, read Mood.js all the way through.

Here is how a <Mood />‘s state would be set:

A user triggers an event (in this case a click event, triggered by clicking on a <button></button>).

The event from Step 1 is being listened for (in this case by the onClick attribute on line 20).

When this listened-for event occurs, it calls an event handler function (in this case, this.toggleMood(), called on line 20 and defined on lines 11-14).

Inside of the body of the event handler, this.setState() is called (in this case on line 13).

The component’s state is changed!

Due to the way that event handlers are bound in JavaScript, this.toggleMood() loses its this when it is used on line 20. Therefore, the expressions this.state.mood and this.setState on lines 12 and 13 won’t mean what they’re supposed to… unless you have already bound the correct this to this.toggleMood.

That is why we must bind this.toggleMood to this on line 8.

For an in-depth explanation of this kind of binding trickery, begin with the React docs. For the less curious, just know that in React, whenever you define an event handler that uses this, you need to add this.methodName = this.methodName.bind(this) to your constructor function.

Look at the statement on line 12. What does that do?

Line 12 declares a const named newMood equal to the opposite of this.state.mood. If this.state.mood is “good”, then newMood will be “bad,” and vice versa.

A <Mood /> instance would display “I’m feeling good!” along with a button. Clicking on the button would change the display to “I’m feeling bad!” Clicking again would change back to “I’m feeling good!”, etc. Try to follow the step-by-step walkthrough in Mood.js and see how all of this works.

One final note: you can’t call this.setState() from inside of the render function! We’ll explain why in the next exercise.

import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));

this.setState Automatically Calls render
There’s something odd about all of this.

Look again at Toggle.js.

When a user clicks on the <button></button>, the .changeColor() method is called. Take a look at .changeColor()‘s definition.

.changeColor() calls this.setState(), which updates this.state.color. However, even if this.state.color is updated from green to yellow, that alone shouldn’t be enough to make the screen’s color change!

The screen’s color doesn’t change until Toggle renders.

Inside of the render function, it’s this line:

<div style={{background:this.state.color}}>
that changes a virtual DOM object’s color to the new this.state.color, eventually causing a change in the screen.

If you call .changeColor(), shouldn’t you then also have to call .render() again? .changeColor() only makes it so that, the next time that you render, the color will be different. Why can you see the new background right away, if you haven’t re-rendered the component?

Here’s why: Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.

Think of this.setState() as actually being two things: this.setState(), immediately followed by .render().

That is why you can’t call this.setState() from inside of the .render() method! this.setState() automatically calls .render(). If .render() calls this.setState(), then an infinite loop is created.
-------------------

React Developer Tools
Use React Developer Tools to debug your React applications.

Introduction
Effectively debugging applications is a cornerstone of programming. After creating a React App, an important next step is setting up your environment to debug it. We’ll cover the basics in this article using the initial skeleton created by using create-react-app.

This article assumes you are familiar with create-react-app and Chrome DevTools. We’re also going to be briefly touching on state and props within a component, so it’s best if you have a basic understanding of these concepts before proceeding with this article!

We’ve included this article in video form too. You can watch here or scroll down to keep reading!


1. Install React Developer Tools
Facebook created a Chrome extension to help with debugging React Apps. It is called React Developer Tools and allows developers to inspect React components, view their properties, and interact with them while looking at the application in Google Chrome. You can add this functionality to Chrome by navigating to the extension page here, selecting “Add to Chrome”, and following the installation prompts.

React Dev Tools installation page

2. Inspect React components
With the extension installed, if you start your React App (npm start) and visit the site in Chrome, the React Developer Tools icon in the Chrome menu bar should change from inactive:

React Dev Tools inactive status

to active:

React Dev Tools active status
This indicates that the site you are browsing is a React App in development build. When a page is using the production build of React, the icon will look like this:

React Dev Tools active production status

To open the React Developer Tools, first open Chrome DevTools (View > Developer > Developer Tools). On the same banner as Elements, Sources, Console, etc., there will be two new React tabs: Components and Profiler. These two tabs will only appear on sites using React. (If they’re not visible, you’ll need to click on the arrow to expand the tabs selection.)

Click on the Components tab.

React Dev Tools tab open

Right now, all we can see is App itself. But we want to see the contents of App as well!

In the above image, you’ll see that the cursor is pointing to a gear icon. Click the gear icon to open up the settings, and then click on the Components tab in the pop up window.

React Dev Tools filter

By default, there is a filter that is causing the host (DOM) nodes to be hidden. Delete this filter for now and then exit out of the settings window. You can always go back into settings and apply your preferred filters!

Now you will see a tree of App‘s contents! As you hover over the elements on the left, they are highlighted in the rendered view, similar to Chrome DevTools. If you click on the elements in the left side of the window, their properties are exposed on the right side. (If your Chrome DevTools appear vertically on the left/right side of the window, App and its contents will appear on top, and their properties will be exposed underneath.):

React Dev Tools select

You can also use the search box to locate elements by name:

React Dev Tools search

If you’ve played around with React Developer Tools before, you may notice that this looks a bit different than what you remember. If that’s the case, you may want to take a look at the official React documentation for what’s changed or how to get the old version back if you’re more comfortable with that.

3. Modify components with JavaScript
With React Developer Tools and the console, it is possible to modify rendered React components. This allows you to experiment with changing component values, calling methods, and testing interaction between components.

You can access and update a component’s state and props inside the Components tab. Click and edit the props and state from the right side. For state to show up, you’ll first need to initialize the component with some state from inside your files.

React Dev Tools select component

It works with React Hooks, too!

React Dev Tools select component hooks

You can also do this by selecting the component, switching over to the console view, and accessing the component using $r. By logging $r, you could see that this was indeed the component selected.

React Dev Tools console

With these tools you’re now ready to begin debugging React Apps!

For more details and practice on how to use the updated tools, check out this interactive tutorial!

------------------
Build a Stateful Component Class
Let’s make a stateful component pass its state to a stateless component.

To make that happen, you need two component classes: a stateful class, and a stateless class.
-----------------

Pass a Component's State
A <Parent /> is supposed to pass its state to a <Child />.

Before a <Parent /> can pass anything to a <Child />, you need to import Child into Parent.js.

==============parent.js============

import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './Child';

class Parent extends React.Component {

constructor(props) {
    super(props);
    this.state = { name: 'Frarthur'};

  }

  render() {
  return <Child name={this.state.name} />;
  }
}

ReactDOM.render(
  <Parent />
  document.getElementById('app')
)

===============Child.js============
import React from 'react';

//That’s it! Child is ready to inherit a prop and display it. 
export class Child extends React.Component{
  render() {
  return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}
--------------------

Child Components Update Their Parents' state
How does a stateless, child component update the state of the parent component? Here’s how that works:

1

The parent component class defines a method that calls this.setState().

For an example, look in Step1.js at the .handleClick() method.

2

The parent component binds the newly-defined method to the current instance of the component in its constructor. This ensures that when we pass the method to the child component, it will still update the parent component.

For an example, look in Step2.js at the end of the constructor() method.

3

Once the parent has defined a method that updates its state and bound to it, the parent then passes that method down to a child.

Look in Step2.js, at the prop on line 28.

4

The child receives the passed-down function, and uses it as an event handler.

Look in Step3.js. When a user clicks on the <button></button>, a click event will fire. This will make the passed-down function get called, which will update the parent’s
-----------------------
Child Components Update Sibling Components
Patterns within patterns within patterns!

In lesson 1, you learned your first React programming pattern: a stateful, parent component passes down a prop to a stateless, child component.

In lesson 2, you learned that lesson 1’s pattern is actually part of a larger pattern: a stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent’s state.

In this lesson, we will expand the pattern one last time. A child component updates its parent’s state, and the parent passes that state to a sibling component.

An understanding of this final pattern will be very helpful in the wild, not to mention in the next React course. Click Next and we’ll build an example!
------------------
One Sibling to Display, Another to Change
One of the very first things that you learned about components is that they should only have one job.

In the last lesson, Child had two jobs:

1 - Child displayed a name.

2 - Child offered a way to change that name.

You should divide Child in two: one component for displaying the name, and a different component for allowing a user to change the name.

In the code editor, select Child.js. Notice that these lines have vanished:

<h1>
  Hey, my name is {this.props.name}! 
</h1>
The new version of Child renders a dropdown menu for changing the name, and that’s it.

Select Sibling.js in the code editor.

Read through the render function’s return statement.

Here, the name is displayed! Or at least it will be displayed, once you’ve done a little editing.

That brings us to the essential new concept for this lesson: you will have one stateless component display information, and a different stateless component offer the ability to change that information.
------------------
Pass the Right props to the Right Siblings
Look at Parent.js in the code editor.

Three things have changed in this file since the last Lesson:

Sibling has been required on line 4.
A <Sibling /> instance has been added to the render function on line 27.
<Sibling /> and <Child /> have been wrapped in a <div></div>, since JSX expressions must have only one outer element.
---------------
Display Information in a Sibling Component
You’re on the last step!

You’ve passed the name down to <Sibling /> as a prop. Now <Sibling /> has to display that prop.
=============Parent.js============
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child 
          onChange={this.changeName} />
        <Sibling name={this.state.name}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
=============Child.js============
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}
=============Sibling.js============
import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}
------------
The Component Lifecycle
We’ve seen that React components can be highly dynamic. They get created, rendered, added to the DOM, updated, and removed. All of these steps are part of a component’s lifecycle.

The component lifecycle has three high-level parts:

Mounting, when the component is being initialized and put into the DOM for the first time
Updating, when the component updates as a result of changed state or changed props
Unmounting, when the component is being removed from the DOM
Every React component you’ve ever interacted with does the first step at a minimum. If a component never mounted, you’d never see it!

Most interesting components are updated at some point. A purely static component—like, for example, a logo—might not ever update. But if a component’s state changes, it updates. Or if different props are passed to a component, it updates.

Finally, a component is unmounted when it’s removed from the DOM. For example, if you have a button that hides a component, chances are that component will be unmounted. If your app has multiple screens, it’s likely that each screen (and all of its child components) will be unmounted. If a component is “alive” for the entire lifetime of your app (say, a top-level <App /> component or a persistent navigation bar), it won’t be unmounted. But most components can get unmounted one way or another!

It’s worth noting that each component instance has its own lifecycle. For example, if you have 3 buttons on a page, then there are 3 component instances, each with its own lifecycle. However, once a component instance is unmounted, that’s it—it will never be re-mounted, or updated again, or unmounted.
-----------------------

componentDidMount
We’ve made a clock component, but it’s static. Wouldn’t it be nice if it updated?

At a high level, we’d like to update this.state.date with a new date once per second.

JavaScript has a helpful function, setInterval(), that will help us do just this. It lets us run a function on a set interval. In our case, we’ll make a function that updates this.state.date, and call it every second.

We’ll want to run some code that looks like this:

// NOTE: This code doesn't clean itself up properly.
// We'll explore that in the next exercise.
const oneSecond = 1000;
setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);
We have the code we want to run—that’s great. But where should we put this code? In other words, where in the component’s lifecycle should it go?

Remember, the component lifecycle has three high-level parts:

Mounting, when the component is being initialized and put into the DOM for the first time
Updating, when the component updates as a result of changed state or changed props
Unmounting, when the component is being removed from the DOM
It’s certainly not in the unmounting phase—we don’t want to start our interval when the clock disappears from the screen! It’s also probably not useful during the updating phase—we want the interval to start as soon as the clock appears, and we don’t want to wait for an update. It probably makes sense to stick this code somewhere in the mounting phase.

We’ve seen two functions: the render() and the constructor. Can we put this code in either of those places?

render() isn’t a good candidate. For one, it executes during the mounting phase and the updating phase—too often for us. It’s also generally a bad idea to set up any kind of side-effect like this in render(), as it can create subtle bugs in the future.
constructor() is also not great. It does only execute during the mounting phase, so that’s good, but you should generally avoid side-effects like this in constructors because it violates something called the Single Responsibility Principle. In short, it’s not a constructor’s responsibility to start side-effects. (You can read more about the principle on Wikipedia.)
If it’s not render() or the constructor, then where? Enter a new lifecycle method, componentDidMount().

componentDidMount() is the final method called during the mounting phase. The order is:

The constructor
render()
componentDidMount()
In other words, it’s called after the component is rendered. This is where we’ll want to start our timer.

(Another method, getDerivedStateFromProps(), is called between the constructor and render(), but it is very rarely used and usually isn’t the best way to achieve your goals. We won’t be talking about it in this lesson.)
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    // Paste your code here.
    const oneSecond = 1000;
setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));
-----------------
componentWillUnmount
Our clock is working, but it has an important problem. We never told the interval to stop, so it’ll keep running that function forever (or at least, until the user leaves/refreshes the page).

When the component is unmounted (in other words, removed from the page), that timer will keep on ticking, trying to update the state of a component that’s effectively gone. This means your users will have some JavaScript code running unnecessarily, which will hurt the performance of your app.

React will log a warning that looks something like this:

Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
Imagine if the clock gets mounted and unmounted hundreds of times—eventually, this will cause your page to become sluggish because of all of the unnecessary work. You’ll also see warnings in your browser console. Even worse, this can lead to subtle, annoying bugs.

All this bad stuff can happen if we fail to clean up a side-effect of a component. In our case this is a call to setInterval(), but components can have lots of other side-effects: loading external data with AJAX, doing manual tweaking of the DOM, setting a global value, and more. We try to limit our side-effects, but it’s difficult to build an interesting app with truly zero side-effects.

In general, when a component produces a side-effect, you should remember to clean it up.

JavaScript gives us the clearInterval() function. setInterval() can return an ID, which you can then pass into clearInterval() to clear it. Here’s the code we’ll want to use:

const oneSecond = 1000;
this.intervalID = setInterval(() => {
  this.setState({ date: new Date() });
}, oneSecond);
 
// Some time later...
clearInterval(this.intervalID);
At a high level, we want to continue to set up our setInterval() in componentDidMount(), but then we want to clear that interval when the clock is unmounted.

Let’s introduce a new lifecycle method: componentWillUnmount(). componentWillUnmount() is called in the unmounting phase, right before the component is completely destroyed. It’s a useful time to clean up any of your component’s mess.

In our case, we’ll use it to clean up the clock’s interval.
import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount(){
    clearInterval(this.intervalID)
  }
}
----------------
componentDidUpdate
Remember the three parts of a component’s lifecycle:

Mounting, when the component is being initialized and put into the DOM for the first time
Updating, when the component updates as a result of changed state or changed props
Unmounting, when the component is being removed from the DOM
We’ve looked at mounting (constructor(), render(), and componentDidMount()). We’ve looked at unmounting (componentWillUnmount()). Let’s finish by looking at the updating phase.

An update is caused by changes to props or state. You’ve already seen this happen a bunch of times. Every time you’ve called setState() with new data, you’ve triggered an update. Every time you change the props passed to a component, you’ve caused it to update.

When a component updates, it calls several methods, but only two are commonly used.

The first is render(), which we’ve seen in every React component. When a component’s props or state changes, render() is called.

The second, which we haven’t seen yet, is componentDidUpdate(). Just like componentDidMount() is a good place for mount-phase setup, componentDidUpdate() is a good place for update-phase work.

import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
startInterval() {
  let delay;
    if (this.props.isPrecise) {
      delay = 100;
    } else {
      delay = 1000;
    }
  this.intervalID = setInterval(() => {
    this.setState({ date: new Date() });
  }, delay);
}
  componentDidMount() {
    this.startInterval();
  }
  componentDidUpdate(prevProps) {
  if (this.props.isPrecise === prevProps.isPrecise) {
  return;
  }
  clearInterval(this.intervalID);
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

-------------
