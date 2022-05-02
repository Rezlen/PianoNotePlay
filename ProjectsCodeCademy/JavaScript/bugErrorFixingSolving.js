============Erorr finding methohdes==========
In the error message TypeError: students.filter is not a function, it’s highly unlikely that someone else is having a .filter() issue on a students variable with the same data types, so that’s the type of thing that could be more generic. Instead of searching for “TypeError: students.filter is not a function”, you can try something like “TypeError: object filter() is not a function” and add a keyword for the language. The final search might be: “TypeError: object filter() is not a function JavaScript”.

TypeError: students.filter is not a function
    at /home/runner/FearlessNewDev/index.js:21:26 // this error means, which is line 21 and at the 26th character

JavaScript error reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
Mozila error lists: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

Here are three common error types:

SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.
ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.
EvalError:
RangeError:
URIError:
AggregateError:
InternalError:
============Debugging with console.log()=================
// to find a number between 2 number and return TRUE or FALSE
function isStringPerfectLength(string, minLength, maxLength) {
    const stringLength = string.length;
    
      if (stringLength > minLength && stringLength < maxLength) {
        return true;
      } else {
        return false;
      }
    }
    `if (stringLength < minLength) {
      return false;
    } else if (stringLength > maxLength) {
      return false;
    } else {
      return true;
    }
  }`
  
// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));
================reverse Array Using 3 kinds of function===============

const reverseArray = arr => {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}

// As a function declaration:
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
  }
  return reversed
}

// Alternate solutions: 
//Using the .unshift() method
const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

// Alternate Built-in-Method
const sentence = ["sense.", "make", "all", "will", "This"];
  const reverseArray = sentence.reverse();
  console.log(sentence); // Output:  [ 'This', 'will', 'all', 'make', 'sense.' ]
================

//tesyt

