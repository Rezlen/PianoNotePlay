LOOPS
The For Loop
Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:

an initialization starts the loop and can also be used to declare the iterator variable.
a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
an iteration statement is used to update the iterator variable on each loop.
The for loop syntax looks like this:

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
In this example, the output would be the following:

0
1
2
3
Let’s break down the example:

The initialization is let counter = 0, so the loop will start counting at 0.
The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.
This for loop makes it possible to write 0, 1, 2, and 3 programmatically.

//loop
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }
  for (let counter = 0; counter <= 3; counter++){
    console.log(counter);
  }
  =================Looping through Arrays
  for ( let i= 0; i<vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i]);
  }
  ======================
  // Write your code below
const bobsFollowers= ['f1','f2','f3','f4'];
const tinasFollowers= ['f11','f2','f3'];
const mutualFollowers= [];
for (let i=0; i<bobsFollowers.length; i++) {
  for (let j=0; j<tinasFollowers.length; j++) {
    if ( bobsFollowers[i]===tinasFollowers[j]) {
      console.log('Both have the same frined: ' + tinasFollowers[j]);
mutualFollowers.unshift(tinasFollowers[j]);
    }
  }
}
======================
So you may be wondering when to use a while loop! The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run. Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }
   
  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }
  ====================
  const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard= '';
 while (currentCard='spade') {
   currentCard = cards[Math.floor(Math.random() * 4)];

 console.log(currentCard);
  };
  ===============
  const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard= '';
 while (currentCard!=='spade') {
   currentCard = cards[Math.floor(Math.random() * 4)];
 console.log(currentCard);
  };
  ==============

  A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);
In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it. First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops when the condition evaluates to false.

Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
===============
Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
===============
// Write your code below
let cupsOfSugarNeeded = 3;
let cupsAdded = 0; 

do { cupsAdded++
console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);
=====================
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i=0; i<rapperArray.length; i++){
    console.log(rapperArray[i]);

  if (rapperArray[i] ==='Notorious B.I.G.'){
  break; 
  }
}
console.log( "And if you don't know, now you know.");
===============
Whale language PromiseRejectionEvent

const input='Rez';
const vowels =['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for (let i=0; i<input.length; i++) { //this will count the number of letters in the array
  if (input[i]==='e') {
    resultArray.push(input[i]); // adding the letter E twise if it exist in outer array
  }
   if (input[i]==='u') {
    resultArray.push(input[i]); // adding the letter U twise if it exist in outer array
  }
  console.log('i is: ' + i); //this count & number the ltters inside the INPUT array
  for (let j=0; j<vowels.length; j++) {
    if (input[i]===vowels[j]) {
      console.log('j is ' + j);
      resultArray.push(input[i]); // adding teh letter that exsis simillary, to the resultArray
    }
  }
}
console.log(resultArray);
const resultString = resultArray.join('').toUpperCase(); // just to join the letters & make them UPPERCASE
console.log(resultString);
====================

For..Of Loop

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
"for" loop is:
for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}
"for of" loop is:
for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}
============
for..Of loop for String
const username = 'joe';
 
for (const char of username) {
  console.log(char);
}
==========
You might now be wondering, why use a for loop at all if a for...of loop is so much simpler? Well, the for...of loop is not a complete replacement for the for loop. Take a look at the following code snippet:

const nums = [1, 2, 3];
 
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}
 
console.log('Time is up!');
================
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
 
for (const bird of strangeBirds) {
  if (bird === 'Basan'){ 
    break; 
  }
  console.log(bird);
}

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
 
for (const bird of strangeBirds) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird);
}
===============