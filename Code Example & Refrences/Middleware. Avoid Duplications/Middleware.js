MIDDLEWARE
Introduction
Writing code is a creative process. Programmers will be quick to differ in opinion on whether the solution to a problem should be implemented in one way or another — citing tradeoffs in algorithms, structures, or even languages. Due to these trade-offs, the problems programmers face most frequently will have several different solutions, all correct but all written differently with various factors considered. Because “correct” code can take so many different forms, developers have cultural notions of code quality that is somewhat independent of these decisions.

One concept that is central to the notion of quality code is that all code is read many, many more times than it is written. Maintaining and updating code takes up much more of a software developer’s time than production. There are many ways to make this less of a burden, and these techniques frequently correspond to code quality principles. Naming variables consistently so that they’re identifiable is one way to improve the readability of a codebase. Another pillar of code quality is avoiding duplication of code within a codebase.

Code duplication is an invitation for bugs. If incorrect code is copy-and-pasted in multiple places, a developer might remedy the flaws in only a few of those places and fail to fix the buggy code everywhere. In this course, we will investigate several ways to avoid replication and reduce complexity. In programming in general, this often means putting the reused code into reusable containers like functions and objects. In Express specifically, this will also mean composing our desired functionality into a series of middleware functions.


const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};

app.get('/', (req, res, next) => {
  console.log('GET Request Received');
  res.send(jellybeanBag);
  console.log('Response Sent');
});

app.post('/', (req, res, next) => {
  console.log('POST Request Received');
  const beanName = req.params.beanName;
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const body = JSON.parse(queryData);
    const beanName = body.name;
    if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
      return res.status(400).send('Bag with that name already exists!');
    }
    const numberOfBeans = Number(body.number) || 0;
    jellybeanBag[beanName] = {
      number: numberOfBeans
    };
    res.send(jellybeanBag[beanName]);
    console.log('Response Sent');
  });
});

app.get('/:beanName', (req, res, next) => {
  console.log('GET Request Received');
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    console.log('Response Sent');
    return res.status(404).send('Bean with that name does not exist');
  }
  res.send(jellybeanBag[beanName]);
  console.log('Response Sent');
});


app.post('/:beanName/add', (req, res, next) => {
  console.log('POST Request Received');
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const numberOfBeans = Number(JSON.parse(queryData).number) || 0;
    jellybeanBag[beanName].number += numberOfBeans;
    res.send(jellybeanBag[beanName]);
    console.log('Response Sent');
  });
});

app.post('/:beanName/remove', (req, res, next) => {
  console.log('POST Request Received');
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const numberOfBeans = Number(JSON.parse(queryData).number) || 0;
    if (jellybeanBag[beanName].number < numberOfBeans) {
      return res.status(400).send('Not enough beans in the jar to remove!');
    }
    jellybeanBag[beanName].number -= numberOfBeans;
    res.send(jellybeanBag[beanName]);
    console.log('Response Sent');
  });
});

app.delete('/:beanName', (req, res, next) => {
  console.log('DELETE Request Received');
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  jellybeanBag[beanName] = null;
  res.status(204).send();
  console.log('Response Sent');
});

app.put('/:beanName/name', (req, res, next) => {
  console.log('PUT Request Received');
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  let queryData = '';
  req.on('data', (data) => {
    queryData += data;
  });

  req.on('end', () => {
    const newName = JSON.parse(queryData).name;
    jellybeanBag[newName] = jellybeanBag[beanName];
    jellybeanBag[beanName] = null;
    res.send(jellybeanBag[newName]);
    console.log('Response Sent');
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
------------------

DRYing Code With Functions (“Don’t Repeat Yourself” (DRY).)
Beyond labeling, good code will leverage the strength of its programming language to avoid performing the same tasks

Take a look at the following code:

const addFive = number => {
  const fiveAdded = number + 5;
  console.log(`Your number plus 5 is ${fiveAdded}`);
}
 
const addTen = number => {
  const tenAdded = number + 10;
  console.log(`Your number plus 10 is ${tenAdded}`);
}
 
const addTwenty = number => {
  const twentyAdded = number + 20;
  console.log(`Your number plus 20 is ${twentyAdded}`);
}
While these three function definitions are not exact duplicates of each other, a well-designed application will be flexible enough to join similar functionality in a single element.

const addNumber = (number, addend) => {
  const numAdded = number + addend;
  console.log(`Your number plus ${addend} is ${numAdded}`);
}
As you can see, by adding an argument to the earlier functions we can simplify our application code which will ultimately save time should we realize that we also want an addFifty() function and an addHundred() function.

Code that performs the same task in multiple places is repetitive, and the quality coder’s credo is “Don’t Repeat Yourself” (DRY). If a program performs similar tasks without refactoring into a function, it is said to “violate DRY”. “Violating DRY” is a programmer’s way of complaining: “This script is saying the same thing over and over! We can do the same thing with less code!” Let’s try to not repeat ourselves in this codebase by repurposing some of the more glaringly repeated code into functions we can call instead.

----------------

MIDDLEWARE
DRYing Routes With app.use()
By now you may have noticed that our efforts to not repeat ourselves have resulted in us putting the same function call over and over throughout our code. Isn’t that somewhat contradictory? You would be absolutely right to think so.

So how do we get code to run every time one of our Express routes is called without repeating ourselves? We write something called middleware. Middleware is code that executes between a server receiving a request and sending a response. It operates on the boundary, so to speak, between those two HTTP actions.

In Express, middleware is a function. Middleware can perform logic on the request and response objects, such as: inspecting a request, performing some logic based on the request, attaching information to the response, attaching a status to the response, sending the response back to the user, or simply passing the request and response to another middleware. Middleware can do any combination of those things or anything else a Javascript function can do.

app.use((req, res, next) => {
  console.log('Request received');
});
The previous code snippet is an example of middleware in action. app.use() takes a callback function that it will call for every received request. In this example, every time the server receives a request, it will find the first registered middleware function and call it. In this case, the server will find the callback function specified above, call it, and print out 'Request received'.

You might be wondering what else our application is responsible for that isn’t related to middleware. The answer is not much. To quote the Express documentation:

An Express application is essentially a series of middleware function calls.

It is precisely this service that we leverage Express for. In addition to performing the routing that allows us to communicate appropriate data for each separate endpoint, we can perform application logic we need by implementing the necessary middleware.

---------------
MIDDLEWARE
next()
It seems like our middleware was successful — it logged out

The middleware stack is processed in the order they appear in the application file, such that middleware defined later happens after middleware defined before. It’s important to note that this is regardless of method — an app.use() that occurs after an app.get() will get called after the app.get(). Observe the following code:

app.use((req, res, next) => {
  console.log("A sorcerer approaches!");
  next();
});
 
app.get('/magic/:spellname', (req, res, next) => {
  console.log("The sorcerer is casting a spell!");
  next();
});
 
app.get('/magic/:spellname', (req, res, next) => {
  console.log(`The sorcerer has cast ${req.params.spellname}`);
  res.status(200).send();
});
 
app.get('/magic/:spellname', (req, res, next) => {
  console.log("The sorcerer is leaving!");
});
 
// Accessing http://localhost:4001/magic/fireball 
// Console Output:
// "A sorcerer approaches!"
// "The sorcerer is casting a spell!"
// "The sorcerer has cast fireball"
In the above code, the routes are called in the order that they appear in the file, provided the previous route called next() and thus passed control to the next middleware. We can see that the final matching call was not printed. This is because the previous middleware did not invoke the next() function to run the following middleware.

An Express middleware is a function with three parameters: (req, res, next). The sequence is expressed by a set of callback functions invoked progressively after each middleware performs its purpose. The third argument to a middleware function, next, should get explicitly called as the last part of the middleware’s body. This will hand off the processing of the request and the construction of the response to the next middleware in the stack.

-----------------
MIDDLEWARE
Request And Response Parameters
Recall the function signature of an Express middleware, i.e., (req, res, next). You might recognize this signature as being the very same that we’ve used for Express routes in the past. Well there’s a perfectly good reason for that: Express routes are middleware. Every route created in Express is also a middleware function handling the request and response objects at that part of the stack. Express routes also have the option of sending a response body and status code and closing the connection. These two features are a byproduct of Express routes being middleware, because all Express middleware functions have access to the request, the response, and the next middleware in the stack.

-----------------
Route-Level app.use() - Single Path
Now that we’ve managed to refactor our duplicate code into middleware functions, we should be noticing that our code contains much less repetition than before. Unfortunately, we still have duplicate code in some of our routes. Since this code isn’t shared by all of our routes, the previous syntax of app.use() won’t work. Let’s see what the Express documentation for app.use() has to say about this use case. This is the app.use() function signature:

app.use([path,] callback [, callback...])

In documentation for many programming languages, optional arguments for functions are placed in square brackets ([]). This means that app.use() takes an optional path parameter as its first argument. We can now write middleware that will run for every request at a specific path.

app.use('/sorcerer', (req, res, next) => {
  console.log('User has hit endpoint /sorcerer');
  next();
});
In the example above the console will print 'User has hit endpoint /sorcerer', if someone visits our web page’s ‘/sorcerer’ endpoint. Since the method app.use() was used, it won’t matter if the user is performing a GET,a POST, or any other kind of HTTP request. Since the path was given as an argument to app.use(), this middleware function will not execute if the user hits a different path (for instance: '/spells' or '/sorcerer/:sorcerer_id').

const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};

// Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} Request Received`);
  next();
});

// Add your code below:
app.use('/beans/:beanName', (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    console.log('Response Sent');
    return res.status(404).send('Bean with that name does not exist');
  }
  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});


app.get('/beans/', (req, res, next) => {
  res.send(jellybeanBag);
  console.log('Response Sent');
});

app.post('/beans/', (req, res, next) => {
  let bodyData = '';
  req.on('data', (data) => {
    bodyData += data;
  });

  req.on('end', () => {
    const body = JSON.parse(bodyData);
    const beanName = body.name;
    if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
      return res.status(400).send('Bean with that name already exists!');
    }
    const numberOfBeans = Number(body.number) || 0;
    jellybeanBag[beanName] = {
      number: numberOfBeans
    };
    res.send(jellybeanBag[beanName]);
    console.log('Response Sent');
  });
});

app.get('/beans/:beanName', (req, res, next) => {
  res.send(req.bean);
  console.log('Response Sent');
});

app.post('/beans/:beanName/add', (req, res, next) => {
  let bodyData = '';
  req.on('data', (data) => {
    bodyData += data;
  });

  req.on('end', () => {
    const numberOfBeans = Number(JSON.parse(bodyData).number) || 0;
    req.bean.number += numberOfBeans;
    res.send(req.bean);
    console.log('Response Sent');
  });
});

app.post('/beans/:beanName/remove', (req, res, next) => {
  let bodyData = '';
  req.on('data', (data) => {
    bodyData += data;
  });

  req.on('end', () => {
    const numberOfBeans = Number(JSON.parse(bodyData).number) || 0;
    if (req.bean.number < numberOfBeans) {
      return res.status(400).send('Not enough beans in the jar to remove!');
    }
    req.bean.number -= numberOfBeans;
    res.send(req.bean);
    console.log('Response Sent');
  });
});

app.delete('/beans/:beanName', (req, res, next) => {
  req.bean = null;
  res.status(204).send();
  console.log('Response Sent');
});

app.put('/beans/:beanName/name', (req, res, next) => {
  let bodyData = '';
  req.on('data', (data) => {
    bodyData += data;
  });

  req.on('end', () => {
    const newName = JSON.parse(bodyData).name;
    jellybeanBag[newName] = jellybeanBag[req.beanName];
    jellybeanBag[req.beanName] = null;
    res.send(jellybeanBag[newName]);
    console.log('Response Sent');
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
-------------------
Control Flow With next()
We’ve experienced writing middleware that performs its function and hands off the request and response objects to the next function in the stack, but why exactly do we have to write next() at the end of every middleware? If it always needs to be at the end of every function we write, it seems like an unnecessary piece of boilerplate. You might be surprised to learn that we aren’t going to introduce a way to automatically hand off the request and response objects without having to repeatedly write next(). Rather, we’re going to explore why it is useful to have next() as a separate function call. The biggest reason being we don’t always want to pass control to the next middleware in the stack.

For example, when designing a system with confidential information, we want to be able to selectively show that information to authorized users. In order to do that, we would create middleware that tests a user’s permissions. If the user has the permission necessary, we would continue through the middleware stack by calling next(). If it fails, we would want to let the user know that they’re not allowed to see the information they’re trying to access.

-------------
Route-Level app.use() - Multiple Paths
We learned that app.use() takes a path parameter, but we never fully investigated what that path parameter could be. Let’s take another look at the Express documentation for app.use():

“argument: path

description: The path for which the middleware function is invoked; can be any of:

A string representing a path.
A path pattern.
A regular expression pattern to match paths.
An array of combinations of any of the above. “
So app.use() can take an array of paths! That seems like a handy way to rewrite the code from our last exercise so that we don’t have to put the same code in two different routes with different paths.
-----------
Middleware Stacks
Recall that middleware is just a function with a specific signature, namely (req, res, next). We have, for the most part, been using anonymous function definitions for this because our middleware has only been relevant to the route invoking it. There is nothing stopping us from defining functions and using them as middleware though. That is to say:

const logging = (req, res, next) => {
  console.log(req);
  next();
};
 
app.use(logging);
is a valid and reasonable way to introduce logging throughout all paths. It is also modifiable so that you can remove the app.use() line and replace it with a specific route method, or sprinkle it throughout the application without it being universal.

Up until this point we’ve only been giving each middleware-accepting method a single callback. With modular pieces like this, it is useful to know that methods such as app.use(), app.get(), app.post(), and so on all can take multiple callbacks as additional parameters. This results in code that looks like the following:

const authenticate = (req, res, next) => {
  ...
};
 
const validateData = (req, res, next) => {
  ...
};
 
const getSpell = (req, res, next) => {
  res.status(200).send(getSpellById(req.params.id));
};
 
const createSpell = (req, res, next) => {
  createSpellFromRequest(req);
  res.status(201).send();
};
 
const updateSpell = (req, res, next) => {
  updateSpellFromRequest(req);
  res.status(204).send();
}
 
app.get('/spells/:id', authenticate, getSpell);
 
app.post('/spells', authenticate, validateData, createSpell);
 
app.put('/spells/:id', authenticate, validateData, updateSpell);
In the above code sample, we created reusable middleware for authentication and data validation. We use the authenticate() middleware to verify a user is logged in before proceeding with the request and we use the validateData() middleware before performing the appropriate create or update function. Additional middleware can be placed at any point in this chain.

-----------------
Open-Source Middleware: Logging
Knowing how to write middleware, we should now feel inspired to solve all the problems that come at us by writing code. It’s encouraging to know how to fix an issue. If we find a solution we don’t need to write, however, it will allow us to work faster and more intelligently to focus on the problems that differentiate our application from others.

To illustrate: if we needed to write a web server from scratch every time we wanted to build a web application, we’d waste a lot of time solving problems that have been solved countless times before and ignoring perfectly good pre-existing solutions. Luckily for us web developers, Express already exists as an open-source package that we can install and use to build upon. There is a huge ecosystem of Javascript packages that will solve so many of the problems that developers frequently run into.

In the workspace you’ll see what code looks like using unnecessary custom solutions and lots of lines calling console.log(). It’s not bad code, but it introduces complexity that could be avoided. Time spent thinking about and writing code that accomplishes common tasks is time that could be better spent on thinking about and writing code that is unique to your application.

We will replace the logging code in the workspace with morgan, an open-source library for logging information about the HTTP request-response cycle in a server application. morgan() is a function that will return a middleware function, to reiterate: the return value of morgan() will be a function, that function will have the function signature (req, res, next) that can be inserted into an app.use(), and that function will be called before all following middleware functions. Morgan takes an argument to describe the formatting of the logging output. For example, morgan('tiny') will return a middleware function that does a “tiny” amount of logging. With morgan in place, we’ll be able to remove the existing logging code. Once we see how fast it is to add logging with morgan, we won’t have to spend time in the future trying to figure out how to replicate that functionality.

const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};

const bodyParser = (req, res, next) => {
  let queryData = '';
  req.on('data', (data) => {
    data = data.toString();
    queryData += data;
  });
  req.on('end', () => {
    if (queryData) {
      req.body = JSON.parse(queryData);
    }
    next();
  });
};

// Logging Middleware // We will replace the logging code in the workspace with morgan, an open-source library for logging information about the HTTP request-response cycle in a server application. morgan() is a function that will return a middleware function, to reiterate: the return value of morgan() will be a function, that function will have the function signature (req, res, next) that can be inserted into an app.use(), and that function will be called before all following middleware functions. Morgan takes an argument to describe the formatting of the logging output.
app.use(morgan('dev')); // dev: Concise output colored by response status for development use. The :status token will be colored green for success codes, red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for information codes. :method :url :status :response-time ms - :res[content-length]

app.use('/beans/:beanName', (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});

app.get('/beans/', (req, res, next) => {
  res.send(jellybeanBag);
});

app.post('/beans/', bodyParser, (req, res, next) => {
  const body = req.body;
  const beanName = body.name;
  if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
    return res.status(400).send('Bean with that name already exists!');
  }
  const numberOfBeans = Number(body.number) || 0;
  jellybeanBag[beanName] = {
    number: numberOfBeans
  };
  res.send(jellybeanBag[beanName]);
});

app.get('/beans/:beanName', (req, res, next) => {
  res.send(req.bean);
});

app.post('/beans/:beanName/add', bodyParser, (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  req.bean.number += numberOfBeans;
  res.send(req.bean);
});

app.post('/beans/:beanName/remove', bodyParser, (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  if (req.bean.number < numberOfBeans) {
    return res.status(400).send('Not enough beans in the jar to remove!');
  }
  req.bean.number -= numberOfBeans;
  res.send(req.bean);
});

app.delete('/beans/:beanName', (req, res, next) => {
  const beanName = req.beanName;
  jellybeanBag[beanName] = null;
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

-------------

Documentation
With software we’ve personally written, invocation is a simple process. We already know what the code does, what it expects, and may have some notion how things could go wrong. Losing this intuition is the biggest downside to using open-source packages.

This is not meant to be discouraging. The best open-source packages have extremely well written documentation. Documentation is a resource, presented by the package’s author(s), that includes information about what software is, what it does, and how to use it. We’ve seen the Express documentation in this course, and now we’re going to look at the morgan documentation.


--------------------
Open-Source Middleware: Body Parsing
Being able to use open-source middleware can certainly make our jobs as programmers a lot easier. Not only does it prevent us from having to write the same code every time we want to accomplish a common task, it allows us to perform some tasks that would take a lot of research for us to implement.

When we implement middleware, we take in the req object, so that we can see information about the request. This object includes a good deal of important information about the request that we can use to inform our response, however for some requests it misses a fundamental piece. An HTTP request can include a body, a set of information to be transmitted to the server for processing. This is useful when the end user needs to send information to the server. If you’ve ever uploaded a post onto a social media website or filled out a registration form chances are you’ve sent an HTTP request with a body. The lucky thing about using open-source middleware is that even though parsing the body of an HTTP request is a tricky operation requiring knowledge about network data transfer concepts, we easily manage it by importing a library to do it for us.

If we look at our bodyParser, we see a simplified version of how one might perform request body parsing. Let’s see if there’s a better way that doesn’t involve us trying to create our own body-parser. Maybe we can find a library that does it for us?

Take a look at body-parser. “Node.js body parsing middleware”, that’s just what we needed! Let’s see if we can use this dependency instead of trying to manage our own body-parsing library.
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};

// Logging Middleware
app.use(morgan('dev'));
// Body parsing middleware
app.use(bodyParser.json());

app.use('/:beanName', (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});

app.get('/beans/', (req, res, next) => {
  res.send(jellybeanBag);
});

app.post('/beans/', (req, res, next) => {
  const body = req.body;
  const beanName = body.name;
  if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
    return res.status(400).send('Bag with that name already exists!');
  }
  const numberOfBeans = Number(body.number) || 0;
  jellybeanBag[beanName] = {
    number: numberOfBeans
  };
  res.send(jellybeanBag[beanName]);
});

app.get('/beans/:beanName', (req, res, next) => {
  res.send(req.bean);
});

app.post('/beans/:beanName/add', (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  req.bean.number += numberOfBeans;
  res.send(req.bean);
});

app.post('/beans/:beanName/remove', (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  if (req.bean.number < numberOfBeans) {
    return res.status(400).send('Not enough beans in the jar to remove!');
  }
  req.bean.number -= numberOfBeans;
  res.send(req.bean);
});

app.delete('/beans/:beanName', (req, res, next) => {
  const beanName = req.beanName;
  jellybeanBag[beanName] = null;
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
------------
Error-Handling Middleware
We’re almost finished with our Code Quality Checklist, there’s just one last problem to fix! When an error is thrown somewhere in our code, we want to be able to communicate that there was a problem to the user. A programming error is never something to be ashamed of. It’s simply another situation for which we should be prepared.

Error handling middleware needs to be the last app.use() in your file. If an error happens in any of our routes, we want to make sure it gets passed to our error handler. The middleware stack progresses through routes as they are presented in a file, therefore the error handler should sit at the bottom of the file. How do we write it?

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
Based on the code above, we can see that error-handling middleware is written much like other kinds of middleware. The biggest difference is that there is an additional parameter in our callback function, err. This represents the error object, and we can use it to investigate the error and perform different tasks depending on what kind of error was thrown. For now, we only want to send an HTTP 500 status response to the user.

Express has its own error-handler, which catches errors that we haven’t handled. But if we anticipate an operation might fail, we can invoke our error-handling middleware. We do this by passing an error object as an argument to next(). Usually, next() is called without arguments and will proceed through the middleware stack as expected. When called with an error as the first argument, however, it will call any applicable error-handling middleware.

app.use((req, res, next) => {
  const newValue = possiblyProblematicOperation();
  if (newValue === undefined) {
    let undefinedError = new Error('newValue was not defined!');
    return next(undefinedError);
  }
  next();
});
 
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(err.message);
});
In this segment we assign the return value of the function possiblyProblematicOperation() to newValue. Then we check to see if this function returned anything at all. If it didn’t, we create a new Error and pass it to next(). This prompts the error-handling middleware to send a response back to the user, but many other error-handling techniques could be employed (like logging, re-attempting the failed operation, and/or emailing the developer).

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};

// Body-parsing Middleware
app.use(bodyParser.json());

// Logging Middleware
if (!process.env.IS_TEST_ENV) {
  app.use(morgan('dev'));
}

app.use('/beans/:beanName', (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    const error = new Error('Bean with that name does not exist')
    error.status = 404;
    return next(error);
  }
  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});

app.get('/beans/', (req, res, next) => {
  res.send(jellybeanBag);
});

app.post('/beans/', (req, res, next) => {
  const body = req.body;
  const beanName = body.name;
  if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
    const error = new Error('Bean with that name already exists!')
    error.status = 400;
    return next(error);
  }
  const numberOfBeans = Number(body.number) || 0;
  jellybeanBag[beanName] = {
    number: numberOfBeans
  };
  res.send(jellybeanBag[beanName]);
});

app.get('/beans/:beanName', (req, res, next) => {
  res.send(req.bean);
});

app.post('/beans/:beanName/add', (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  req.bean.number += numberOfBeans;
  res.send(req.bean);
});

app.post('/beans/:beanName/remove', (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  if (req.bean.number < numberOfBeans) {
    const error = new Error('Not enough beans in the jar to remove!')
    error.status = 400;
    return next(error);
  }
  req.bean.number -= numberOfBeans;
  res.send(req.bean);
});

app.delete('/beans/:beanName', (req, res, next) => {
  const beanName = req.beanName;
  jellybeanBag[beanName] = null;
  res.status(204).send();
});

// Add your error handler here:
app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500;
  }
  res.status(err.status).send(err.message);
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
---------------

Discovering Open-Source Middleware
While it’s good to know how to write error-handling middleware, it’s a natural curiosity that causes us to ask “isn’t error-handling a common task? Has someone written middleware that performs it for us?” Let’s take a look at the list of Express middleware. This list of middleware includes many things the creators of Express maintain, some of which was included in Express in previous versions. The movement on the Express team’s part to identify separate functionality and modularize their code into independent factors allows developers like us to only take what we need. In this way, they can make major updates to each middleware individually and programmers who do not use that middleware won’t have to worry about their version of Express being out of date.

Can you find something on that list that will help us handle errors?

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler')
app.use(errorHandler());

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const jellybeanBag = {
  mystery: {
    number: 4
  },
  lemon: {
    number: 5
  },
  rootBeer: {
    number: 25
  },
  cherry: {
    number: 3
  },
  licorice: {
    number: 1
  }
};

// Body-parsing Middleware
app.use(bodyParser.json());

// Logging Middleware
app.use(morgan('dev'));

app.use('/beans/:beanName', (req, res, next) => {
  const beanName = req.params.beanName;
  if (!jellybeanBag[beanName]) {
    return res.status(404).send('Bean with that name does not exist');
  }
  req.bean = jellybeanBag[beanName];
  req.beanName = beanName;
  next();
});

app.get('/beans/', (req, res, next) => {
  res.send(jellybeanBag);
});

app.post('/beans/', (req, res, next) => {
  const body = req.body;
  const beanName = body.name;
  if (jellybeanBag[beanName] || jellybeanBag[beanName] === 0) {
    return res.status(400).send('Bean with that name already exists!');
  }
  const numberOfBeans = Number(body.number) || 0;
  jellybeanBag[beanName] = {
    number: numberOfBeans
  };
  res.send(jellybeanBag[beanName]);
});

app.get('/beans/:beanName', (req, res, next) => {
  res.send(req.bean);
});

app.post('/beans/:beanName/add', (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  req.bean.number += numberOfBeans;
  res.send(req.bean);
});

app.post('/beans/:beanName/remove', (req, res, next) => {
  const numberOfBeans = Number(req.body.number) || 0;
  if (req.bean.number < numberOfBeans) {
    return res.status(400).send('Not enough beans in the jar to remove!');
  }
  req.bean.number -= numberOfBeans;
  res.send(req.bean);
});

app.delete('/beans/:beanName', (req, res, next) => {
  const beanName = req.beanName;
  jellybeanBag[beanName] = null;
  res.status(204).send();
});

app.put('/beans/:beanName/name', (req, res, next) => {
  const beanName = req.beanName;
  const newName = req.body.name;
  jellybeanBag[newName] = req.bean;
  jellybeanBag[beanName] = null;
  res.send(jellybeanBag[newName]);
});

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

============Another example================
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const cards = [
  {
    id: 1,
    suit: 'Clubs',
    rank: '2'
  },
  {
    id: 2,
    suit: 'Diamonds',
    rank: 'Jack'
  },
  {
    id: 3,
    suit: 'Hearts',
    rank: '10'
  }
];
let nextId = 4;

// Logging
if (!process.env.IS_TEST_ENV) {
  app.use(morgan('short'));
}

// Parsing
app.use(bodyParser.json());

// Find card
app.use('/cards/:cardId', (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const cardIndex = cards.findIndex(card => card.id === cardId);
  if (cardIndex === -1) {
    return res.status(404).send('Card not found');
  }
  req.cardIndex = cardIndex;
  next();
});

const validateCard = (req, res, next) => {
  const newCard = req.body;
  const validSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  if (validSuits.indexOf(newCard.suit) === -1 || validRanks.indexOf(newCard.rank) === -1) {
    return res.status(400).send('Invalid card!');
  }
  next();
};

// Get all Cards
app.get('/cards/', (req, res, next) => {
  res.send(cards);
});

// Create a new Card
app.post('/cards/', validateCard, (req, res, next) => {
  const newCard = req.body;
  newCard.id = nextId++;
  cards.push(newCard);
  res.status(201).send(newCard);
});

// Get a single Card
app.get('/cards/:cardId', (req, res, next) => {
  res.send(cards[req.cardIndex]);
});

// Update a Card
app.put('/cards/:cardId', validateCard, (req, res, next) => {
  const newCard = req.body;
  const cardId = Number(req.params.cardId);
  if (!newCard.id || newCard.id !== cardId) {
    newCard.id = cardId;
  }
  cards[req.cardIndex] = newCard;
  res.send(newCard);
});

// Delete a Card
app.delete('/cards/:cardId', (req, res, next) => {
  cards.splice(req.cardIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});




