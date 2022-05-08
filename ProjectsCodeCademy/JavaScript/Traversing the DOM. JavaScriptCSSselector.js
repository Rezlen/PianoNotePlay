

Javascript and the DOM: Traversing the DOMNarrative and Instructions
Learn
JAVASCRIPT AND THE DOM
Traversing the DOM
Let’s recap the parent and children relationship in the DOM hierarchy. A parent node is any node that is a direct ancestor of another node.
 A child node is a direct descendant of another node, called the parent node.

These relationships follow the nested structure of the HTML code. Elements nested within one HTML element are children of that parent element.

Each element has a .parentNode and .children property. The .parentNode property returns the parent of the specified element in the DOM hierarchy. 
Note that the document element is the root node so its .parentNode property will return null. The .children property returns an array of the specified element’s children. 
If the element does not have any children, it will return null.

<ul id='groceries'>
  <li id='must-have'>Toilet Paper</li>
  <li>Apples</li>
  <li>Chocolate</li>
  <li>Dumplings</li>
</ul>
In the HTML code above, we have an <ul> element with the ID of groceries with four <li> elements inside.

let parentElement = document.getElementById('must-have').parentNode; // returns <ul> element
let childElements = document.getElementById('groceries').children; // returns an array of <li> elements
Here, the parentElement variable stores the .parentNode of the <li> element with the ID of must-have, which will be the <ul> element with the ID of groceries. The childElements variable is set to the children of the <ul> element with the ID of groceries, which will be an array of four <li> elements.
==================
<body><h1>The Brown Bear</h1>
  <div id="introduction">
    <h2>About Brown Bears</h2>
    <p>The brown bear (<em>Ursus arctos</em>) is native to parts of northern Eurasia and North America. Its conservation status is currently <strong>Least Concern</strong>.<br /><br /> There are many subspecies within the brown bear species, including the Atlas bear and the Himalayan brown bear.</p>
    <h3>Species</h3>
    <ul>
      <li>Arctos</li>
      <li>Collarus</li>
      <li>Horribilis</li>
      <li>Nelsoni (extinct)</li>
    </ul>
    <h3>Features</h3>
    <p>Brown bears are not always completely brown. Some can be reddish or yellowish. They have very large, curved claws and huge paws. Male brown bears are often 30% larger than female brown bears. They can range from 5 feet to 9 feet from head to toe.</p>
  </div>
  <div id="habitat">
    <h2>Habitat</h2>
    <h3>Countries with Large Brown Bear Populations</h3>
    <ol>
      <li>Russia</li>
      <li>United States</li>
      <li>Canada</li>
    </ol>
    <h3>Countries with Small Brown Bear Populations</h3>
    <p>Some countries with smaller brown bear populations include Armenia, Belarus, Bulgaria, China, Finland, France, Greece, India, Japan, Nepal, Poland, Romania, Slovenia, Turkmenistan, and Uzbekistan.</p>
  </div>
  <div id="media">
    <h2>Media</h2>
    <img src="https://content.codecademy.com/courses/web-101/web101-image_brownbear.jpg" alt="A Brown Bear"/>
        <video src="https://content.codecademy.com/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4" width="320" height="240" controls>Video not supported</video>
  </div>
  <script src="./main.js"></script>
</body>
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
  =====================
const first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

first.parentNode.style.backgroundColor = 'beige';
=============================
JAVASCRIPT AND THE DOM
Select and Modify Elements
In the previous exercise, we accessed the <body> element with the document keyword!

What if we wanted to select a specific element besides the entire <body> element? The DOM interface allows us to access a specific element with CSS selectors.

CSS selectors define the elements to which a set of CSS rules apply, but we can also use these same selectors to access DOM elements with JavaScript! Selectors can include a tag name, a class, or an ID.

The .querySelector() method allows us to specify a CSS selector as a string and returns the first element that matches that selector. The following code would return the first paragraph in the document.

document.querySelector('p');
Along with .querySelector(), JavaScript has more targeted methods that select elements based on their class, id, or tag name.

For example, if you want to access an element directly by its id, you can use the aptly named .getElementById() method:

document.getElementById('bio').innerHTML = 'The description';
In this example, we’ve selected the element with an ID of 'bio' and set its .innerHTML to the text 'The description'. Notice that the ID is passed as a string, wrapped in quotation marks (' ').

There are also the .getElementsByClassName() and .getElementsByTagName() methods which return an array of elements, instead of just one element. You can use bracket notation to access individual elements of an array:

// Set first element of .student class as 'Not yet registered'
document.getElementsByClassName('student')[0].innerHTML = 'Not yet registered';
 
// Set second <li> tag as 'Cedric Diggory'
document.getElementsByTagName('li')[1].innerHTML = 'Cedric Diggory`;
In the above example code, the first element with the 'student' class and the second <li> element have had their inner HTML changed.

================
<html> 
 <head>
   <title>Popular Fantasy Searches</title>
 </head>
 
 <body>
   <h1 class="ranking">Top 5 Best Selling Costumes</h1>
   <ol>
     <li id="first">Harry Potter</li>
     <li id="second">Hermoine Granger</li>
     <li class="slytherin" id="third">Lord Voldemort</li>
     <li class="slytherin" id="fourth">Draco Malfoy</li>
     <li id="fifth">Hagrid</li>
   </ol>
  
 </body>
 <script src="./main.js"></script>
</html>

=====================
document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters';

document.getElementById('fourth').innerHTML = 'Professor Snape';

document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin';

document.getElementsByTagName('li')[0].innerHTML = 'Dobby';
=============