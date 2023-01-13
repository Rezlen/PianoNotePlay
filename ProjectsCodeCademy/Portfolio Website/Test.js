// {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}
// <script>
//   $(function() {
//     $(".toggle").on("click", function(){
//       if($(".nav-item").hasClass("active")){
//         $(".nav-item").removeClass("active");
//       } else {
//         $(".nav-item").addClass("active");
//       }
//     })
  
//   })
// </script>;
// JS conditional e.g ////////////////////////////////
let num1 = 2;
let num2 = 4;
let result = num1 > num2;

if (result)
  console.log("Num 1 is greater than num2");
  else {
    console.log("Num2 is greater");
  }

// JS Function e.g ////////////////////////////////
function hello() {
  console.log("Hello js function")
}
hello();
// simple printing in JS
console.log(3+4);

// JS Function e.g ////////////////////////////////
function greet(name) {
  console.log("Hello "+ name)
}
greet("Clair");

// JS SCOPES (Local/Global) e.g ////////////////////////////////
// Global Scopes: veriable outside the function. LOCAL; inside function
var num=2 // global scope
function call() {
  // var num=5 local scoper
  return num;
}
console.log(call());

// Arrays & Iteration 8 methods: (forEach, map, filter, reduce, some, every, find, find Index) e.g//////////

// forEach Iteration
[1, 2, 3].forEach(function(item, index){
  console.log("no. is", item, "&", index, "is its index")
});

// MAP Iteration
const three = [1,2,3];
const doubled = three.map(function(item){
  return item*2;
});
console.log("MAP Iteration:", doubled);

// Filter Iteration
const ints = [1,2,3]
const evens = ints.filter(function(item){
  return item % 2 === 0;
});
console.log("Filter Iteration:", evens);

// REDUCE Iteration
const sum = [1,2,3].reduce(function(result, item){
  return result + item;
}, 0);
console.log("REDUCE Iteration:", sum);

// Some Iteration
const HasNegativeNumber = [0, 1, 2, -1, 65].some(function(item) {
  return item < 1  
});
console.log("Some Iteration:", HasNegativeNumber)

//  Every Iteration
const AllPosetiveNo = [-1, -3, 3, 4].every(function(item) {
  return item > 1;
});
console.log("Every Iteration:", AllPosetiveNo); // with VERY, all in array must meet the condition (Here is being bigger than 1)

//  Find Iteration
const objects = [{id: "a"}, {id: "b"}, {id: "c"}];
const found = objects.find(function(item){
  return item.id === "b";
})
console.log("Find Iteration",found)

//  FindIndex Iteration
const objects2 = [{id: "a"}, {id: "b"}, {id: "c"}];
const found2 = objects2.findIndex(function(item){
  return item.id === "b";  
});
console.log("FindIndex Iteration", found2)