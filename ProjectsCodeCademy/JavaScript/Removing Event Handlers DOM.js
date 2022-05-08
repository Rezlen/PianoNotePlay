DOM EVENTS WITH JAVASCRIPT
Removing Event Handlers
The .removeEventListener() method is used to reverse the .addEventListener() method. This method stops the event target from “listening” for an event to fire when it no longer needs to. .removeEventListener() also takes two arguments:

The event type as a string
The event handler function
Check out the syntax of a .removeEventListener() method with a click event:

eventTarget.removeEventListener('click', eventHandlerFunction);
Because there can be multiple event handler functions associated with a particular event, .removeEventListener() needs both the exact event type name and the name of the event handler you want to remove. If .addEventListener() was provided an anonymous function, then that event listener cannot be removed.
===================
<!DOCTYPE html>
<html>
<head>
	<title>Daily Fortune</title>
	<meta charset="UTF-8">
	<link href="style.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
</head>
<body>
	<h1>Click to see your daily fortune!</h1>
	<p id="fortune"></p>
	<div id="buttonContainer">
		<button id="fortuneButton">Let me see!</button>
	</div>
	<script src="main.js"></script>
</body>
</html>
=================
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





======================