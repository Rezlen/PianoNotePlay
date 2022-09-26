

var my_list = [1, 2, 3, 4];

const find_total = (my_list) => {
  let total = 0;
  for (let i = 0; i < my_list.length; i++) {
    total += my_list[i];
  }
  return total;
};
console.log(find_total(my_list));


console.log([1,2,3,4].reduce((a,b) => a + b, 0));