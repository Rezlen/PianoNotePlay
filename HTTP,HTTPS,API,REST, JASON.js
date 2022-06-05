What is HTTP?
HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet. HTTP requires data to be transferred from one point to another over the network.

The transfer of resources happens using TCP (Transmission Control Protocol). In viewing this webpage, TCP manages the channels between your browser and the server (in this case, codecademy.com). TCP is used to manage many types of internet connections in which one computer or device wants to send something to another. HTTP is the command language that the devices on both sides of the connection must follow in order to communicate.

HTTP & TCP: How it Works
When you type an address such as www.codecademy.com into your browser, you are commanding it to open a TCP channel to the server that responds to that URL (or Uniform Resource Locator, which you can read more about on Wikipedia). A URL is like your home address or phone number because it describes how to reach you.

In this situation, your computer, which is making the request, is called the client. The URL you are requesting is the address that belongs to the server.

Once the TCP connection is established, the client sends a HTTP GET request to the server to retrieve the webpage it should display. After the server has sent the response, it closes the TCP connection. If you open the website in your browser again, or if your browser automatically requests something from the server, a new connection is opened which follows the same process described above. GET requests are one kind of HTTP method a client can call. You can learn more about the other common ones (POST, PUT and DELETE) in this article.

Let’s explore an example of how GET requests (the most common type of request) are used to help your computer (the client) access resources on the web.

Suppose you want to check out the latest course offerings from http://codecademy.com. After you type the URL into your browser, your browser will extract the http part and recognize that it is the name of the network protocol to use. Then, it takes the domain name from the URL, in this case “codecademy.com”, and asks the internet Domain Name Server to return an Internet Protocol (IP) address.

Now the client knows the destination’s IP address. It then opens a connection to the server at that address, using the http protocol as specified. It will initiate a GET request to the server which contains the IP address of the host and optionally a data payload. The GET request contains the following text:

GET / HTTP/1.1
Host: www.codecademy.com
This identifies the type of request, the path on www.codecademy.com (in this case, “/“) and the protocol “HTTP/1.1.” HTTP/1.1 is a revision of the first HTTP, which is now called HTTP/1.0. In HTTP/1.0, every resource request requires a separate connection to the server. HTTP/1.1 uses one connection more than once, so that additional content (like images or stylesheets) is retrieved even after the page has been retrieved. As a result, requests using HTTP/1.1 have less delay than those using HTTP/1.0.

The second line of the request contains the address of the server which is "www.codecademy.com". There may be additional lines as well depending on what data your browser chooses to send.

If the server is able to locate the path requested, the server might respond with the header:

HTTP/1.1 200 OK
Content-Type: text/html
This header is followed by the content requested, which in this case is the information needed to render www.codecademy.com.

The first line of the header, HTTP/1.1 200 OK, is confirmation that the server understands the protocol that the client wants to communicate with (HTTP/1.1), and an HTTP status code signifying that the resource was found on the server. The second line, Content-Type: text/html, shows the type of content that it will be sending to the client.

If the server is not able to locate the path requested by the client, it will respond with the header:

HTTP/1.1 404 NOT FOUND
In this case, the server identifies that it understands the HTTP protocol, but the 404 NOT FOUND status code signifies that the specific piece of content requested was not found. This might happen if the content was moved or if you typed in the URL path incorrectly or if the page was removed. You can read more about the 404 status code, commonly called a 404 error, here.

An Analogy:
It can be tricky to understand how HTTP functions because it’s difficult to examine what your browser is actually doing. (And perhaps also because we explained it using acronyms that may be new to you.) Let’s review what we learned by using an analogy that could be more familiar to you.

Imagine the internet is a town. You are a client and your address determines where you can be reached. Businesses in town, such as Codecademy.com, serve requests that are sent to them. The other houses are filled with other clients like you that are making requests and expecting responses from these businesses in town. This town also has a crazy fast mail service, an army of mail delivery staff that can travel on trains that move at the speed of light.

Suppose you want to read the morning newspaper. In order to retrieve it, you write down what you need in a language called HTTP and ask your local mail delivery staff agent to retrieve it from a specific business. The mail delivery person agrees and builds a railroad track (connection) between your house and the business nearly instantly, and rides the train car labeled “TCP” to the address of the business you provided.

Upon arriving at the business, she asks the first of several free employees ready to fulfill the request. The employee searches for the page of the newspaper that you requested but cannot find it and communicates that back to the mail delivery person.

The mail delivery person returns on the light speed train, ripping up the tracks on the way back, and tells you that there was a problem “404 Not Found.” After you check the spelling of what you had written, you realize that you misspelled the newspaper title. You correct it and provide the corrected title to the mail delivery person.

This time the mail delivery person is able to retrieve it from the business. You can now read your newspaper in peace until you decide you want to read the next page, at which point, you would make another request and give it to the mail delivery person.

What is HTTPS?
Since your HTTP request can be read by anyone at certain network junctures, it might not be a good idea to deliver information such as your credit card or password using this protocol. Fortunately, many servers support HTTPS, short for HTTP Secure, which allows you to encrypt data that you send and receive. You can read more about HTTPS on Wikipedia.

HTTPS is important to use when passing se  nsitive or personal information to and from websites. However, it is up to the businesses maintaining the servers to set it up. In order to support HTTPS, the business must apply for a certificate from a Certificate Authority.
=============Web APIs==========
Introduction to Web APIs
Learn what APIs are and how they’re useful tools for web development.

What are APIs?
An Application Programming Interface (API) is a software tool that makes it easier for developers to interact with another application to use some of that application’s functionality. Like tools in the physical world, APIs are built to solve specific, repeated, and potentially complex problems.

Imagine we needed to twist a screw into a piece of wood. We could try to take the screw and twist it in with our fingers, but that would be difficult and inefficient. Twisting one screw would be hard enough — having to do it multiple times would be near impossible! Instead, we could make the task much easier by using a tool that someone else created, in this case, a screwdriver! When used properly, the screwdriver can be used for one specific type of screw and can be reused for the same job over and over again!

Relating this analogy back to APIs, we probably don’t want to have to write up the same code for the same problems over and over again. If the right API exists to solve our problem, we could make it easier on ourselves and use the API instead. But, before we fully commit to using an API, we should go over some important considerations!

Types of APIs
There are two main categories of web APIs, browser APIs and 3rd party APIs.

Browser APIs are specific to writing code related to browsers and give developers access to information that the browser can also access. One example is the geolocation API which allows the program to know where a user is when accessing our app. This specific API requires that the user grant permissions to the browser to access their geolocation information. There are also browser APIs for audio, cryptography, VR, and much more.” To see a comprehensive list of browser APIs and how to interact with them, check out MDN’s documentation of web APIs.

Third-party APIs are apps that provide some type of functionality or information from a third-party, usually a company. For example, we could use the OpenWeather API to get in-depth information about the weather in an area, forecasts, historical weather data, and more! On our own, we wouldn’t even have access to this data and we would certainly not want to write up this code ourselves just for one app!

Requesting Information from a Third-party API
Each API has a specific structure and protocol that we have to follow in order to gain access to its functionality.

Rules and Requirements
Organizations that maintain third-party APIs often set rules and requirements for how developers can interact with their API. For OpenWeather, we need to sign up for an account and generate a special token called an API key that grants our account the ability to make API requests. These API keys are unique to individual accounts and should be kept secret. OpenWeather provides some free functionality and some paid functionality. So before committing to a third-party API, check out their specifications which can often be found in the API documentation. Here’s OpenWeather’s documentation to look over as an example.

Making Requests
Some of an API’s specifications relate to making a request for data. These specifications could include more parameters for specific information or the inclusion of an API key. For example, when using the OpenWeather API, we need to provide more information to search for weather information — such information could include: the name of a city, time of day, the type of forecast, etc. These specifications for making a request can also be found in the API documentation.

Response Data
After we make a successful API request, the API sends back data. Many APIs format their data using JavaScript Object Notation (JSON) which looks like a JavaScript object. Here’s a quick example of what JSON data might look like:

{ 
  "temperature" : { 
     "celcius" : 25,
  },
  "city": "chicago", 
}
It’s then up to us how to determine how to consume, or use, this information in our apps. If we got back that sample JSON above, we could parse out the temperature information and display it on our app.

Review
Congrats, we’ve now gone through the basics of web APIs! Here’s a quick recap of what we covered:

With web APIs, we have a tool that we can use to access the functionality and data of another application.
There are two main types of APIs, browser and third-party.
Browser APIs require specific syntax and permissions.
Third-party APIs have their own rules and requirements set by the organizations that maintain them.
When making a request to API, we might have to supply more details about what information we want.
If we get a successful response, we still have to decide how to consume the sent back data.
That’s a lot to take in, but knowing that these tools exist opens up more possibilities for what we can do with our apps!
============================

What is REST?
Learn about how to design web services using the REST paradigm

REST API Model

REpresentational State Transfer
REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server. We will go into what these terms mean and why they are beneficial characteristics for services on the Web.

Separation of Client and Server
In the REST architectural style, the implementation of the client and the implementation of the server can be done independently without each knowing about the other. This means that the code on the client side can be changed at any time without affecting the operation of the server, and the code on the server side can be changed without affecting the operation of the client.

As long as each side knows what format of messages to send to the other, they can be kept modular and separate. Separating the user interface concerns from the data storage concerns, we improve the flexibility of the interface across platforms and improve scalability by simplifying the server components. Additionally, the separation allows each component the ability to evolve independently.

By using a REST interface, different clients hit the same REST endpoints, perform the same actions, and receive the same responses.

Statelessness
Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa. In this way, both the server and the client can understand any message received, even without seeing previous messages. This constraint of statelessness is enforced through the use of resources, rather than commands. Resources are the nouns of the Web - they describe any object, document, or thing that you may need to store or send to other services.

Because REST systems interact through standard operations on resources, they do not rely on the implementation of interfaces.

These constraints help RESTful applications achieve reliability, quick performance, and scalability, as components that can be managed, updated, and reused without affecting the system as a whole, even during operation of the system.

Now, we’ll explore how the communication between the client and server actually happens when we are implementing a RESTful interface.

Communication between Client and Server
In the REST architecture, clients send requests to retrieve or modify resources, and servers send responses to these requests. Let’s take a look at the standard ways to make requests and send responses.

Making Requests
REST requires that a client make a request to the server in order to retrieve or modify data on the server. A request generally consists of:

an HTTP verb, which defines what kind of operation to perform
a header, which allows the client to pass along information about the request
a path to a resource
an optional message body containing data
HTTP Verbs
There are 4 basic HTTP verbs we use in requests to interact with resources in a REST system:

GET — retrieve a specific resource (by id) or a collection of resources
POST — create a new resource
PUT — update a specific resource (by id)
DELETE — remove a specific resource by id
You can learn more about these HTTP verbs in the following Codecademy article:

What is CRUD?
Headers and Accept parameters
In the header of the request, the client sends the type of content that it is able to receive from the server. This is called the Accept field, and it ensures that the server does not send data that cannot be understood or processed by the client. The options for types of content are MIME Types (or Multipurpose Internet Mail Extensions, which you can read more about in the MDN Web Docs.

MIME Types, used to specify the content types in the Accept field, consist of a type and a subtype. They are separated by a slash (/).

For example, a text file containing HTML would be specified with the type text/html. If this text file contained CSS instead, it would be specified as text/css. A generic text file would be denoted as text/plain. This default value, text/plain, is not a catch-all, however. If a client is expecting text/css and receives text/plain, it will not be able to recognize the content.

Other types and commonly used subtypes:

image — image/png, image/jpeg, image/gif
audio — audio/wav, audio/mpeg
video — video/mp4, video/ogg
application — application/json, application/pdf, application/xml, application/octet-stream
For example, a client accessing a resource with id 23 in an articles resource on a server might send a GET request like this:

GET /articles/23
Accept: text/html, application/xhtml
The Accept header field in this case is saying that the client will accept the content in text/html or application/xhtml.

Paths
Requests must contain a path to a resource that the operation should be performed on. In RESTful APIs, paths should be designed to help the client know what is going on.

Conventionally, the first part of the path should be the plural form of the resource. This keeps nested paths simple to read and easy to understand.

A path like fashionboutique.com/customers/223/orders/12 is clear in what it points to, even if you’ve never seen this specific path before, because it is hierarchical and descriptive. We can see that we are accessing the order with id 12 for the customer with id 223.

Paths should contain the information necessary to locate a resource with the degree of specificity needed. When referring to a list or collection of resources, it is not always necessary to add an id. For example, a POST request to the fashionboutique.com/customers path would not need an extra identifier, as the server will generate an id for the new object.

If we are trying to access a single resource, we would need to append an id to the path. For example: GET fashionboutique.com/customers/:id — retrieves the item in the customers resource with the id specified. DELETE fashionboutique.com/customers/:id — deletes the item in the customers resource with the id specified.

Sending Responses
Content Types
In cases where the server is sending a data payload to the client, the server must include a content-type in the header of the response. This content-type header field alerts the client to the type of data it is sending in the response body. These content types are MIME Types, just as they are in the accept field of the request header. The content-type that the server sends back in the response should be one of the options that the client specified in the accept field of the request.

For example, when a client is accessing a resource with id 23 in an articles resource with this GET Request:

GET /articles/23 HTTP/1.1
Accept: text/html, application/xhtml
The server might send back the content with the response header:

HTTP/1.1 200 (OK)
Content-Type: text/html
This would signify that the content requested is being returning in the response body with a content-type of text/html, which the client said it would be able to accept.

Response Codes
Responses from the server contain status codes to alert the client to information about the success of the operation. As a developer, you do not need to know every status code (there are many of them), but you should know the most common ones and how they are used:

Status code	Meaning
200 (OK)	This is the standard response for successful HTTP requests.
201 (CREATED)	This is the standard response for an HTTP request that resulted in an item being successfully created.
204 (NO CONTENT)	This is the standard response for successful HTTP requests, where nothing is being returned in the response body.
400 (BAD REQUEST)	The request cannot be processed because of bad request syntax, excessive size, or another client error.
403 (FORBIDDEN)	The client does not have permission to access this resource.
404 (NOT FOUND)	The resource could not be found at this time. It is possible it was deleted, or does not exist yet.
500 (INTERNAL SERVER ERROR)	The generic answer for an unexpected failure if there is no more specific information available.
For each HTTP verb, there are expected status codes a server should return upon success:

GET — return 200 (OK)
POST — return 201 (CREATED)
PUT — return 200 (OK)
DELETE — return 204 (NO CONTENT) If the operation fails, return the most specific status code possible corresponding to the problem that was encountered.
Examples of Requests and Responses
Let’s say we have an application that allows you to view, create, edit, and delete customers and orders for a small clothing store hosted at fashionboutique.com. We could create an HTTP API that allows a client to perform these functions:

If we wanted to view all customers, the request would look like this:

GET http://fashionboutique.com/customers
Accept: application/json
A possible response header would look like:

Status Code: 200 (OK)
Content-type: application/json
followed by the customers data requested in application/json format.

Create a new customer by posting the data:

POST http://fashionboutique.com/customers
Body:
{
  “customer”: {
    “name” = “Scylla Buss”,
    “email” = “scylla.buss@codecademy.org”
  }
}
The server then generates an id for that object and returns it back to the client, with a header like:

201 (CREATED)
Content-type: application/json
To view a single customer we GET it by specifying that customer’s id:

GET http://fashionboutique.com/customers/123
Accept: application/json
A possible response header would look like:

Status Code: 200 (OK)
Content-type: application/json
followed by the data for the customer resource with id 23 in application/json format.

We can update that customer by PUT ting the new data:

PUT http://fashionboutique.com/customers/123
Body:
{
  “customer”: {
    “name” = “Scylla Buss”,
    “email” = “scyllabuss1@codecademy.com”
  }
}
A possible response header would have Status Code: 200 (OK), to notify the client that the item with id 123 has been modified.

We can also DELETE that customer by specifying its id:

DELETE http://fashionboutique.com/customers/123
The response would have a header containing Status Code: 204 (NO CONTENT), notifying the client that the item with id 123 has been deleted, and nothing in the body.

Practice with REST
Let’s imagine we are building a photo-collection site. We want to make an API to keep track of users, venues, and photos of those venues. This site has an index.html and a style.css. Each user has a username and a password. Each photo has a venue and an owner (i.e. the user who took the picture). Each venue has a name and street address. Can you design a REST system that would accommodate:

storing users, photos, and venues
accessing venues and accessing certain photos of a certain venue
Start by writing out:

what kinds of requests we would want to make
what responses the server should return
what the content-type of each response should be
Possible Solution - Models
{
  “user”: {
    "id": <Integer>,
    “username”: <String>,
    “password”:  <String>
  }
}
{
  “photo”: {
    "id": <Integer>,
    “venue_id”: <Integer>,
    “author_id”: <Integer>
  }
}
{
  “venue”: {
    "id": <Integer>,
    “name”: <String>,
    “address”: <String>
  }
}
Possible Solution - Requests/Responses
GET Requests
Request- GET /index.html Accept: text/html Response- 200 (OK) Content-type: text/html

Request- GET /style.css Accept: text/css Response- 200 (OK) Content-type: text/css

Request- GET /venues Accept:application/json Response- 200 (OK) Content-type: application/json

Request- GET /venues/:id Accept: application/json Response- 200 (OK) Content-type: application/json

Request- GET /venues/:id/photos/:id Accept: application/json Response- 200 (OK) Content-type: image/png

POST Requests
Request- POST /users Response- 201 (CREATED) Content-type: application/json

Request- POST /venues Response- 201 (CREATED) Content-type: application/json

Request- POST /venues/:id/photos Response- 201 (CREATED) Content-type: application/json

PUT Requests
Request- PUT /users/:id Response- 200 (OK)

Request- PUT /venues/:id Response- 200 (OK)

Request- PUT /venues/:id/photos/:id Response- 200 (OK)

DELETE Requests
Request- DELETE /venues/:id Response- 204 (NO CONTENT)

Request- DELETE /venues/:id/photos/:id Response- 204 (NO CONTENT)

==========================

What Is JSON?
A brief guide to understanding JSON and its use cases.

Introduction
In a world inundated with data, it is becoming more important to know how to work with a variety of data. As programmers, we need to be able to transfer our populated data structures from any language we choose to a format that is recognizable and readable by other languages and platforms. Fortunately for us, there exists such a data-exchange format.

What is JSON?
JSON, or JavaScript Object Notation, is a popular, language-independent, standard format for storing and exchanging data. Adopted by ECMA International, an industry association founded in 1961 to standardize information and communication systems, JSON has become the de facto standard that facilitates storing and sending data between all programming languages.

Common Uses of JSON
JSON is heavily used to facilitate data transfer in web applications between a client, such as a web browser, and a server. A typical example where such data transfer occurs is when you fill out a web form. The form data is converted from HTML to JavaScript objects to JSON objects and sent to a remote web server for processing. These transactions could be as simple as entering a search engine query to a multi-page job application.

When companies make their data public for other applications, like Spotify sharing its music library or Google sharing its map data, the information is formatted in JSON. This way, any application, regardless of language, can collect and parse the data.

Some of the popular web APIs that utilize JSON in data exchanges are:

Google Maps
Google Auth 2.0 Authentication
Facebook Social Graph API
Spotify Music Web API
LinkedIn Profile API
JSON Syntax
Since JSON is derived from the JavaScript programming language, its appearance is similar to that of JavaScript objects.

A sample JSON object is represented as follows:

{
  "student": {
    "name": "Rumaisa Mahoney",
    "age": 30,
    "fullTime": true,
    "languages": [ "JavaScript", "HTML", "CSS" ],
    "GPA": 3.9,
    "favoriteSubject": null
  }
}
Note the following syntax rules for JSON:

The curly braces, {..}, hold objects.
The square brackets, [..], hold arrays.
Data is stored in name-value pairs separated by a colon, :.
Every name-value pair is separated from another pair by a comma, ,. Similarly, every item in an array is delimited by a comma as well. Trailing commas are forbidden.
JSON property names must be in double-quoted (" ") text even though JavaScript names do not hold by this stringency.
JSON Data Types
A JSON data type must be one of the following:

string (double-quoted)
number (integer or floating point)
object (name-value pair)
array (comma-delimited)
boolean (true or false)
null
Try to find all the data types in this JSON example:

{
  "student": {
    "name": "Rumaisa Mahoney",
    "age": 30,
    "fullTime": true,
    "languages": [ "JavaScript", "HTML", "CSS" ],
    "GPA": 3.9,
    "favoriteSubject": null
  }
}
Notably, JSON doesn’t cover every data type. Types that are not represented in JSON such as dates can be stored as a string and converted to a language-specific data structure. Here’s an acceptable internationally-recognized date format in ISO 8601:

"2014-01-01T23:28:56.782Z"
This above format contains parts which resemble a date and time. However, as a string, it is hard for a programming language to use as is. Conveniently, every programming language has built-in JSON facilities to convert this string into a more readable and usable format, such as:

Wed Jan 01 2014 13:28:56 GMT-1000 (Hawaiian Standard Time)
This pretty much covers the basic description of JSON, its popularity, and its syntax. Congratulations on reaching this milestone!
====================

Working with JSON in JavaScript
A user guide on how to work with JSON in Javascript.

Introduction
JSON, short for JavaScript Object Notation, is a language-independent data format that has been accepted as an industry standard. Because it is based on the JavaScript programming language, JSON’s syntax looks similar to a JavaScript object with minor differences. We’ll take a look at the subtle difference between them. Later on, we’ll learn how to parse JSON and extract its content as JavaScript. Lastly, we’ll learn how to write a JSON object with JavaScript. So, let’s begin.

JSON Object vs. JavaScript Object
Here is an example JSON object of a person named Kate, who is 30 years old, and whose hobbies include reading, writing, cooking, and playing tennis:

{
  "person": {  
    "name": "Kate",  
    "age": 30,  
    "hobbies": [ "reading", "writing", "cooking", "tennis" ] 
  }
}
Represented as a JavaScript object literal, the same information would appear as:

{  
  person: {
    name: 'Kate',  
    age: 30,  
    hobbies: [ 'reading', 'writing', 'cooking', 'tennis' ] 
  }
}
Notice a slight difference between the two formats.

The name portion in each JSON name-value pair and all string values must be enclosed in double-quotes while this is optional in JavaScript.
JavaScript accepts string values that are single or double-quoted, however, there exists JavaScript coding guidelines that prefer one style over another.
Reading a JSON String
In a typical web application, the JSON data that we receive from a web request comes in the form of a string. At other times, JSON data is stored in a file that is used for authentication, configuration, or database storage. 
These files typically have a .json extension, and they have to be opened in order to retrieve the JSON string in it. In either case, we will need to convert the string to a format that we can use in order to access its parts. 
Each programming language has its own mechanism to handle this conversion. In JavaScript, for example, we have a built-in JSON class with a method called .parse() that takes a JSON string as a parameter and returns a JavaScript object.

The following code converts a JSON string object, jsonData, into a JavaScript object, jsObject, and logs jsObject on the console.

const jsonData = '{ "book": { "name": "JSON Primer", "price": 29.99, "inStock": true, "rating": null } }';
 
const jsObject = JSON.parse(jsonData);
 
console.log(jsObject);
This will print out jsObject as follows:

{
  book: { name: 'JSON Primer', price: 29.99, inStock: true, rating: null }
}
Once we have converted a JSON object to a JavaScript object, we can access the individual properties inside the JavaScript object. 
To access a value inside a JavaScript object based on its property name, we can either use dot notation, (.propertyName), or bracket notation, (['propertyName']).

For instance, to retrieve the book property of jsObject we could do the following:

// Using the dot notation
const book = jsObject.book;    
console.log(book);
console.log(book.name, book.price, book.inStock);
 
// Using the bracket notation
const book2 = jsObject['book'];
console.log(book2);
console.log(book2["name"], book2["price"], book2["inStock"]);
Both ways of accessing the book property return the same output:

{ name: 'JSON Primer', price: 29.99, inStock: true, rating: null }
JSON Primer 29.99 true
As you can see, after parsing jsonData into a JavaScript object that’s stored in the variable, book, you can treat book like any other object! That means you can access property values, as shown above, edit existing values, iterate over the keys and values, etc…
-------------------------
//Exercise: Reading a JSON Stringc:

onst jsonData = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

//Create a variable called jsObject that is an object parsed from jsonData.
//Print out the array of all the children property nested in jsObject. Be sure to use either bracket notation or dot notation to access the nested properties.

const jsObject = JSON.parse(jsonData);
console.log(jsObject['parent']['children'])
---------outcome-------------
[ { name: 'Kim', age: 3 }, { name: 'Lee', age: 1 } ]

--------------------------
As a developer, you receive some data in the form of a JSON string in the variable, jsonData. However, the content of jsonData is not completely correct. The age value of the parent property should be 35 instead of 45. Without changing the content of jsonData directly, update the age value and then log a new JSON string with the correct value in the console.

Here is a step-by-step guide to solve this challenge:

Convert jsonData to a JavaScript object using JSON.parse() and save it as a const variable, for instance, jsObject.

Use either the dot, .key, or bracket, ['key'], notation to access the parent property of jsObject followed by the age property and change its value from 45 to 35.

Convert jsObject back to a JSON string using JSON.stringify() and save it as another const variable, for instance, jsObjectToJson.

Log the jsObjectToJson string on the console.

---------------------------
const jsonData = '{"parent":{"name":"Sally","age":45,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}';

const jsObject = JSON.parse(jsonData);
jsObject.parent.age = 35
const jsObjectToJson = JSON.stringify(jsObject)
console.log(jsObjectToJson)
------------outcome---------------
{"parent":{"name":"Sally","age":35,"children":[{"name":"Kim","age":3},{"name":"Lee","age":1}]}}
===============================
