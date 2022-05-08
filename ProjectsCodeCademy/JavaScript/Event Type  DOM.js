1.
We made a really cool color generator to help people find different colors — try it out! Uh oh, it seems to be broken. We need you to use your new knowledge to fix the website.

Complete the colorChange() function, which will be used as an event handler function, to randomly change the colors of the buttons when specific events are fired on them.

First, add the following variable to the event handler function:

let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';

Stuck? Get a hint
2.
Add a statement that changes the background color of the event target and set it equal to randomColor.


Stuck? Get a hint
3.
There are two elements that should change color on this web page. First, create an event handler property on the button element that fires when it’s clicked. Use colorChange as the event handler function.

Then run your code and fire the click event.


Stuck? Get a hint
4.
Next, create an event handler property on the mysteryButton element. This property needs an event that fires when you rotate the mouse wheel or slide down on the mousepad. Use the MDN Events Reference page to find the correct event type. Assign the same colorChange event handler function to the event handler property.

Then run your code and fire the event.
========================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
</head>

<body>
  <section id='container'>
    <img src='http://pngimg.com/uploads/rainbow/rainbow_PNG5580.png'/>
    <h1>Random Color Generator</h1>
    <p>Find your new favorite color!</p>
    <button id='color-button'>Pick a Color</button>
    <button id='next-button'>Mystery Color</button>
  </section>
 <script  src="main.js"></script>

</body>
</html>

======================
body{
    margin: 0;
    padding: 0;
    font-family: 'Nunito';
  }
  img{
    width: 200px;
    display: block;
    margin: 0 auto;
    padding-top: 10px;
    margin-bottom: 30px;
  }
  #container{
    margin: 0;
    width: 100vw;
    height: 600px;
    background: #fd4d3f;
    margin: 0 auto;
  }
  h1{
    font-size: 30px;
    width: 450px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 100px;
    color: #141c3a;
  }
  p{
    font-size: 20px;
    width: 400px;
    text-align: center;
    font-weight: 400;
    margin: 0 auto;
    margin-bottom: 30px;
    color: white;
  }
  #color-button{
    width: 350px;
    height: 100px;
    border: none;
    font-size: 24px;
    background-color: #141c3a;
    color: white;
    display: block;
    margin: 0 auto;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 5px;
    font-family: 'Nunito';
  
  }
  #next-button{
    width: 350px;
    height: 100px;
    border: none;
    font-size: 24px;
    background-color: #141c3a;
    color: white;
    display: block;
    margin: 0 auto;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Nunito';
  }
  =========================
  // This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')'; //randomly change the colors of the buttons when specific events are fired on them.
  //Add a statement that changes the background color of the event target and set it equal to randomColor.
  event.target.style.backgroundColor = randomColor;
}
//There are two elements that should change color on this web page. First, create an event handler property on the button element that fires when it’s clicked. Use colorChange as the event handler function.
button.addEventListener('click', colorChange);
//Next, create an event handler property on the mysteryButton element. This property needs an event that fires when you rotate the mouse wheel or slide down on the mousepad. Use the MDN Events Reference page to find the correct event type. Assign the same colorChange event handler function to the event handler property.
mysteryButton.addEventListener('wheel', colorChange); 