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