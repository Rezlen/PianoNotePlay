

// ----------------------------------------------------
//           JavaScript Array Methods: Reduce
// ----------------------------------------------------

// Array 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// (challenge 1; Total of Array)
var total = array.reduce((cur, item) => {
  cur += item;
  return cur;
}, 0);
console.log(`Sum of Array: ${total }`);

// (challenge 2): odd
var odds = array.reduce((cur, item) => {
  if (item % 2 == 1) {
    cur += item;
  }
  return cur;
}, 0);
console.log(`Sum of Odds: ${odds}`);

// (challenge 3): even
var evens = array.reduce((cur, item) => {
  if (item % 2 == 0) {
    cur += item;
  }
  return cur;
}, 0);

console.log(`Sum of Evens: ${evens}`);

// l(Challenge 4): total- odds)) 
console.log('Sum - odds:', total - odds);

// l(Challenge 4): total+ evens)) 
console.log('Sum + evens:', total + evens);


// 1- total
// 2- total Odds
// 3- Total Evens
// 4- total-Odds
// 5- Total+evens

// ----------------------------------------------------
//           JavaScript Array Methods: Reduce
// ----------------------------------------------------

var my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function find_Total(my_list) {
  let total = 0;
  for (let i = 0; i < my_list.length; i++) {
    total += my_list[i];
  }
  return total;
};

console.log(`Sum Of My Array by I formula`, find_Total(my_list));
// //------

// console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));
// // ------------------
// function isEven(n) {
//    return n % 2 == 0;
// }

// function isOdd(n) {
//    return Math.abs(n % 2) == 1;
// }

// // --------------
// for (let count = 0; count <= 5; count++){

// //  count %2==0? console.log(`${count} is even`) : console.log(`${count} is odd`);
//  count % 2 == 0 ? console.log([count].reduce((a, b) => a + b, 0)) : console.log(`${count} is odd`);
// };


// // ----------------------------------------------------------------------------------
var NewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const totalArray = () => 
  NewArray.reduce((cur, item) => {
    cur += item;
    return cur;
  }, 0);

console.log(`SumOfArray(ExportedFunction):`, totalArray());


// /////////////////////////

// var total = array.reduce((cur, item) => {
//   cur += item;
//   console.log(`Sum-of-Array: ${total}`);
//   if (item % 2 == 1) {
//     cur += item;
//   }
//   return cur;
// }, 0);
// console.log(`Sum of Array: ${total}`);

// ////////////////Export e.g.

// export const initialState = {
//   basket: [],
//   user: null,
// };

// // Selector
// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);