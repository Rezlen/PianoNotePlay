DOM EVENTS WITH JAVASCRIPT
Event Handler Registration
You’re doing great! Now it’s time to dive into using event handler functions to create interactivity.

Using the .addEventListener() method, we can have a DOM element listen for a specific event and execute a block of code when the event is detected. The DOM element that listens for an event is called the event target and the block of code that runs when the event happens is called the event handler.

Let’s take a look at the code below:

let eventTarget = document.getElementById('targetElement');
 
eventTarget.addEventListener('click', function() {
  // this block of code will run when click event happens on eventTarget element
});
Let’s break this down!

We selected our event target from the DOM using document.getElementById('targetElement').
We used the .addEventListener() method on the eventTarget DOM element.
The .addEventListener() method takes two arguments: an event name in string format and an event handler function. We will learn about different values we can use as event names in a later lesson.
In this example, we used the 'click' event, which fires when the user clicks on eventTarget.
The code block in the event handler function will execute when the 'click' event is detected.
Instead of using an anonymous function as the event handler, it’s best practice to create a named event handler function. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:

function eventHandlerFunction() {
  // this block of code will run when click event happens
}
 
eventTarget.addEventListener('click', eventHandlerFunction);
The named function eventHandlerFunction is passed as the second argument of the .addEventListener() method instead of defining an anonymous function within the method!
=================
<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
</head>

<body>
  <section id='container'>
    <p id='info'>JavaScript is the programming language of the web. You can use it to add dynamic behavior and store information.
  </p>
  <p id='more-info'>JavaScript can also handle requests and responses on a website. It's a great language to master for front-end and back-end web development.
  </p>  
    <button id='read-more'>Read More</button>
  </section>
  <script  src="main.js"></script>

</body>
</html>
=====================
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
#read-more{
  width: 200px;
  height: 50px;
  font-size: 24px;
  border: none;
  display: block;
  background-color: #6df0c2;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
#info, #more-info{
  display: block;
  margin: 0 auto;
  width: 350px;
  height: 120px;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  display: block;
  background-color: #fd4d3f;
  color: white;
  margin-top: 20px;
}
#more-info{
  display: none;
}
==========================
let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
function showInfo() {
  moreInfo.style.display = 'block';
}
  readMore.addEventListener('click', showInfo);
  ===============
  