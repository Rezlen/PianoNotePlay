How servers connect to the Internet
Clients use a URL to connect to a server across the Internet. The URL has four main components:

A connection scheme, usually HTTPS (“Hypertext Transfer Protocol Secure”), browsers and web-servers use to talk with one another.
A subdomain that specifies the particular server (usually organized by resource type) to be delivered to the client.
A domain name that specifies the name of the organization(s) associated with the URL.
A top-level domain that specifies the type of organization associated with the URL.
For the URL https://www.codecademy.com, “https” is the scheme, “www” is the subdomain, “codecademy” is the domain name, and “com” is the top-level domain. In further detail, the following happens:

The browser first communicates with the internet service provider (ISP).
This further communicates with the domain name server to get the IP address of the server.
The domain name server converts a domain name to an IP address.
Using this IP address, the browser connects to the server.
Once connected to the web server, our browser sends the request to the server and asks for particular files.
When the browser has connected to the server at the correct IP address, the servers send all the requested HTML text for the web page to our browser.
Server connecting to the internet to send the response to client

Examples of server operating systems
The operating system (OS) used in a given server is completely dependent on the server’s requirements. The commonly used server operating systems are:

Windows: This server operating system is provided by the Microsoft Corporation. It allows users to store the files, play videos and music. It also supports multitasking, graphical user interface and virtual memory management.

UNIX: It is one of the most popular operating system for client-server environment. It is a multi-user operating system. This operating system is widely used by websites to provide services on the internet.

Linux: This operating system is open-source, multi-user, multi-process and gives a good real-time performance. It offers low cost for delivering services to the clients. This operating system chosen over others for servers for their security services.

Types of servers
There are different types of servers based on their uses. Some of the most common types of servers are as follows:

A file server is used to store data files for multiple users. They provide users access to stored files and data and can allow faster retrieval and saving of data. These are used on private networks and provides a location for storage of computer files. It provides a central location to store files where multiple users can work with the same documents.
A database server allows another computer to access the database and retrieve or upload data. This type of server typically has a large storage capacity.
A web server delivers web pages requested by multiple client web browsers.
Mail servers store and deliver email for clients through an email service platform. They are a form of digital ‘post office’ that sorts and stores emails.
An application server provides a software environment with all the needed requirements. This server allows users access to bypass downloading the software.
The proxy server communicates with the websites you are visiting on your behalf. It links the user with the rest of the internet. The browser connects to the proxy server, and the proxy server sends your request to the website and sends the website’s response back to you.

------------------------

INTRODUCTION TO NODE.JS
Introduction
For a long time, the browser was the only place JavaScript code could be executed. Web developers had to use a different programming language on the front-end than the back-end. It also meant that, even as JavaScript evolved into a more robust and powerful language, it remained a front-end only language.

Though multiple attempts to create off-browser JavaScript environments have been attempted, Node.js, invented by Ryan Dahl in 2009, found unprecedented popularity and is currently being used by numerous top-tier companies including Netflix, Uber, Paypal, and eBay. Node.js is a JavaScript runtime, or an environment that allows us to execute JavaScript code outside of the browser. A “runtime” converts code written in a high-level, human-readable, programming language and compiles it down to code the computer can execute.

Though Node was created with the goal of building web servers and web applications in JavaScript, it can also be used for creating command-line applications or desktop applications. In this lesson, we’ll explore some features of Node so you start to feel comfortable with running JavaScript in the Node environment and gain some familiarity with features unique to Node. For more advanced development, Node can be combined with any number of robust frameworks like the Express.js framework for creating effective web application back-ends.

There’s more to learn about Node than we could ever fit in one lesson. We’ll try to point to great resources like MDN and the Node.js documentation. Take your time exploring and use the documentation.
-------------------

The Node REPL
REPL is an abbreviation for read–eval–print loop. It’s a program that loops, or repeatedly cycles, through three different states: a read state where the program reads input from a user, the eval state where the program evaluates the user’s input, and the print state where the program prints out its evaluation to a console. Then it loops through these states again.

When you install Node, it comes with a built-in JavaScript REPL. You can access the REPL by typing the command node (with nothing after it) into the terminal and hitting enter. A > character will show up in the terminal, indicating the REPL is running and prompting your input. The Node REPL will evaluate your input line by line.

By default, you indicate the input is ready for eval when you hit enter. If you’d like to type multiple lines and then have them evaluated at once, you can type .editor while in the REPL. Once in “editor” mode, you can type control + d when you’re ready for the input to be evaluated. Each session of the REPL has a single shared memory; you can access any variables or functions you define until you exit the REPL.

A REPL can be extremely useful for performing calculations, learning a language, and developing code. It’s a place where you can explore language features and try things out while receiving immediate feedback. Figuring out how to do this outside of the browser or a website can be really empowering.

The Node environment contains a number of Node-specific global elements in addition to those built into the JavaScript language. Every Node-specific global property sits inside the the Node global object. This object contains a number of useful properties and methods that are available anywhere in the Node environment.

Let’s try out the Node REPL. This will be a good way for you to explore the Node global object!
--------------
Running a Program with Node
Node was designed with server-side web development in mind and has a lot of thoughtful functionality towards that end. At its most simple, however, it provides the ability to run JavaScript programs on our own computers instead of just in the browser’s console or embedded in HTML.

In this lesson, we’ll explore some of the functionality and properties specific to the Node environment, but first, let’s see how we run a program.

We’ll need to create a file with a .js extension. We’ll call ours myProgram.js. Next, we’ll open that file with a text editor and add our code:

// Inside myProgram.js
console.log('Hello World');
Our code is complete! Now, we want to execute it. We’ll open our terminal and navigate to the directory that contains myProgram.js. Finally, we’ll type the command node myProgram.js into our terminal.

$ node myProgram.js
The results of our program will print to the terminal.

Hello World
Let’s write a program and run it in Node.
------------------
Core Modules
Modularity is a software design technique where one program has distinct parts, each providing a single piece of the overall functionality. These separate modules come together to build a cohesive whole. Modularity is essential for creating scalable programs which incorporate libraries and frameworks and separate the program’s concerns into manageable chunks. Essentially, a module is a collection of code located in a file. Instead of having an entire program located in a single file, code is organized into separate files based on the concerns they address. These files can then be included in other files by using the require() function.

To save developers from reinventing the wheel each time, Node.js has several built-in modules to perform common tasks efficiently. These are known as the core modules. The core modules are defined within Node.js’s source code and are located in the lib/ folder. Core modules can be required by passing a string with the name of the module into the require() function:

// Require in the 'events' core module:
const events = require('events');
The example above shows how the events module is required into a file and stored in an events variable. Understanding the specifics of this module isn’t necessary at this point, but the events module is a Node.js core module that provides key functions for working with, well… events. You’ll learn more about it in a later lesson.

Some core modules are actually used inside other core modules. For instance, the util module can be used in the console module to format messages. We’ll cover these two modules in this lesson, as well as two other commonly used core modules: process and os.

Node.js has several core modules, far too many to cover in this lesson. We’ll learn how to get the full list and then dive deeper into the aforementioned modules throughout the next few exercises.
 
---------------
The Console Module
One of the most commonly used Node.js core modules is the console module. In Node.js, the terminal is used to send and receive text feedback to and from a program, often for debugging purposes. This may sound familiar to how we use the console in the web browser. That’s because in Node.js, the built-in console module exports a global console object that gives the terminal similar functionality. The console object provides many of the same familiar methods such as:

.log() — to print messages to the terminal.
.assert() — to print a message to the terminal if the value is falsy.
.table() — to print out a table in the terminal from an object or array.
Since console is a global module, its methods can be accessed from anywhere, and the require() function is not necessary.
----------------
The Process Module
In computer science, a process is the instance of a computer program that is being executed. You can open Task Manager if you’re on a Windows machine or Activity Monitor from a Mac to see information about the various processes running on your computer right now. Node has a global process object with useful methods and information about the current process.

The process.env property is an object which stores and controls information about the environment in which the process is currently running. For example, the process.env object contains a PWD property which holds a string with the directory in which the current process is located. It can be useful to have some if/else logic in a program depending on the current environment— a web application in a development phase might perform different tasks than when it’s live to users. We could store this information on the process.env. One convention is to add a property to process.env with the key NODE_ENV and a value of either production or development.

if (process.env.NODE_ENV === 'development'){
  console.log('Testing! Testing! Does everything work?');
}
The process.memoryUsage() returns information on the CPU demands of the current process. It returns a property that looks similar to this:

{ rss: 26247168,
  heapTotal: 5767168,
  heapUsed: 3573032,
  external: 8772 }
Heap can mean different things in different contexts: a heap can refer to a specific data structure, but it can also refer to a block of computer memory. The process.memoryUsage().heapUsed method will return a number representing how many bytes of memory the current process is using.

The process.argv property holds an array of command line values provided when the current process was initiated. The first element in the array is the absolute path to Node, which ran the process. The second element in the array is the path to the file that’s running. The following elements will be any command line arguments provided when the process was initiated. Command line arguments are separated from one another with spaces.

node myProgram.js testing several features
console.log(process.argv[3]); // Prints 'several'
We’ve only covered a few of the properties of the process object, so make sure to check out the documentation on the process object to learn more about it and explore some of its other methods and properties.

Let’s get some practice using the process object!

-------------
The OS Module
When developing or debugging an app, it can be helpful to have information about the computer, operating system, and network on which the program is running. Before Node, this information could not be retrieved using JavaScript due to the language being confined to the browser. However, Node.js is a JavaScript runtime, which means it can execute code outside of the browser, and we’re able to get access to much of this information through the os core module.

Unlike process and console, the os module is not global and needs to be included into the file in order to gain access to it’s methods. You can include the os module into your file by typing:

const os = require('os');
With the os module saved to the os variable, you can call methods like:

os.type() — to return the computer’s operating system.
os.arch() — to return the operating system CPU architecture.
os.networkInterfaces — to return information about the network interfaces of the computer, such as IP and MAC address.
os.homedir() — to return the current user’s home directory.
os.hostname() — to return the hostname of the operating system.
os.uptime() — to return the system uptime, in seconds.
Let’s take a look at an example:

const os = require('os');
 
const local = {  
  'Home Directory': os.homedir(),    
  'Operating System': os.type(),
  'Last Reboot': os.uptime()
}
In the above example code, we first require the os module and store it in a variable, os. Below that, we have an object, local, that will hold some information about the user’s computer: the name of the home directory, the type of operating system, and the time since the computer was last rebooted.

  {
    'Home Directory': '/Users/luca',
    'Operating System': 'Darwin',
    'Time since reboot': 86997
  }
When we run the program, the local object stores all the requested information:

the user’s home directory — '/Users/luca',
the operating system — 'Darwin' (Darwin is the underlying operating system of macOS.),
and the time since the computer was last rebooted — 86997 seconds.
Feel free to try running some of the os module methods on your own computer to get more information about the hardware, OS, and network you’re on!

Note that in the exercises below, the os module will return information from the learning environment hosted by Codecademy, and not your local computer.

----------------
The Util Module
Developers sometimes classify outlier functions used to maintain code and debug certain aspects of a program’s functionality as utility functions. Utility functions don’t necessarily create new functionality in a program, but you can think of them as internal tools used to maintain and debug your code. The Node.js util core module contains methods specifically designed for these purposes. The util module can be required into the file using:

const util = require('util');
Once required, you have access to many useful objects and methods within the util module. One important object is types, which provides methods for runtime type checking in Node.

const util = require('util');
 
const today = new Date();
const earthDay = 'April 22, 2022';
 
console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));
In the above example, we first require in the util module. Next, we declare two variables: today stores today’s date as an instance of the Date object, and earthDay stores the date of Earth Day as a string. We then log the results of type checking each variable using util.types.isDate(). The types.isDate() method checks for Date objects and returns a boolean value, giving us:

true
false
Since today is a Date object, it returns true, and since earthDay is a string, it returns false!

Another important util method is .promisify(), which turns callback functions into promises. As you know, asynchronous programming is essential to Node.js. In the beginning, this asynchrony was achieved using error-first callback functions, which are still very prevalent in the Node ecosystem today. But since promises are often preferred over callbacks and especially nested callbacks, Node offers a way to turn these into promises. Let’s take a look:

function getUser (id, callback) {
  return setTimeout(() => {
    if (id === 5) {
      callback(null, { nickname: 'Teddy' })
    } else {
      callback(new Error('User not found'))
    }
  }, 1000)
}
 
function callback (error, user) {
  if (error) {
    console.error(error.message)
    process.exit(1)
  }
 
  console.log(`User found! Their nickname is: ${user.nickname}`)
}
 
getUser(1, callback) // -> `User not found`
getUser(5, callback) // -> `User found! Their nickname is: Teddy`
Here we have a function that queries a database for a specified user ID. getUser methods are very common in back-end applications, and most will also support error-first callbacks. Since a database query typically takes longer to run than other operations, we simulate the query with a setTimeout() method that executes a callback function after 1000 milliseconds (or 1 second). If the user with the specified ID is found, the callback function is executed with null passed in as the argument for the error parameter, and an object containing the returned user information is passed in as an argument for the user parameter. If the user is not found, the callback function is executed, passing in a new Error as the argument for the error parameter. A second argument for user is not necessary since the function will end in the case of an error.

This way of handling this function may seem a bit convoluted these days, but with .promisify(), we can easily change it into a modern, cleaner, and more maintainable version of itself:

const getUserPromise = util.promisify(getUser);
 
getUserPromise(id)
  .then((user) => {
      console.log(`User found! Their nickname is: ${user.nickname}`);
  })
  .catch((error) => {
      console.log('User not found', error);
  });
 
getUser(1) // -> `User not found`
getUser(5) // -> `User found! Their nickname is: Teddy`
We declare a getUserPromise variable that stores the getUser method turned into a promise using the .promisify() method. With that in place, we’re able to use getUserPromise with .then() and .catch() methods (or we could also use the async...await syntax here) to resolve the promise returned or catch any errors.

Now, this is an extremely simplified example, but it’s helpful to recognize how to use this important tool when you start working with more complex callback functions.
 Promisifing example: 
 // Require in trails module from trails.js
const trails = require('./trails.js');
// Require in util module here
const util = require('util');
// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {    
      const foundTrail = trails[trail];    
      callback(null, foundTrail)
    } else {
      callback(new Error('Trail not found!'))
    }
  }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback (error, trailData) {
  if (error) {
    console.error(error.message)
    process.exit(1)
  } else {
    const mi = trailData.miles;   
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`)
  }
}

getTrailDistance('North Country', callback)

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise('North Country')
  .then((foundTrail) => {
    const mi = foundTrail.miles;   
    const nickname = foundTrail.nickname;
      console.log(`The ${nickname} is ${mi} miles long!`);
  })
  .catch((error) => {
      console.log('Trail not found!', error);
  });

----------------
NODE.JS ESSENTIALS
The Events Module
Node is often described as having event-driven architecture. Let’s explore what that means.

In traditional imperative programming, we give the computer a series of instructions to execute in a pre-defined order. In contrast, when we write web applications, we often need to write logic to handle situations without knowing exactly when they’ll occur. For example, when programming a website, we might provide functionality for a click event without knowing when a user will trigger it. When Node was created, it applied this same concept of event-driven principles to the back-end environment.

Node provides an EventEmitter class which we can access by requiring in the events core module:

// Require in the 'events' core module
let events = require('events');
 
// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();
Each event emitter instance has an .on() method which assigns a listener callback function to a named event. The .on() method takes as its first argument the name of the event as a string and, as its second argument, the listener callback function.

Each event emitter instance also has an .emit() method which announces a named event has occurred. The .emit() method takes as its first argument the name of the event as a string and, as its second argument, the data that should be passed into the listener callback function.

let newUserListener = (data) => {
  console.log(`We have a new user: ${data}.`);
};
 
// Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener)
 
// Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'

-------------
NODE.JS ESSENTIALS
User Input/Output
If you’ve worked with JavaScript before, you’re likely familiar with the concept of input/output even if you haven’t heard it called that. At its most abstract, output is any data or feedback that a computer provides (like to a human user), while input is data provided to the computer. When we use console.log() we prompt the computer to output information to the console. In the Node environment, the console is the terminal, and the console.log() method is a “thin wrapper” on the .stdout.write() method of the process object. stdout stands for standard output.

In Node, we can also receive input from a user through the terminal using the stdin.on() method on the process object:

process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  console.log(input)
});
Here, we were able to use .on() because under the hood process.stdin is an instance of EventEmitter. When a user enters text into the terminal and hits enter, a 'data' event will be fired and our anonymous listener callback will be invoked. The userInput we receive is an instance of the Node Buffer class, so we convert it to a string before printing.

-------------------
The Error Module
The Node environment’s error module has all the standard JavaScript errors such as EvalError, SyntaxError, RangeError, ReferenceError, TypeError, and URIError as well as the JavaScript Error class for creating new error instances. Within our own code, we can generate errors and throw them, and, with synchronous code in Node, we can use error handling techniques such as try...catch statements. Note that the error module is within the global scope—there is no need to import the module with the require() statement.

Many asynchronous Node APIs use error-first callback functions—callback functions which have an error as the first expected argument and the data as the second argument. If the asynchronous task results in an error, it will be passed in as the first argument to the callback function. If no error was thrown, the first argument will be undefined.

const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
    // err was falsy
    console.log(`There was NO error. Event data: ${data}`);
  }
-------------------
The Buffer Module
In Node.js, the Buffer module is used to handle binary data. The Buffer module is within the global scope, which means that Buffer objects can be accessed anywhere in the environment without importing the module with require().

A Buffer object represents a fixed amount of memory that can’t be resized. Buffer objects are similar to an array of integers where each element in the array represents a byte of data. The buffer object will have a range of integers from 0 to 255 inclusive.

The Buffer module provides a variety of methods to handle the binary data such as .alloc(), .toString(), .from(), and .concat().

The .alloc() method creates a new Buffer object with the size specified as the first parameter. .alloc() accepts three arguments:

Size: Required. The size of the buffer
Fill: Optional. A value to fill the buffer with. Default is 0.
Encoding: Optional. Default is UTF-8.
const buffer = Buffer.alloc(5);
console.log(buffer); // Ouput: [0, 0, 0, 0, 0]
The .toString() method translates the Buffer object into a human-readable string. It accepts three optional arguments:

Encoding: Default is UTF-8.
Start: The byte offset to begin translating in the Buffer object. Default is 0.
End: The byte offset to end translating in the Buffer object. Default is the length of the buffer. The start and end of the buffer are similar to the start and end of an array, where the first element is 0 and increments upwards.
const buffer = Buffer.alloc(5, 'a');
console.log(buffer.toString()); // Output: aaaaa
The .from() method is provided to create a new Buffer object from the specified string, array, or buffer. The method accepts two arguments:

Object: Required. An object to fill the buffer with.
Encoding: Optional. Default is UTF-8.
const buffer = Buffer.from('hello');
console.log(buffer); // Output: [104, 101, 108, 108, 111]
The .concat() method joins all buffer objects passed in an array into one Buffer object. .concat() comes in handy because a Buffer object can’t be resized. This method accepts two arguments:

Array: Required. An array containing Buffer objects.
Length: Optional. Specifies the length of the concatenated buffer.
const buffer1 = Buffer.from('hello'); // Output: [104, 101, 108, 108, 111]
const buffer2 = Buffer.from('world'); // Output:[119, 111, 114, 108, 100]
const array = [buffer1, buffer2];
const bufferConcat = Buffer.concat(array);
 
console.log(bufferConcat); // Output: [104, 101, 108, 108, 111, 119, 111, 114, 108, 100]

---------
The FS Module
All of the data on a computer is organized and accessed through a filesystem. When running JavaScript code on a browser, it’s important for a script to have only limited access to a user’s filesystem. This technique of isolating some applications from others is known as sandboxing. Sandboxing protects users from malicious programs and invasions of privacy.

In the back-end, however, less restricted interaction with the filesystem is essential. The Node fs core module is an API for interacting with the file system. It was modeled after the POSIX standard for interacting with the filesystem.

Each method available through the fs module has a synchronous version and an asynchronous version. One method available on the fs core module is the .readFile() method which reads data from a provided file:

const fs = require('fs');
 
let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};
 
fs.readFile('./file.txt', 'utf-8', readDataCallback);
Let’s walk through the example above:

We required in the fs core module.
We define an error-first callback function which expects an error to be passed as the first argument and data as the second. If the error is present, the function will print Something went wrong: ${err}, otherwise, it will print Provided file contained: ${data}.
We invoked the .readFile() method with three arguments:
The first argument is a string that contains a path to the file file.txt.
The second argument is a string specifying the file’s character encoding (usually ‘utf-8’ for text files).
The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete. Node will pass the contents of file.txt into the provided callback as its second argument.

----------------

Readable Streams
In the previous exercise, we practiced reading the contents of entire files into our JavaScript programs. In more realistic scenarios, data isn’t processed all at once but rather sequentially, piece by piece, in what is known as a stream. Streaming data is often preferable since you don’t need enough RAM to process all the data at once nor do you need to have all the data on hand to begin processing it.

One of the simplest uses of streams is reading and writing to files line-by-line. To read files line-by-line, we can use the .createInterface() method from the readline core module. .createInterface() returns an EventEmitter set up to emit 'line' events:

const readline = require('readline');
const fs = require('fs');
 
const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt')
});
 
myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});
 
Let’s walk through the above code:

We require in the readline and fs core modules.
We assign to myInterface the returned value from invoking readline.createInterface() with an object containing our designated input.
We set our input to fs.createReadStream('text.txt') which will create a stream from the text.txt file.
Next we assign a listener callback to execute when line events are emitted. A 'line' event will be emitted after each line from the file is read.
Our listener callback will log to the console 'The line read: [fileLine]', where [fileLine] is the line just read.
Let’s practice making a readable stream.


-----------------
const readline = require('readline');
const fs = require('fs');

// You’re going to create a program that reads each item off of a shopping list (located in shoppingList.txt) and prints it to the console. Let’s take it one step at a time. Create a myInterface variable. Assign myInterface the value returned from invoking readline.createInterface().
// You’ll want to invoke readline.createInterface() with an object with a key of input and a value of fs.createReadStream(). Remember that fs.createReadStream() expects the file (as a string) from which it should read.
let myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

// Great work. Let’s create a listener callback function to use in the next step. Name this function printData. printData() should expect to receive some data (we named our parameter data) and it should log that data to the console in the format: Item: [data], where [data] is the argument passed into the function.
const printData = (data) => {
  console.log(`Item: ${data}`)
}

// We’re nearly there! Remember that a 'line' event will be emitted after each line from the file is read. Let’s assign our printData() function to execute whenever a 'line' event is emitted by using myInterface‘s .on() method.
myInterface.on('line', printData)
// Type node app.js in the terminal and press enter.

---------------

Writeable Streams
In the previous exercise, we were reading data from a stream, but we can also write to streams! We can create a writeable stream to a file using the fs.createWriteStream() method:

const fs = require('fs')
 
const fileStream = fs.createWriteStream('output.txt');
 
fileStream.write('This is the first line!'); 
fileStream.write('This is the second line!');
fileStream.end();
In the code above, we set the output file as output.txt. Then we .write() lines to the file. Unlike a readable stream, which ends when it has no more data to read, a writable stream could remain open indefinitely. We can indicate the end of a writable stream with the .end() method.

Let’s combine our knowledge of readable and writable streams to create a program which reads from one text file and then writes to another.


const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt');

const transformData = (line) => {
  fileStream.write(`They were out of: ${line}\n`);
}

myInterface.on('line', transformData)
--------------------

