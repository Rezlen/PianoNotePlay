Remove an Element
In addition to modifying or creating an element from scratch, the DOM also allows for the removal of an element. The .removeChild() method removes a specified child from a parent.

let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);
In the above example code, the .querySelector() method returns the first paragraph in the document. Then, the paragraph element is passed as an argument of the .removeChild() method chained to the parent of the paragraph—document.body. This removes the first paragraph from the document body.

If you want to hide an element rather than completely deleting it, the .hidden property allows you to hide it by setting the property as true or false:

document.getElementById('sign').hidden = true;
The code above did not remove the element with ID of 'sign' from the DOM but rather, hid it.
==================
<!DOCTYPE html>
<html>

<head>
  <title>Vacation World</title>
  <link href="style.css" type="text/css" rel="stylesheet">
</head>

<body>
 <img src="https://content.codecademy.com/courses/freelance-1/unit-2/explorer.jpeg" />
 <h1 class="title cursive capitalize" >Vacationing in Florence, Italy</h1>
 <h5>By: Ezio Auditore</h5>
 <h6 class="publish-time">Published: 2 Days Ago</h6>
 
 <p>Florence is full of fascinating places. Planning the perfect experience 'Di Firenze' involves researching reputable travel blogs, choosing the best season to travel, and being open to all that Florence has to offer.</p>
 <h2 class="destination">Florence's History</h2>
 <div class="description">A city-size shrine to the Renaissance, Florence offers frescoes, sculptures, churches, palaces, and other monuments from the richest cultural flowering the world has known. Names from its dazzling historical pastDante, Michelangelo, Galileo, Machiavelliare some of the most resonant of the medieval age. <a href="http://travel.nationalgeographic.com/travel/city-guides/florence-italy/" target="_blank">Learn More</a>.
   <h5>Top Attractions</h5>
   <ul id="italy-attractions">
     <li>Museums</li>
     <li>Bike Tours</li>
     <li>Historical Monuments</li>
     <li id="vespa">Rent a Vespa</li>
   </ul>
 </div>
</body>
  <script src="./main.js"></script>
</html>

===========================
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
=======================
let elementToRemove = document.getElementById('vespa');
document.getElementById('italy-attractions').removeChild(elementToRemove);
======================