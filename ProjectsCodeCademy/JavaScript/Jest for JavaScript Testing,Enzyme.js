What testing means?
In tech jargon testing means checking that our code meets some expectations. For example: a function called "transformer" should returns the expected output given some input.

There are many types of testing and soon you'll be overwhelmed by the terminology, but long story short tests fall into three main categories:

unit testing
integration testing
UI testing
In this Jest tutorial we'll cover only unit testing, but at the end of the article you'll find resources for the other types of tests.

Jest Tutorial: what is Jest?
Jest is a JavaScript test runner, that is, a JavaScript library for creating, running, and structuring tests.

Jest ships as an NPM package, you can install it in any JavaScript project. Jest is one of the most popular test runner these days, and the default choice for React projects.

First things first: how do I know what to test?
When it comes to testing, even a simple block of code could paralyze beginners. The most common question is "How do I know what to test?".

If you're writing a web application a good starting point would be testing every page of the app and every user interaction. But, web applications are also made of units of code like functions and modules that need to be tested too.

There are two scenarios most of the times:

you inherit legacy code which comes without tests
you have to implement a new functionality out of thin air
What to do? For both cases you can help yourself by thinking of tests as of bits of code that check if a given function produces the expected result. Here's how a typical test flow looks like:

import the function to test
give an input to the function
define what to expect as the output
check if the function produces the expected output
Really, that's it. Testing won't be scary anymore if you think in these terms: input - expected output - assert the result.

Now hands on Jest!

Setting up the project
As with every JavaScript project you'll need an NPM environment (make sure to have Node installed on your system). Create a new folder and initialize the project with:

mkdir getting-started-with-jest && cd $_
npm init -y
Next up install Jest with:

npm i jest --save-dev
Let's also configure an NPM script for running our tests from the command line. Open up package.json and configure a script named test for running Jest:

  "scripts": {
    "test": "jest"
  },
and you're good to go!

Specifications and test-driven development
As developers, we all like creativity freedom. But, when it comes to serious stuff most of the time you don't have so much privilege.

We've got to follow specifications, that is, a written or verbal description of what to build.

In this tutorial we've got a rather simple spec from our project manager. A super important client needs a JavaScript function that should filter an array of objects.

For every object we must check a property called "url" and if the value of the property matches a given term then we should include the matching object in the resulting array.

Being a test-savvy JavaScript developer you want to follow test-driven development, a discipline which imposes to write a failing test before starting to code.

By default, Jest expects to find test files in a folder called __tests__ in your project folder. Create the new folder:

mkdir __tests__
Next up create a new file called filterByTerm.spec.js inside __tests__. You may wonder why the extension includes .spec.. It is a convention borrowed from Ruby for marking the file as a specification for a given functionality.

Now let's get testing!

Test structure, and a first failing test
Time to create your first Jest test. Open up filterByTerm.spec.js and create a test block:

describe("Filter function", () => {
  // test stuff
});
Our first friend is describe, a Jest method for containing one or more related tests. Every time you start writing a new suite of tests for a functionality wrap it in a describe block. As you can see it takes two arguments: a string for describing the test suite, and a callback function for wrapping the actual test.

Next up we're going to meet another function called test which is the actual test block:

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    // actual test
  });
});
At this point we're ready to write the test. Remember, testing is a matter of inputs, functions, and expected outputs. First let's define a simple input, an array of objects:

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];
  });
});
Next up we're going to define the expected result. As per spec the function under test should leave out the objects whose url property does not match the given search term.

We can expect for example an array with a single object, given "link" as the search term:

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];
  });
});
Now we're ready to write the actual test. We'll use expect, and a Jest matcher for checking if our fictitious (for now) function returns the expected result when called. Here's the test:

expect(filterByTerm(input, "link")).toEqual(output);
To break things down even further here's how you would call the function in your code:

filterByTerm(inputArr, "link");
In a Jest test you should wrap the function call inside expect which coupled with a matcher (a Jest function for checking the output) makes the actual tests. Here's the complete test:

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

  });
});
At this point you can give it a shot with:

npm test
You'll see the test fail spectacularly:

 FAIL  __tests__/filterByTerm.spec.js
  Filter function
    ✕ it should filter by a search term (2ms)

  ● Filter function › it should filter by a search term (link)

    ReferenceError: filterByTerm is not defined

       9 |     const output = [{ id: 3, url: "https://www.link3.dev" }];
      10 | 
    > 11 |     expect(filterByTerm(input, "link")).toEqual(output);
         |     ^
      12 |   });
      13 | });
      14 |
"ReferenceError: filterByTerm is not defined". That's a good thing actually. Let's fix it in the next section!

Fixing the test (and breaking it again)
What's really missing is the implementation of filterByTerm. For convenience, we're going to create the function in the same file where the test lives. In a real project you would define the function in another file and import it from the test file.

For making the test pass we'll use a native JavaScript function called filter which is able to filter out elements from an array. Here's a minimal implementation of filterByTerm:

function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}
Here's how it works: for each element of the input array we check the "url" property, matching it against a regular expression with the match method. Here's the complete code:

function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
  });
});
Now run the test again:

npm test
See it passing!

 PASS  __tests__/filterByTerm.spec.js
  Filter function
    ✓ it should filter by a search term (link) (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.836s, estimated 1s
Great job! Have we finished testing? Not yet. What it takes to make our function fail? Let's stress the function with an upper-case search term:

function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output); // New test

  });
});
Run the test ... and it will fail. Time to fix it again!

Fixing the test for uppercase
filterByTerm should account also for uppercase search terms. In other words it should return the matching objects even if the search term is an uppercase string:

filterByTerm(inputArr, "link");
filterByTerm(inputArr, "LINK");
For testing this condition we introduced a new test:

expect(filterByTerm(input, "LINK")).toEqual(output); // New test
For making it pass we can tweak the regular expression provided to match:

//
    return arrayElement.url.match(searchTerm);
//
Rather than passing searchTerm straight away we can construct a case-insensitive regular expression, that is, an expression that matches regardless of the string's case. Here's the fix:

function filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}
And here's the complete test:

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  });
});

function filterByTerm(inputArr, searchTerm) {
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}
Run it again and see it passing. Good job! As an exercise for you write two new tests and check the following conditions:

test for the search term "uRl"
test for an empty search term. How the function should deal with it?
How would you structure these new tests?

In the next section we'll see another important topic in testing: code coverage.

Code coverage in Jest
What is code coverage? Before talking about it let's make a quick adjustment to our code.

Create a new folder inside your project root called src and create a file named filterByTerm.js where we'll place and export our function:

mkdir src && cd _$
touch filterByTerm.js
Here's the file filterByTerm.js:

function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

module.exports = filterByTerm;
Now let's pretend I'm a fresh hired colleague of yours. I know nothing about testing and instead of asking for more context I go straight inside that function for adding a new if statement:

function filterByTerm(inputArr, searchTerm) {
  if (!searchTerm) throw Error("searchTerm cannot be empty");
  if (!inputArr.length) throw Error("inputArr cannot be empty"); // new line
  const regex = new RegExp(searchTerm, "i");
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(regex);
  });
}

module.exports = filterByTerm;
Unless I tell you "there's a new statement to test" you're not going to know exactly what to test in our function.

It's almost impossible to imagine all the paths our code can take and so arises the need for a tool that helps to uncover these blind spots.

That tool is code coverage, and it's a powerful utensil in our toolbox. Jest has built-in code coverage, you can activate it in two ways:

via the command line by passing the flag --coverage
by configuring Jest in package.json
Before running the test with coverage make sure to import filterByTerm in __tests__/filterByTerm.spec.js:

const filterByTerm = require("../src/filterByTerm");
// ...
Save the file and run the test with coverage:

npm test -- --coverage
Here's what you get:

 PASS  __tests__/filterByTerm.spec.js
  Filter function
    ✓ it should filter by a search term (link) (3ms)
    ✓ it should filter by a search term (uRl) (1ms)
    ✓ it should throw when searchTerm is empty string (2ms)

-----------------|----------|----------|----------|----------|-------------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |     87.5 |       75 |      100 |      100 |                   |
 filterByTerm.js |     87.5 |       75 |      100 |      100 |                 3 |
-----------------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
A nice summary of the testing coverage for our function. As you can see line 3 is uncovered. Try to reach 100% code coverage by testing the new statement I've added.

If you want to keep code coverage always active configure Jest in package.json like so:

  "scripts": {
    "test": "jest"
  },
  "jest": {
    "collectCoverage": true
  },
You can also pass the flag to the test script:

  "scripts": {
    "test": "jest --coverage"
  },
If you're a visual person there's also a way to have an HTML report for code coverage, it's simply as configuring Jest like so:

  "scripts": {
    "test": "jest"
  },
  "jest": {
    "collectCoverage": true,
    "coverageReporters": ["html"]
  },
Now every time you run npm test you can access a new folder called coverage in your project folder.

Inside this folder you'll find a bunch of files, with /coverage/index.html as a complete HTML summary of the coverage for your code:

Jest coverage

If you click on the function name you'll also see the exact untested line of code:

Jest coverage

Neat isn't? With code coverage you can discover what to test when in doubt.

How to test React with Jest?
React is a super popular JavaScript library for creating dynamic user interfaces. Jest works smoothly for testing React apps (both Jest and React are from Facebook's engineers). Jest is also the default test runner in create-react-app.

If you want to learn how to test React components check out Testing React Components: The Mostly Definitive Guide.

The guide covers unit testing components, class components, functional components with hooks, and the new Act API.

Bonus: ES modules with Jest
At the time of writing if you wish to use import ES module syntax in your Jest tests without babel and friends you should have Node.js >=v13.x, and Jest >=26.1.0 installed.

If you don't want to mess up your default Node.js version you can use a tool like nvm to install multiple Node.js versions.

Once nvm is in place you can install the latest release of Node.js with:

nvm install node
To make import work in Jest, package.json should have the key type configured as module, (see Node.js doc for more) and Jest must be called through Node.js with a flag:

  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  },
  "type": "module",
Once done you can start using import in Jest. Suppose you want to test a module at src/SimpleModule.js:

export function simpleFunc() {
  return "hello!";
}

export function complexFunc() {
  return "complex!";
}
In a test file at __tests__/SimpleModule.spec.js you can import the module as you would do normally:

import { simpleFunc } from "../src/SimpleModule";

describe("A simple module", () => {
  test("it should say hello", () => {
    expect(simpleFunc()).toEqual("hello!");
  });
});
Note that things could change a bit in the future, keep an eye on this issue.

Conclusions and resources
Testing is a big and fascinating topic. There are many types of tests and many libraries for testing. In this Jest tutorial you learned how to configure Jest for coverage reporting, how to organize and write a simple unit test, and how to test JavaScript code.

To learn more about Jest matchers check out the documentation.

To learn more about UI testing I highly suggest taking a look at JavaScript End to End Testing with Cypress.

You can find the code for this tutorial on Github: getting-started-with-jest alongside with the solution for the exercises.

Thanks for reading and stay tuned!
=========================
Writing Tests for React Applications Using Jest and Enzyme
Learn about the testing frameworks Jest and Enzyme.

→ Writing Tests for React Applications Using Jest and Enzyme

In this article, you will learn how to write tests for your React application using Jest and Enzyme. This is helpful if you want to write tests to catch edge cases, regressions, and have more confidence in shipping updates to your users.

This article uses yarn instead of npm. Yarn is an alternative package manager. The syntax for Yarn is slightly different compared to npm. You can use either package manager when following along.

Running packages
Using Yarn:

yarn create-react-app my-app

Using npm (specifically the npx command to execute a package without installing it):

npx create-react-app my-app

Adding dependencies
Using Yarn:

yarn add enzyme enzyme-adapter-react-16 --dev

Using npm:

npm install enzyme enzyme-adapter-react-16 --save-dev

Running package.json scripts
Using Yarn:

yarn run test

Using npm:

npm run test
====================


