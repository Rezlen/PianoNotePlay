Intro to GET Requests using Fetch
The first type of requests we’re going to tackle is GET requests using fetch().

The fetch() function:

Creates a request object that contains relevant information that an API needs.
Sends that request object to the API endpoint provided.
Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.
Let’s walk through the boilerplate code to the right for using fetch() to create a GET request step by step.

First, call the fetch() function and pass it a URL as a string for the first argument, determining the endpoint of the request.

fetch('https://api-to-call.com/endpoint')
The.then() method is chained at the end of the fetch() function and in its first argument, the response of the GET request is passed to the callback arrow function.
 The .then() method will fire only after the promise status of fetch() has been resolved.

Inside the callback function, the ok property of the response object returns a Boolean value. If there are no errors, response.ok will be true and the code will return response.json().

If response.ok is a falsy value, our code will throw an error.

throw new Error('Request failed!');
A second argument passed to .then() will be another arrow function that will be triggered when the promise is rejected. 
It takes a single parameter, networkError. This object logs the networkError if we could not reach the endpoint at all (e.g., the server is down).

A second .then() method will run after the previous .then() method has finished running without error. 
It takes jsonResponse, which contains the returned response.json() object from the previous .then() method, as its parameter and can now be handled, however we may choose.

e.g:

// Information to reach API
const url = 'https://api.datamuse.com/words?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then(jsonResponse => {
    //renderRawResponse(jsonResponse)
    renderResponse(jsonResponse)
  }) 
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

=================================
Intro to POST Requests using Fetch
In the previous exercise, we successfully wrote a GET request using the fetch API and handled Promises to get word suggestions from Datamuse. Give yourself a pat on the back (or two to treat yourself)!

Now, we’re going to learn how to use fetch() to construct POST requests!

Take a look at the diagram to the right. It has the boilerplate code for a POST request using fetch().

Notice that the fetch() call takes two arguments: an endpoint and an object that contains information needed for the POST request.

The object passed to the fetch() function as its second argument contains two properties: method, with a value of 'POST', and body, with a value of JSON.stringify({id: '200'});. 
This second argument determines that this request is a POST request and what information will be sent to the API.

A successful POST request will return a response body, which will vary depending on how the API is set up.

The rest of the request is identical to the GET request. 
A .then() method is chained to the fetch() function to check and return the response as well as throw an exception when a network error is encountered. 
A second .then() method is added on so that we can use the response however we may choose.

------
// Information to reach API
const apiKey = '05e68cf93c144acdb36cf8c07cfbd8ed';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
     return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message); //By adding this second callback, you’re safeguarding yourself in the rare event that the network returns an error!
  }).then(jsonResponse => {
        renderResponse(jsonResponse);
  })
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

========================
Intro to async GET Requests
In the following exercises, we’re going to take what we’ve learned about chaining Promises and make it simpler using functionality introduced in ES8: async and await. You read that right, you did the hard part already. Now it’s time to make it easier.

The structure for this request will be slightly different. We will use the new keywords async and await, as well as the try and catch statements.

Take a look at the diagram on the right.

Here are some key points to keep in mind as we walk through the code:

The async keyword is used to declare an async function that returns a promise.
The await keyword can only be used within an async function. await suspends the program while waiting for a promise to resolve.
In a try...catch statement, code in the try block will be run and in the event of an exception, the code in the catch statement will run.
Study the async getData() function to the right to see how the request can be written using async and await.
--------------
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'}); 
      if (response.ok) {
        const jsonResponse = await response.json();
        renderResponse(jsonResponse)
      }
  } catch(error) {
    console.log(error)
  }
}
// Code goes here


// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

========================
Making an async POST Request
Since we’ve reviewed the boilerplate code for an async POST request, the next step is to incorporate that logic into making a real request.

In this exercise, we’ll need to retrieve our Rebrandly API key to access the Rebrandly API.

We will then pass in the endpoint and the request object into the fetch() method to make our POST request.

If you reset the exercise at any point, you will have to paste in your API key again at the top!
----------------------

// information to reach API
const apiKey = '05e68cf93c144acdb36cf8c07cfbd8ed';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
      // add code here

      method: 'POST',
      body: data,
      headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

============================