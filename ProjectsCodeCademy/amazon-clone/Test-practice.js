

var my_list = [1, 2, 3, 4];

function find_total(my_list) {
  let total = 0;
  for (let i = 0; i < my_list.length; i++) {
    total += my_list[i];
  }
  return total;
};

console.log(find_total(my_list));
//------

console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));
// ------------------
function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
// --------------
for (let count = 0; count <= 5; count++){

//  count %2==0? console.log(`${count} is even`) : console.log(`${count} is odd`);
 count % 2 == 0 ? console.log([count].reduce((a, b) => a + b, 0)) : console.log(`${count} is odd`);
};

// ------------------
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < array.length; i++){
  if(array[i] % 2 == 0){
    console.log(array[i]);
  }
}

