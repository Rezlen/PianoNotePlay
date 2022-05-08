JAVASCRIPT AND THE DOM
Add Click Interactivity
You can add interactivity to DOM elements by assigning a function to run based on an event. Events can include anything from a click to a user mousing over an element. We will learn more about events in the upcoming DOM Events with JavaScript lesson. For now, let’s take a look at how to modify an element when a click event happens.

The .onclick property allows you to assign a function to run on when a click event happens on an element:

let element = document.querySelector('button');
 
element.onclick = function() { 
  element.style.backgroundColor = 'blue' 
};
You can also assign the .onclick property to a function by name:

let element = document.querySelector('button');
 
function turnBlue() {
   element.style.backgroundColor = 'blue';
}
 
element.onclick = turnBlue;
In the above example code, when the <button> element detects a click event, the backgroundColor will change to 'blue'
====================
p {
    font-family: Arial;
  }
  
  h1 {
    color: maroon;
  }
  
  h2.destination {
    font-family: cursive;
  }
  
  h5 {
    color: rebeccapurple !important;
  }
  
  h5,
  p {
    font-family: Georgia;
  }
  
  .title {
    color: teal;
  }
  
  .uppercase {
    text-transform: uppercase;
  }
  .publish-time {
    color: gray;
  }
  
  .cursive {
    font-family: cursive;
  }
  
  .capitalize {
    text-transform: capitalize;
  }
  
  .description h5 {
    color: teal;
  }
  ====================
  <html>	
	<head>
		<title>The title</title>
	</head>

	<body>
		<h1>The heading</h1>
		<div>
			<p>
				A description
			</p>
			<button>
				Blue button
			</button>
		</div>
	</body>
  <script src="./main.js"></script>
</html>
============================
let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';
}
element.onclick = turnButtonRed;
===================