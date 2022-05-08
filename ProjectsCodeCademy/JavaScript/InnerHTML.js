JAVASCRIPT AND THE DOM
Tweak an Element
When using the DOM in your script to access an HTML element, whether it’s an <li> element or the entire <body> element, you also have access to all of that element’s properties.

This includes the ability to modify the contents of the element as well as its attributes and properties, which can range from modifying the text inside a <p> element to assigning a new background color to a <div>. For example, the .innerHTML property allows you to access and set the contents of an element.

Let’s take a look at how we can reassign the contents of the <body> element to the text 'The cat loves the dog':

document.body.innerHTML = 'The cat loves the dog.';
The .innerHTML property can also add any valid HTML elements. The following example replaces the contents of the <body> element by assigning an <h2> element as a child inside the <body> element:

document.body.innerHTML = '<h2>This is a heading</h2>'; 