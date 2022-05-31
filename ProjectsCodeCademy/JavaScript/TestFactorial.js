Factorial Feature
In this project, you will use test-driven development to build a factorial method. You will use the assert module and mocha testing library to drive your development using tests that follow the phases: setup, exercise, and verification.

How To Calculate Factorial
You take an integer and you multiply that by all the integers that are less than it.

The factorial of an integer n is denoted by an exclamation mark n!, so 5! is equal to:

 5 × 4 × 3 × 2 × 1 = 120
Edge Case
An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter — you can think of these as special cases that you need to account for. Based on the logic of factorials, you would expect that calculating 0! would look like this:

0 × 0 = 0
But mathematically this is not true. In this instance of a factorial method, there is an edge-case which is that 0 factorial (or 0!) is 1.

The steps below follow the red-green-refactor cycle and will guide you through the process of using test-driven development to create a factorial method. The factorial method will be inside an object named Calculate. You will be implementing your test code in the file index_test.js, and your implementation code in index.js.

After you complete each step, run the test suite in the terminal to test the results.

If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.
=====================

==========Start of index.js============
const Calculate = {
    factorial(inputNumber) {
      
      if(inputNumber === 0) {
        return 1;
      }
      for(let i = inputNumber-1; i >= 1; i--) {
      inputNumber *=i;
      }
      return inputNumber;
      }
  }
  
  module.exports = Calculate;
==========End of Index.js==============

==========Start os index_text.js===========
var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it(" test if the output of 5! is equals to 120", () => {
      // Setup
      const inputNumber = 5;
      const expectedResult = 120;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
    });

    it(" test if the output of 3! is equals to 6", () => {
      // Setup
      const inputNumber = 3;
      const expectedResult = 6;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
    });

    // test for eadge cases
    it("returns 1 when you pass in 0.", () => {
      // Setup
      const inputNumber = 0;
      const expectedResult = 1;

      // Exercise
      const result = Calculate.factorial(inputNumber);

      // Verify
      assert.equal(result, expectedResult);
    });
  });
});

=========End of index_test.js=============