Higher-order functions are functions that accept other functions as arguments and/or return functions as output. This enables us to build abstractions on other abstractions, just like “We hosted a birthday party” is an abstraction that may build on the abstraction “We made a cake.”

In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

Since functions are a type of object, they have properties such as .length and .name, and methods such as .toString(). You can see more about the methods and properties of functions in the documentation.

Functions are special because we can invoke them, but we can still treat them like any other type of data.
===============
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  // Write your code below
  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes; // here we reassigned the a shorter name for ou
  isTwoPlusTwo(); // here we invoked the functionr LONG function
  
  console.log(isTwoPlusTwo.name); //this reminds the initial name of the function that we reassigned.
  
=============  HIGHER-ORDER FUNCTIONS=====================
Functions as Parameters
As you know, a parameter is a placeholder for the data that gets passed into a function. Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that functions can accept other functions as parameters. A higher-order function is a function that either accepts functions as parameters, returns a function, or both! We call functions that get passed in as parameters callback functions. Callback functions get invoked during the execution of the higher-order function.

When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses:

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);
We wrote a higher-order function higherOrderFunc that accepts a single parameter, param. Inside the body, param gets invoked using parentheses. And finally, a string is returned, telling us the name of the callback function that was passed in.

Below the higher-order function, we have another function aptly named anotherFunc. This function aspires to be called inside the higher-order function.

Lastly, we invoke higherOrderFunc(), passing in anotherFunc as its argument, thus fulfilling its dreams of being called by the higher-order function.

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});
In this example, we invoked higherOrderFunc() with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too!
===================
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val); //checkB stores the invocation of the func callback, with val as the argument.
  if (checkA === checkB) {
    return checkB;
  } else {
    return 'inconsistent results';
  }
  // if statement simplified:   return checkA === checkB ? func(val) : 'inconsistent results'; 
}

console.log(checkConsistentOutput(addTwo, 10));

================ ITERATORS =============

Introduction to Iterators
Imagine you had a grocery list and you wanted to know what each item on the list was. You’d have to scan through each row and check for the item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array. One tool at our disposal is the for loop. However, we also have access to built-in array methods which make looping easier.

The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

In this lesson, you will learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task.

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
}); // Outcome of console:
Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists.
================
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers); //Outcome of console: [ 1, 4, 9, 16, 25 ]

==============
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers); //Outcome of console: [ 5, 3.14, 100 ]
==================
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal=> animal==='elephant'); // which array number starts is 'elephant'
console.log(foundAnimal);

const startsWithS = animals.findIndex(animal=> animal[0]=== 's'); // which array number starts with's'
console.log(startsWithS);
======The .reduce() Method=====
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue); 
  return accumulator + currentValue;
},10);
console.log(newSum);
================
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

//  check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. 

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const
const interestingWords = words.filter(word => word.length>5);

console.log(interestingWords);
//check if every element has more than 5 characters.
console.log(interestingWords.every((word) => { 
  return word.length > 5; 
  } ));
  ============
  const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

===============
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
// console.log(storyWords);
let count = 0;
storyWords.forEach((word)=> { //function method to count the number of words
  count++;
});
console.log(count);

storyWords = storyWords.filter((word)=> { // reassing to remove the unnecessaryWords
  return word!==unnecessaryWord;
});

storyWords = storyWords.map((word)=> { // reassing to remove the misspelledWord
  if (word===misspelledWord) { // shoter way of this function: return word===misspelledWord ? 'beautiful' : word;
    return 'beautiful';
  } else {
    return word;
  }; 
});

let badWordIndex = storyWords.findIndex((word)=> { // reassing to remove the badWords
  return word===badWord;
});
console.log(badWordIndex);

storyWords = storyWords.map((word)=> { // reassing to remove/replace the badWords
  if (word===badWord) { // shoter way of this function: return word===badWord ? 'really' : word;
  return 'really';
  } else {
  return word;
  }; // shorter way to replace the word: storyWords[78]='reality'
});

let lengthCheck = storyWords.every((word) => {
 return word.length< 10; // find the word longer than 10 charecters
});
console.log(lengthCheck);

BiggerThan10 = storyWords.filter((word) => {// find the long word by call method
 return word.length> 10;
});
console.log(BiggerThan10);

console.log(storyWords.join(' '));

============Erorr finding methohdes==========
In the error message TypeError: students.filter is not a function, it’s highly unlikely that someone else is having a .filter() issue on a students variable with the same data types, so that’s the type of thing that could be more generic. Instead of searching for “TypeError: students.filter is not a function”, you can try something like “TypeError: object filter() is not a function” and add a keyword for the language. The final search might be: “TypeError: object filter() is not a function JavaScript”.

TypeError: students.filter is not a function
    at /home/runner/FearlessNewDev/index.js:21:26 // this error means, which is line 21 and at the 26th character

JavaScript error reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
Mozila error lists: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
============

