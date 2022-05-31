Introduction
Test-driven development (TDD) is a programming technique where you write test code before implementation code. Test code is written to define the desired behavior of your program. The test output provides descriptive error messages that inform the implementation of your program.

The Red-Green-Refactor Cycle
One of the driving forces of TDD is the red-green-refactor cycle. “Red” and “green” correspond to the color of the text that our test framework produces in the terminal while running the tests in our suite. Red signifies failing tests and green corresponds to passing tests.

Use this red, green, refactor diagram to help you as you read the steps below:

Red — Write tests that describe the intended behavior of implementation code, and then compare developer expectations with the actual results of implementation code. The tests should always fail at first because the implementation code for the desired behavior will be written in response to the failing test.
Green — Write just enough implementation code to make the test pass. The tests return green because the implementation code executes the intended behavior described by the test in the red phase.

Refactor — Clean up and optimize code following the characteristics of a good test. Refactoring involves actively considering test and implementation code and making revisions to the code base. The tests are passing and should continue to pass throughout this phase of the cycle.

In this lesson, you will use a test-driven development approach to program a method that calculates the sum of an array of numbers.
===========================

Getting Into The Red I
When we use the red, green, refactor cycle, we:

Write test code that fails
Write implementation code to make the test pass
Consider refactoring the code
As you learn TDD, it may feel backward to intentionally write and run code that will return errors. 
In TDD we react to the error messages by continually re-writing our implementation code so it behaves in the way that our test specifies.

Imagine you were trying to create a method named .initials, inside of an object named Phrase.

The desired behavior of .initials() is that it should return the first letter of each word in a phrase that is passed to it as an argument.

Step 1: Write The Test
The first step to writing a test with Mocha is to use describe and it blocks to describe the desired behavior of your code. 
It’s very important for tests to thoroughly describe the desired behavior with natural language. 
This will create the most helpful error messages and make it easy for you to understand the behavior that your test failed in executing.

Before running our test, we would use an assert statement to compare the desired result of our method with the actual result.

The first step in developing this method would be writing a test that could look like this:

describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      assert.strictEqual(Phrase.initials('Nelson Mandela'), 'NM');
    })
  })
})
Step 2: Run the test
If we ran this test we would get the following error message in the terminal:

ReferenceError: Phrase is not defined

Step 3: The test fails (yea!)
The error message tells us that the error is related to the Phrase.initials code block. 
The ReferenceError tells us that the error is thrown because we don’t have a Phrase object. 
In the next exercise, we’ll show you the minimum possible code required to get this test to pass.
===============================

Getting into the Red II
Congratulations, you have made it through your first red-green-refactor cycle using TDD! The next step is to repeat this cycle to build a more complete implementation of the .initials method.

Once you have a baseline test for your feature, you can start to write additional test cases that force you to write better implementation code.

Let’s consider the test suite for our Phrase.initials method. We have one test that checks if Phrase.initial("Nelson Mandela") returns "NM".

describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      const inputName = 'Nelson Mandela';
      const expectedInitials = 'NM';
      const result = Phrase.initials(inputName);
      assert.strictEqual(result, expectedInitials);
    });
  });
});
Let’s write another test that pushes us to implement a Phrase.initials() method that returns the first letter of each word for “Nelson Mandela” and a different name.

To do this, we will add another it block to our code, and inside the callback function we will again follow the setup, exercise, verification phases for writing tests. This time we will write a test based on the circumstance that the string passed to .initials() has three names: 'Juan Manuel Santos'.

Here is what a second test for .initials() would look like:

describe('Phrase', () => {
  describe('.initials', () => {
 
    . . .
 
    it('returns the initials of a name', () => {
      const nameInput = 'Juan Manuel Santos';
      const expectedInitials = 'JMS';
 
      const result = Phrase.initials(nameInput);
 
      assert.strictEqual(result, expectedInitials);
    });
  });
});
 
Although the new it block is similar to the existing example, the two together force you to implement a method that will return initials that pass both tests.

The idea of TDD is to continue building tests and going through the red-green-refactor process until you feel confident that your implementation code performs as expected.


========Index;========
const Calculate = {
  sum(inputArray) {
    // if block to throw an error if sent empthy input
    if (inputArray.length === 0) {
      return 0;
    }
    return inputArray.reduce((sum, value) => {
      return sum + value;
    })
  }
}

module.exports = Calculate;



========index_test.js:=========
const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1,2,3]
      
      const result = Calculate.sum(inputArray)
      
      assert.strictEqual(result, expectedResult);
    });
    
    it('returns the sum of a four item list', ()=>{
      const expectedResult = 22;
      const inputArray = [4,6,5,7];
      
      const result = Calculate.sum(inputArray);
      
      assert.strictEqual(result, expectedResult)
    });
        
    it('returns zero for an empty array', ()=>{
      const expectedResult = 0;
      const inputArray = [];
      
      const result = Calculate.sum(inputArray);
      
      assert.strictEqual(result, expectedResult)
      
    });
  });
});


======================================