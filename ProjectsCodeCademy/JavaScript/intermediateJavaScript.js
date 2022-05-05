
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

outcome: [ 'This', 'will', 'all', 'make', 'sense.' ]

================ Repeat a sentences for each tem in an array============
const greetAliens = arr => {
    for (let i = 0; i < arr.length; i++) {
          console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
    }
}

// Alternate solutions:

//Using string interpolation
const greetAliens = arr
for (let i = 0; i<arr.length; i++){
  console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}
console.log(greetAliens(aliens));

//As a function declaration:
function greetAliens(arr) {
for (let i = 0; i<arr.length; i++){
  console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
}
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens)

outcome:
Oh powerful Blorgous, we humans offer our unconditional surrender!
Oh powerful Glamyx, we humans offer our unconditional surrender!
Oh powerful Wegord, we humans offer our unconditional surrender!
Oh powerful SpaceKing, we humans offer our unconditional surrender!
undefined
=================repeat a string inside an array with each item inside===========

const convertToBaby = arr => {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}


// As a function declaration:
function convertToBaby(arr) {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}


const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

outcome: 
[ 'baby panda',
  'baby turtle',
  'baby giraffe',
  'baby hippo',
  'baby sloth',
  'baby human' ]
=================
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
     for (let i = 0; i < arr.length; i++) {
          number = arr[i];
//console.log(i)
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
             j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
=================apply an array to another array=================

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Checkpoint 1 solutions:
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}
console.log(declineEverything(veggies));
//Outcome: 

Output:
No broccoli please. I will have pizza with extra cheese.
No spinach please. I will have pizza with extra cheese.
No cauliflower please. I will have pizza with extra cheese.
No broccoflower please. I will have pizza with extra cheese.
undefined

// As a function declaration:
function declineEverything(arr) {
      arr.forEach(politelyDecline)
}


// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}


// Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}

// Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<arr.length; i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
 }
}
Ok, I guess I will eat some broccoli.
Ok, I guess I will eat some spinach.
Ok, I guess I will eat some cauliflower.
Ok, I guess I will eat some broccoflower.
undefined
==================Square the array above============
const numbers = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => num * num

// Write your code here:
const squareNums = arr => arr.map(toSquare);
console.log(squareNums(numbers));

=============to Upper case an array============
// Write your code here:
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

console.log(shoutGreetings(greetings))
// outcome [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

================sorted in descending/desending order==============
takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

  const sortYears = arr => arr.sort((x,y) => y-x);

console.log(sortYears(years)); //outcome: [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

===================Find a common/similar items in an array=============
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

const justCoolStuff = (coolStuff, myStuff) => coolStuff.filter(item => myStuff.includes(item));

console.log(justCoolStuff(coolStuff, myStuff)); //outcome: [ 'skateboards', 'fruit-by-the-foot', 'my room' ]

================= scanning to find an incuded item=========
// Write your code here:
const dinner = [
      { name: "hamburger", source: "meat" },
      { name: "cheese", source: "dairy" },
      { name: "ketchup", source: "plant" },
      { name: "bun", source: "plant" },
      { name: "dessert twinkies", source: "unknown" },
    ];
    
    const isTheDinnerVegan = arr => arr.every(food => food.source==='plant')
    
console.log(isTheDinnerVegan(dinner)); //outcome: false
    
=====================find the item's index in an array, otherwise display -1==============
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

const findMyKeys = arr => arr.findIndex(item => item === 'keys')
console.log(findMyKeys(randomStuff)); //outcome: -1

=================
const dogFactory = (name, breed, weight) => {
      return {
        name: name,
        breed: breed,
        weight: weight,
      };
};
console.log(dogFactory('Joe', 'Pug', 27)) //outcome: { name: 'Joe', breed: 'Pug', weight: 27 }

============== array with SETTER & GETTER ============
// Write your code here:
const dogFactory = (name, breed, weight) => {
      return {
      _name: name,
      _breed: breed,
      _weight: weight,

      get name() {
      return this._name;
      },
      set name(newName) {
      this._name = newName;
      },

      get breed() {
      return this._breed;
      },
      set breed(newBreed) {
      this._breed = newBreed;
      },

      get weight() {
      return this._weight;
      },
      set weight(newWeight) {
      this._weight = newWeight;
      },

      bark(){
      return 'ruff! ruff!'
      },
      eatTooManyTreats(){
      return this._weight ++;
      },

}
};
console.log(dogFactory('Joe', 'Pug', 27))
==============Simple Factorial function=====

const factorial = n => {
      let result = 1;
      
      for (let i=n; i>0; i--) {
        result *= i;
      }
      return result;
};
console.log(factorial(6)); // outcome 720
=============//Find a charecter in a string then find the space between them & return the index=========
onst subLength = (str, char) => {
      let charCount = 0;
      let len = -1;
      
      for (let i=0; i<str.length; i++) {
        if (str[i] == char) {
          charCount++;
          if (charCount > 2) {
            return 0;
          }
          if (len == -1) {
            len = i;
          } else {
            len = i - len + 1
          }
        }
      }
      if (charCount < 2) {
        return 0;
      }
    
      return len;
};
console.log(subLength('Saturday', 'a')); // returns 6)
============= //Dsplaying string array with the word AND between that last two words==========
const groceries = list => {
      let listString = ''
    
      for (let i=0; i<list.length; i++) {
        listString += list[i].item;
        if (i < list.length - 2) {
          listString += ', ';
        } else if (i == list.length - 2){
          listString += ' and ';
        }
      }
      
      return listString;
};
console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] )); //outcome: Carrots, Hummus, Pesto and Rigatoni
====================