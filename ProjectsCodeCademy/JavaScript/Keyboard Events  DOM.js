<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div id='container'>
    <h1>Ball Bounce</h1>
    <p>Let's dribble the ball on the platform using any key on your keyboard. Hold a key down to lift the ball, then release the key to drop the ball.</p>
    <!--<button id='button'>Reset</button>-->
    <div id='float-circle'></div> 
    <div id='platform'></div>
    <div id='floor'></div>
  </div>
  
  <script  src="main.js"></script>

</body>
</html>

==================
body{
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
#container{
  background: #6400e4;
  width: 100vw;
  height: 100vh;
  margin: 0;
  float: left;
}
h1{
  font-size: 30px;
  width: 50%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 15px;
  color: #141c3a;
}
p{
  font-size: 18px;
  width: 60%;
  text-align: center;
  font-weight: 400;
  margin: 0 auto;
  margin-bottom: 40px;
  color: white;
}
button{
  width: 150px;
  height: 40px;
  display: block;
  margin: 0 auto;
  border: none;
  font-size: 18px;
  color: white;
  background: #141c3a;
}
#float-circle{
  width: 100px;
  height: 100px;
  background: #fd4d3f;
  border-radius: 100px;
  bottom: 50px;
  left: 50%;
  position: absolute;
  transition-property: bottom;
  transition-duration: 2s;
}
#floor{
  width: 100%;
  height: 30px;
  background: #6df0c2;
  bottom: 0;
  position: absolute;
}
#platform{
  width: 100px;
  height: 50px;
  background: #efd9ca;
  bottom: 0;
  position: absolute;
  left: 50%;
  right: 50%;
}
===================
let ball = document.getElementById('float-circle');

// Write your code below
function up(){
  ball.style.bottom = '250px';//First, make a function named up() that will raise the .bottom position of the ball to '250px'.
}
function down(){
  ball.style.bottom = '50px';//Next, make a function named down() that will lower the .bottom position of the ball to '50px'
}

document.addEventListener('keydown', up); //Create an event handler property that runs the up() function when a keydown event fires on the document object, or anywhere on the DOM, as the event target.

document.addEventListener('keyup', down);


