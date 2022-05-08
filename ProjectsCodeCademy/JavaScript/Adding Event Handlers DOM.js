DOM EVENTS WITH JAVASCRIPT
Adding Event Handlers
We looked at registering event handlers using the .addEventListener() method, but there is also another way!

Event Handlers can also be registered by setting an .onevent property on a DOM element (event target). 
The pattern for registering a specific event is to append an element with .on followed by the lowercased event type name. 
For instance, if we want to register a click event with this pattern, we would write:

eventTarget.onclick = eventHandlerFunction;
Here, we give the DOM element eventTarget the .onclick property and set its value as the event handler function eventHandlerFunction.

It’s important to know that this .onevent property and .addEventListener() will both register event listeners. 
With .onevent, it allows for one event handler function to be attached to the event target. However, with the .addEventListener() method , we can add multiple event handler functions. 
In the later exercises, we’ll be using the .addEventListener() syntax, but we wanted to also introduce the .onevent syntax because both are widely used.

=======================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
</head>

<body>
  <section id='container'>
  <button id='view-button'>View</button>
  <img src="https://content.codecademy.com/courses/javascript-dom-events/Margot_medal.svg" id='codey'>
  <button id='close-button'>Close</button>
</section>
  
  <script  src="main.js"></script>

</body>
</html>

========================
body{
  margin: 0;
  padding: 0;
  font-family: 'Nunito';
}
#container{
  background: #141c3a;
  margin: 0;
  display: block;
  float: left;
  width: 100vw;
  height: 100vh;
}
#view-button{
  width: 380px;
  height: 50px;
  font-size: 24px;
  border: none;
  display: block;
  background-color: #6df0c2;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  font-family: 'Nunito';
}
#codey{
  display: none;
  width: 200px;
  margin: 0 auto;
}
#close-button{
  width: 380px;
  height: 50px;
  font-size: 24px;
  border: none;
  display: none;
  background-color: #fd4d3f;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
  font-family: 'Nunito';
}
====================
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
function textChange(){
  view.innerHTML = 'Hello, World!';
}
function textReturn(){
  view.innerHTML = 'View';
}
view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);
========================
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  //add your code here
button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);

=================



