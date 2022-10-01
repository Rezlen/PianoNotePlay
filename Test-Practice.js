


// ----------------------------------------------------
//           JavaScript Array Methods: Reduce
// ----------------------------------------------------

// Array 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// (challenge 1; Total of Array)
var total = array.reduce((cur, item, i) => {
  cur += item;
  return cur;
}, 0);
console.log(total);

// (challenge 2): odd
var odds = array.reduce((cur, item, i) => {
  if (item % 2 == 1) {
    cur += item;
  }
  return cur;
}, 0);
console.log(odds);

// (challenge 3): even
var evens = array.reduce((cur, item, i) => {
  if (item % 2 == 0) {
    cur += item;
  }
  return cur;
}, 0);

console.log(evens);

// l(Challenge 4): total- odds)) 
console.log('total - odds:', total - odds);

// l(Challenge 4): total+ evens)) 
console.log('total + evens:', total + evens);


// 1- total
// 2- total Odds
// 3- Total Evens
// 4- total-Odds
// 5- Total+evens

// var my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function find_Total(my_list) {
//   let total = 0;
//   for (let i = 0; i < my_list.length; i++) {
//     total += my_list[i];
//   }
//   return total;
// };

// console.log(find_Total(my_list));
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

// // // ------------------

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function find_total(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 == 0) {
//       total += array[i];
//     } else {
//       total -= array[i];
//     }
//   }
//   return total;
// };

// console.log(find_total(array));
// // console.log(total += array[i]);
// // ----------------------------------------------------------------------------------
