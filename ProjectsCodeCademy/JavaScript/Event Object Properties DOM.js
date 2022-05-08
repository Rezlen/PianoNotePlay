﻿DOM EVENTS WITH JAVASCRIPT
Event Object Properties
JavaScript stores events as Event objects with their related data and functionalities as properties and methods. When an event is triggered, the event object can be passed as an argument to the event handler function.

function eventHandlerFunction(event){
   console.log(event.timeStamp);
}
 
eventTarget.addEventListener('click', eventHandlerFunction);
In the example above, when the 'click' event is triggered on the eventTarget, the eventHandlerFunction receives event, the Event object, which has information related to the 'click' event. Then, we log the time it took for the event to be triggered since the document was loaded by accessing the .timeStamp property of the event object.

There are pre-determined properties associated with event objects. You can call these properties to see information about the event, for example:

the .target property to reference the element that the event is registered to.
the .type property to access the name of the event.
the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered.
==================
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
</head>

<body>
  <p id='text'>Share this cute puppy photo with your friends!</p>
  <img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f6f7c47a2be772ea983ee9215ab08d8&auto=format&fit=crop&w=678&q=80" alt="Cute Puppy">
  <div class='share-container'>
  <section id='social-media'>
    <button id="email" class='social-button'><svg style="width:44px;height:44px" viewBox="0 0 24 24">
      <path fill="#141c3a" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
  </svg></button>
    <button id="facebook" class='social-button'>
      <svg style="width:44px;height:44px" viewBox="0 0 24 24">
      <path fill="#0069ff" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
  </svg>
    </button>
    <button id="twitter" class='social-button'>
      <svg style="width:44px;height:44px" viewBox="0 0 24 24">
      <path fill="#00a9ff" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
  </svg>
    </button>
    <button id="pinterest" class='social-button'><svg style="width:44px;height:44px" viewBox="0 0 24 24">
      <path fill="#fd4d3f" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H9.29C9.69,20.33 10.19,19.38 10.39,18.64L11.05,16.34C11.36,16.95 12.28,17.45 13.22,17.45C16.17,17.45 18.22,14.78 18.22,11.45C18.22,8.28 15.64,5.89 12.3,5.89C8.14,5.89 5.97,8.67 5.97,11.72C5.97,13.14 6.69,14.89 7.91,15.45C8.08,15.56 8.19,15.5 8.19,15.34L8.47,14.28C8.5,14.14 8.5,14.06 8.41,14C7.97,13.45 7.69,12.61 7.69,11.78C7.69,9.64 9.3,7.61 12.03,7.61C14.42,7.61 16.08,9.19 16.08,11.5C16.08,14.11 14.75,15.95 13.03,15.95C12.05,15.95 11.39,15.11 11.55,14.17C11.83,13.03 12.39,11.83 12.39,11C12.39,10.22 12,9.61 11.16,9.61C10.22,9.61 9.39,10.61 9.39,11.95C9.39,12.83 9.66,13.39 9.66,13.39L8.55,18.17C8.39,19 8.47,20.25 8.55,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />
  </svg></button>
</section>
  <button id='share-button'>Share</button>
</div>
  
  <script  src="main.js"></script>

</body>
</html>

========================
body{
  margin: 0;
  padding: 0;
  background-color: #141c3a;
  color: white;
}
p{
  width: 400px;
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Nunito', sans-serif;
}
img{
  width: 250px;
  display: block;
  margin: 0 auto;
}
.share-container{
  width: 300px;
  height: 75px;
  display: block;
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 50%);
}
#share-button{
  width: 300px;
  height: 75px;
  display: block;
  margin: 0 auto;
  border: none;
  font-size: 24px;
  background-color: #ffcd3f;
  letter-spacing: 1px;
  color: #141c3a;
  border-radius: 30px;
  position: relative;
  top: -75px;
  font-family: 'Nunito', sans-serif;
}
#social-media{
  width: 300px;
  height: 75px;
  display: block;
  margin: 0 auto;
  border: none;
  background-color: white;
  border-radius: 30px;
  position: relative;
}
.social-button{
  border: none;
  background: transparent;
  padding: 0px;
  margin: 15px 14px;
}
=====================
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  // add a statement inside the sharePhoto() function that will change the .display property of the event .target to 'none'.
  event.target.style.display = 'none';
  //will modify the text element to state the number of milliseconds from the DOM loading to the event firing.
  text.innerHTML = 'Share this cute puppy photo with your friends!' + event.timeStamp + 'mili second';
}
//Now, to create functionality for the event object, assign the sharePhoto function to a click event on the share element.
share.addEventListener('click', sharePhoto);
