let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); // removing the last item
console.log(secretMessage.length); // counting the items in the array
secretMessage.push('to','program'); // adding two items to the end of the array
secretMessage['easily']='right';
secretMessage.shift(); // removes the first of the array
secretMessage.unshift('Programming'); // adds to the first of the array
secretMessage.splice(6, 5, 'know'); //array.splice(indexToStart, numberOfIndices, 'stringToAdd'); replace strings ina specific part of the array
console.log(secretMessage);
As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

