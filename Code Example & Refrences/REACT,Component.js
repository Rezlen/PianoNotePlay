Hello World, Part II... THE COMPONENT
React applications are made out of components.

What’s a component?

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

Take a look at the code below. This code will create and render a new React component:

import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
 
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
A lot of that code is probably unfamiliar. However, you can recognize some JSX in there, as well as ReactDOM.render().

We are going to unpack that code, one small piece at a time. By the end of this lesson, you’ll understand how to build a React component!

A note from the Curriculum Developers: In this course, we teach both class components and function components. 
We start with class components because they are still widely used in legacy code and in tutorials/documentation found online. 
In the module on Hooks, we introduce function components which are the recommended way of creating React components. 
From that point on, we use function components throughout the remainder of our React content.

==================

Import React
Wooo! Your first React component!

In the last exercise, we started by importing from react. The line that did this is:

import React from 'react';
This creates an object named React which contains methods necessary to use the React library.

Later, we’ll go over where the React library is imported from, and how the importing process works. For now, just know that this is how we import the React library.

You’ve already seen one of the methods contained in the React library: React.createElement(). Recall that when a JSX element is compiled, it transforms into a React.createElement() call.

For this reason, you have to import the React library, and save it in a variable named React, before you can use any JSX at all. React.createElement() must be available in order for JSX to work.

============

Create a Component Class
You’ve learned that a React component is a small, reusable chunk of code that is responsible for one job, which often involves rendering HTML.

Here’s another fact about components: we can use a JavaScript class to define a new React component. We can also define components with JavaScript functions, but we’ll focus on class components first.

All class components will have some methods and properties in common (more on this later). Rather than rewriting those same properties over and over again every time, we extend the Component class from the React library. 
This way, we can use code that we import from the React library, without having to write it over and over again ourselves.

After we define our class component, we can use it to render as many instances of that component as we want.

What is React.Component, and how do you use it to make a component class?

React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.

JavaScript classes and subclassing are a complex topic beyond the scope of this course. If you aren’t comfortable with them, here are some good resources to consult: 1 2 3 4.

Take another look at the code from the first exercise:

import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
 
ReactDOM.render(
    <MyComponentClass />, 
    document.getElementById('app')
);
A lot of it is still unfamiliar, but you can understand more than you could before!

On line 4, you know that you are declaring a new component class, which is like a factory for building React components. You know that React.
Component is a class, which you must subclass in order to create a component class of your own. 
You also know that React.Component is a property on the object which was returned by import React from 'react' on line 1.
==========================

Name a Component Class
Good! Subclassing React.Component is the way to declare a new component class.

When you declare a new component class, you need to give that component class a name. On our finished component, our component class’s name was MyComponentClass:

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
Component class variable names must begin with capital letters!

This adheres to JavaScript’s class syntax. This naming convention is also seen in other languages that write class names in UpperCamelCase, like Java.

In addition, there is a React-specific reason why component class names must always be capitalized. We’ll get to that soon
================

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
); 


Component Class Instructions
Let’s review what you’ve learned so far! Find each of these points in app.js:

On line 1, import React from 'react' creates a JavaScript object. This object contains properties that are needed to make React work, such as React.createElement() and React.Component.

On line 2, import ReactDOM from 'react-dom' creates another JavaScript object. This object contains methods that help React interact with the DOM, such as ReactDOM.render().

On line 4, by subclassing React.Component, you create a new component class. This is not a component! A component class is more like a factory that produces components. When you start making components, each one will come from a component class.

Whenever you create a component class, you need to give that component class a name. That name should be written in UpperCamelCase. In this case, your chosen name is MyComponentClass.

Something that we haven’t talked about yet is the body of your component class: the pair of curly braces after React.Component, and all of the code between those curly braces.

Like all JavaScript classes, this one needs a body. The body will act as a set of instructions, explaining to your component class how it should build a React component.

Here’s what your class body would look like on its own, without the rest of the class declaration syntax. Find it in app.js:

{
  render() {
    return <h1>Hello world</h1>;
  }
}
That doesn’t look like a set of instructions explaining how to build a React component! Yet that’s exactly what it is.

Click Next, and we’ll go into how these instructions work.
==================

The Render Function
A component class is like a factory that builds components. It builds these components by consulting a set of instructions, which you must provide. Let’s talk about these instructions!

For starters, these instructions should take the form of a class declaration body. That means that they will be delimited by curly braces, like this:

class ComponentFactory extends React.Component {
  // instructions go here, between the curly braces
}
The instructions should be written in typical JavaScript ES2015 class syntax.

There is only one property that you have to include in your instructions: a render method.

A render method is a property whose name is render, and whose value is a function. The term “render method” can refer to the entire property, or to just the function part.

class ComponentFactory extends React.Component {
  render() {}
}
A render method must contain a return statement. Usually, this return statement returns a JSX expression:

class ComponentFactory extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
Of course, none of this explains the point of a render method. All you know so far is that its name is render, it needs a return statement for some reason, and you have to include it in the body of your component class declaration. We’ll get to the ‘why’ of it soon!
====================

Create a Component Instance
MyComponentClass is now a working component class! It’s ready to follow its instructions and make some React components.

So, let’s make a React component! It only takes one more line:

<MyComponentClass />
To make a React component, you write a JSX element. Instead of naming your JSX element something like h1 or div like you’ve done before, give it the same name as a component class. Voilà, there’s your component instance!

JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! That is the React-specific reason why component class names must begin with capital letters. In a JSX element, that capitalized first letter says, “I will be a component instance and not an HTML tag.”
---------------------

Render A Component
You have learned that a component class needs a set of instructions, which tell the component class how to build components. When you make a new component class, these instructions are the body of your class declaration:

class MyComponentClass extends React.Component
{ // everything in between these curly-braces is instructions for how to build components
 
  render() {
    return <h1>Hello world</h1>;
  }
}
This class declaration results in a new component class, in this case named MyComponentClass. MyComponentClass has one method, named render. This all happens via standard JavaScript class syntax.

You haven’t learned how these instructions actually work to make components! When you make a component by using the expression <MyComponentClass />, what do these instructions do?

Whenever you make a component, that component inherits all of the methods of its component class. MyComponentClass has one method: MyComponentClass.render(). Therefore, <MyComponentClass /> also has a method named render.

You could make a million different <MyComponentClass /> instances, and each one would inherit this same exact render method.

This lesson’s final exercise is to render your component. In order to render a component, that component needs to have a method named render. Your component has this! It inherited a method named render from MyComponentClass.

Since your component has a render method, all that’s left to do is call it. This happens in a slightly unusual way.

To call a component’s render method, you pass that component to ReactDOM.render(). Notice your component, being passed as ReactDOM.render()‘s first argument:

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
ReactDOM.render() will tell <MyComponentClass /> to call its render method.

<MyComponentClass /> will call its render method, which will return the JSX element <h1>Hello world</h1>. ReactDOM.render() will then take that resulting JSX element, and add it to the virtual DOM. 
This will make “Hello world” appear on the screen.
============

import React from 'react'; //creates a JavaScript object. This object contains properties that are needed to make React work, such as React.createElement() and React.Component.
import ReactDOM from 'react-dom'; //This object contains methods that help React interact with the DOM, such as ReactDOM.render().

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
//ReactDOM.render() will tell <MyComponentClass /> to call its render method
ReactDOM.render(
<MyComponentClass/>, // JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! That is the React-specific reason why component class names must begin with capital letters. To make a React component, you write a JSX element. Instead of naming your JSX element something like h1 or div like you’ve done before, give it the same name as a component class.
document.getElementById('app')
);

================COMPONENTS AND ADVANCED JSX======================

Use Multiline JSX in a Component
In this lesson, you will learn some common ways that JSX and React components work together. You’ll get more comfortable with both JSX and components, while picking up some new tricks.

Take a look at this HTML:

<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>
How might you make a React component that renders this HTML?

Select QuoteMaker.js to see one way of doing it.

The key thing to notice in QuoteMaker is the parentheses in the return statement, on lines 6 and 18. Until now, your render function return statements have looked like this, without any parentheses:

return <h1>Hello world</h1>;
However, a multi-line JSX expression should always be wrapped in parentheses! That is why QuoteMaker‘s return statement has parentheses around it.
--------------------------

Use a Variable Attribute in a Component
Take a look at this JavaScript object named redPanda:

const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px
};
How could you render a React component, and get a picture with redPanda‘s properties?

Select RedPanda.js to see one way to do it.

Note all of the curly-brace JavaScript injections inside of the render function! Lines 16, 17, and 18 all use JavaScript injections.

You can, and often will, inject JavaScript into JSX inside of a render function.
-----------------
import React from 'react';
import ReactDOM from 'react-dom';

const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width:  '200px'
};

class RedPanda extends React.Component {
  render() {
    return (
      <div>
        <h1>Cute Red Panda</h1>
        <img 
          src={redPanda.src}
          alt={redPanda.alt}
          width={redPanda.width} />
      </div>
    );
  }
}

ReactDOM.render(
  <RedPanda />,
  document.getElementById('app')
);

------------------
Put Logic in a Render Function
A render() function must have a return statement. However, that isn’t all that it can have.

A render() function can also be a fine place to put simple calculations that need to happen right before a component renders. Here’s an example of some calculations inside of a render function:

class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
Watch out for this common mistake:

class Random extends React.Component {
  // This should be in the render function:
  const n = Math.floor(Math.random() * 10 + 1);
 
  render() {
    return <h1>The number is {n}!</h1>;
  }
};
In the above example, the line with the const n declaration will cause a syntax error, as it should not be part of the class declaration itself, but should occur in a method like render().
----------------
Use a Conditional in a Render Function
How might you use a conditional statement inside of a render() function?

Select TodaysPlan.js to see one way of doing it.

Notice that the if statement is located inside of the render function, but before the return statement. This is pretty much the only way that you will ever see an if statement used in a render function.
--------------

Use this in a Component
The word this gets used in React a lot!

You are especially likely to see this inside of the body of a component class declaration. Here’s an example:

class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }
 
  render() {
    return <h1>I like {this.food}.</h1>;
  }
}
In the code, what does this mean?

Once you have a guess, scroll down to see the answer.

…

…

…

…

…

…

The simple answer is that this refers to an instance of IceCreamGuy. The less simple answer is that this refers to the object on which this‘s enclosing method, in this case .render(), is called. It is almost inevitable that this object will be an instance of IceCreamGuy, but technically it could be something else.

Let’s assume that this refers to an instance of your component class, as will be the case in all examples in this course. IceCreamGuy has two methods: .food and .render(). Since this will evaluate to an instance of IceCreamGuy, this.food will evaluate to a call of IceCreamGuy‘s .food method. This method will, in turn, evaluate to the string “ice cream.”

Why don’t you need parentheses after this.food? Shouldn’t it be this.food()?

You don’t need those parentheses because .food is a getter method. You can tell this from the get in the above class declaration body.

There’s nothing React-specific about getter methods, nor about this behaving in this way! However, in React you will see this used in this way almost constantly.

this in JavaScript can be a difficult concept! Here is a good resource for understanding this in JavaScript.
-----------------
Use an Event Listener in a Component
Render functions often contain event listeners. Here’s an example of an event listener in a render function:

render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}
Recall that an event handler is a function that gets called in response to an event. In the above example, the event handler is myFunc().

In React, you define event handlers as methods on a component class. Like this:

class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }
 
  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}
Notice that the component class has two methods: .myFunc() and .render(). .myFunc() is being used as an event handler. .myFunc() will be called any time that a user hovers over the rendered <div></div>.
---------------------










