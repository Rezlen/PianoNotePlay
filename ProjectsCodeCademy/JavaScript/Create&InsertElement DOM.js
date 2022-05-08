JAVASCRIPT AND THE DOM
Create and Insert Elements
Just as the DOM allows scripts to modify existing elements, it also allows for the creation of new ones.

The .createElement() method creates a new element based on the specified tag name passed into it as an argument. However, it does not append it to the document. It creates an empty element with no inner HTML.

let paragraph = document.createElement('p');
In the example code above, the .createElement() method takes 'p' as its argument which creates an empty <p> element and stores it as the paragraph variable.

We can assign values to the properties of the newly created element like how we’ve done previously with existing elements.

paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';
Above, we use the .id property to assign 'info' as ID and the .innerHTML property to set 'The text inside the paragraph' as the content of the <p> element.

In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM, referred to as the parent element. We call this process appending. The .appendChild() method will add a child element as the parent element’s last child node. The following code appends the <p> element stored in the paragraph variable to the document body.

document.body.appendChild(paragraph);
The .appendChild() method does not replace the content inside of the parent, in this case, body. Rather, it appends the new element as the last child of that parent.

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
   </ul>
 </div>
</body>

  <script src="./main.js"></script>
</html>
=========================
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
=========================
let newAttraction = document.createElement('li');
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';
document.getElementById('italy-attractions').appendChild(newAttraction);
====