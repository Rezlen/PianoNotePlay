<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
</head>

<body>
  <section id='container'>
    <ul>
        <li id='list-item-one'>The mouse must pass over to increase the box width</li>
        <li id='list-item-two'>Release the mouse button to change the color</li>
        <li id='list-item-three'>The mouse must leave the box to change the text</li>
        <li id='list-item-four'>Click the mouse to make the fifth box appear</li>
        <li id='list-item-five'>You found me!</li>
        <button id='reset-button'>Reset</button>
    </ul>
  </section>
  
  <script  src="main.js"></script>
</body>
</html>

==================
body{
  margin: 0;
  padding: 0;
  background: green;
  font-family: 'Nunito';
}
#container{
  background: #efd9ca;
  width: 100%;
  height: 100vh;
  margin: 0;
  float: left;
}
li, #list-item-one, #list-item-two , #list-item-three, #list-item-four, #list-item-five{
  width: 400px;
  height: 17px;
  list-style: none;
  background-color: #141c3a;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 16px;
  padding: 17px 0px;
  color: #efd9ca;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Nunito';
}
#list-item-five{
  display: none;
}
#reset-button{
  width: 400px;
  height: 50px;
  background: #fd4d3c;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  font-size: 16px;
  padding: 17px 0px;
  color: #141c3a;
  font-weight: bold;
  display: block;
  cursor: pointer;
  font-family: 'Nunito';
}
=================
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
function increaseWidth(){
  itemOne.style.width = '500px';
};
itemOne.addEventListener('mouseover', increaseWidth);//First, create a function called increaseWidth() that changes the .width of itemOne to any size greater than '400px'.

function changeBackground(){
  itemTwo.style.backgroundColor = ''; //Now, create an event handler for itemOne that will trigger the increaseWidth() function when the mouse hovers on it.
};
itemTwo.addEventListener('mouseup', changeBackground);//Next, create a function called changeBackground() that changes the .backgroundColor of itemTwo

function changeText(){
  itemThree.innerHTML = 'The mouse has left the element';
};//Let’s use the changeBackground() function we just created as an event handler for itemTwo that will be triggered when the mouse is released over the element!
itemThree.addEvenyle.addEventListener('mouseout', changeText); //Now, create a function called changeText() that changes the text of itemThree to 'The mouse has left the element'.

function showItem(){
  itemFive.style.display = 'block'; //Finally, let’s create a function called showItem() that makes the itemFive element appear by changing the .display style property to 'block'.
};
itemFour.addEventListener('mousedown', showItem); //Now, create an event handler for itemFour that triggers the showItem() function when the mouse is pressed down on the element.


