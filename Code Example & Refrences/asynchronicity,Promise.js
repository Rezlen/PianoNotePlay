What is a Promise?
Promises are objects that represent the eventual outcome of an asynchronous operation. 
A Promise object can be in one of three states:

Pending: The initial state— the operation has not completed yet.
Fulfilled: The operation has completed successfully and the promise now has a resolved value. 
For example, a request’s promise might resolve with a JSON object as its value.
Rejected: The operation has failed and the promise has a reason for the failure. 
This reason is usually an Error of some kind.

We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected. 
Let’s think of a dishwasher as having the states of a promise:

Pending: The dishwasher is running but has not completed the washing cycle.
Fulfilled: The dishwasher has completed the washing cycle and is full of clean dishes.
Rejected: The dishwasher encountered a problem (it didn’t receive soap!) and returns unclean dishes.
If our dishwashing promise is fulfilled, we’ll be able to perform related tasks, such as unloading the clean dishes from the dishwasher. If it’s rejected, we can take alternate steps, such as running it again with soap or washing the dishes by hand.

All promises eventually settle, enabling us to write logic for what to do if the promise fulfills or if it rejects.

A Promise’s constructor has a single parameter, called the “executor function.” The executor function has two parameters – resolve and reject.
====================

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
  }
  
  const orderSunglasses = () => {
    return new Promise(myExecutor);
  }
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);
  ==================

  The Node setTimeout() Function
Knowing how to construct a promise is useful, but most of the time, knowing how to consume, or use, promises will be key. Rather than constructing promises, you’ll be handling Promise objects returned to you as the result of an asynchronous operation. These promises will start off pending but settle eventually.

Moving forward, we’ll be simulating this by providing you with functions that return promises which settle after some time. To accomplish this, we’ll be using setTimeout(). setTimeout() is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks to be performed after a delay. setTimeout() has two parameters: a callback function and a delay in milliseconds.

const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};
 
setTimeout(delayedHello, 2000);
Here, we invoke setTimeout() with the callback function delayedHello() and 2000. In at least two seconds delayedHello() will be invoked. But why is it “at least” two seconds and not exactly two seconds?

This delay is performed asynchronously—the rest of our program won’t stop executing during the delay. Asynchronous JavaScript uses something called the event-loop. After two seconds, delayedHello() is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. This means it might be more than two seconds before delayedHello() is actually executed.

Let’s look at how we’ll be using setTimeout() to construct asynchronous promises:

const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};
 
const prom = returnPromiseFunction();
In the example code, we invoked returnPromiseFunction() which returned a promise. We assigned that promise to the variable prom. Similar to the asynchronous promises you may encounter in production, prom will initially have a status of pending.

Let’s explore setTimeout() a bit more.
===================

console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log('print someting');
};
  setTimeout(usingSTO, 2000);
// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
=================

Success and Failure Callback Functions
To handle a “successful” promise, or a promise that resolved, we invoke .then() on the promise, passing in a success handler callback function:

const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
prom.then(handleSuccess); // Prints: 'Yay!'
Let’s break down what’s happening in the example code:

prom is a promise which will resolve to 'Yay!'.
We define a function, handleSuccess(), which prints the argument passed to it.
We invoke prom‘s .then() function passing in our handleSuccess() function.
Since prom resolves, handleSuccess() is invoked with prom‘s resolved value, 'Yay', so 'Yay' is logged to the console.
With typical promise consumption, we won’t know whether a promise will resolve or reject, so we’ll need to provide the logic for either case. We can pass both a success callback and a failure callback to .then().

let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);
Let’s break down what’s happening in the example code:

prom is a promise which will randomly either resolve with 'Yay!' or reject with 'Ohhh noooo!'.
We pass two handler functions to .then(). The first will be invoked with 'Yay!' if the promise resolves, and the second will be invoked with 'Ohhh noooo!' if the promise rejects.
Note: The success callback is sometimes called the “success handler function” or the onFulfilled function. The failure callback is sometimes called the “failure handler function” or the onRejected function. 

Let’s write some success and failure callbacks!
==============
It builds on the logic of the orderSunglasses() function you wrote in a previous exercise.

checkInventory() takes in an array representing an order and returns a promise.
If every item in the order is in stock, that promise resolves with the value "Thank you. Your order was successful."
Otherwise, the promise rejects with the value "We're sorry. Your order could not be completed because some items are sold out".
We used setTimeout() to ensure that the checkInventory() promise settles asynchronously.

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };
  
  module.exports = { checkInventory };
  ==============

  Using catch() with Promises
One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. This implementation allows us to separate our resolved logic from our rejected logic. Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() with a success handler and both cases will be handled.

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
Since JavaScript doesn’t mind whitespace, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different promise function: .catch().

The .catch() function takes only one argument, onRejected. In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. Using .catch() accomplishes the same thing as using a .then() with only a failure handler.

Let’s look at an example using .catch():

prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
Let’s break down what’s happening in the example code:

prom is a promise which randomly either resolves with 'Yay!' or rejects with 'Ohhh noooo!'.
We pass a success handler to .then() and a failure handler to .catch().
If the promise resolves, .then()‘s success handler will be invoked with 'Yay!'.
If the promise rejects, .then() will return a promise with the same rejection reason as the original promise and .catch()‘s failure handler will be invoked with that rejection reason.
Let’s practice writing .catch() functions.
===================

Chaining Multiple Promises
One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. We might make one request to a database and use the data returned to us to make another request and so on! Let’s illustrate this with another cleaning example, washing clothes:

We take our dirty clothes and put them in the washing machine. If the clothes are cleaned, then we’ll want to put them in the dryer. After the dryer runs, if the clothes are dry, then we can fold them and put them away.

This process of chaining promises together is called composition. Promises are designed with composition in mind! Here’s a simple promise chain in code:

firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
Let’s break down what’s happening in the example:

We invoke a function firstPromiseFunction() which returns a promise.
We invoke .then() with an anonymous function as the success handler.
Inside the success handler we return a new promise— the result of invoking a second function, secondPromiseFunction() with the first promise’s resolved value.
We invoke a second .then() to handle the logic for the second promise settling.
Inside that .then(), we have a success handler which will log the second promise’s resolved value to the console.
In order for our chain to work properly, we had to return the promise secondPromiseFunction(firstResolveVal). This ensured that the return value of the first .then() was our second promise rather than the default return of a new promise with the same settled value as the initial.

Let’s write some promise chains!

=====================app.js file================
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray)
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray)
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
---------------library.js file---------------

const store = {
    sunglasses: {
      inventory: 817, 
      cost: 9.99
    },
    pants: {
      inventory: 236, 
      cost: 7.99
    },
    bags: {
      inventory: 17, 
      cost: 12.99
    }
  };
  
  const checkInventory = (order) => {
    return new Promise ((resolve, reject) => {
     setTimeout(()=> {  
     const itemsArr = order.items;  
     let inStock = itemsArr.every(item => store[item[0]].inventory >= item[1]);
     
     if (inStock){
       let total = 0;   
       itemsArr.forEach(item => {
         total += item[1] * store[item[0]].cost
       });
       console.log(`All of the items are in stock. The total cost of the order is ${total}.`);
       resolve([order, total]);
     } else {
       reject(`The order could not be completed because some items are sold out.`);
     }     
  }, generateRandomDelay());
   });
  };
  
  const processPayment = (responseArray) => {
    const order = responseArray[0];
    const total = responseArray[1];
    return new Promise ((resolve, reject) => {
     setTimeout(()=> {  
     let hasEnoughMoney = order.giftcardBalance >= total;
     // For simplicity we've omited a lot of functionality
     // If we were making more realistic code, we would want to update the giftcardBalance and the inventory
     if (hasEnoughMoney) {
       console.log(`Payment processed with giftcard. Generating shipping label.`);
       let trackingNum = generateTrackingNumber();
       resolve([order, trackingNum]);
     } else {
       reject(`Cannot process order: giftcard balance was insufficient.`);
     }
     
  }, generateRandomDelay());
   });
  };
  
  
  const shipOrder = (responseArray) => {
    const order = responseArray[0];
    const trackingNum = responseArray[1];
    return new Promise ((resolve, reject) => {
     setTimeout(()=> {  
       resolve(`The order has been shipped. The tracking number is: ${trackingNum}.`);
  }, generateRandomDelay());
   });
  };
  
  
  // This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number
  function generateTrackingNumber() {
    return Math.floor(Math.random() * 1000000);
  }
  
  // This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time
  function generateRandomDelay() {
    return Math.floor(Math.random() * 2000);
  }
  
  module.exports = {checkInventory, processPayment, shipOrder};

  -----------outcome e.g-----------
  $ node app.js
All of the items are in stock. The total cost of the order is 35.97.
Payment processed with giftcard. Generating shipping label.
The order has been shipped. The tracking number is: 8779.
$ 
  ====================================

  Using Promise.all()
  When done correctly, promise composition is a great way to handle situations where asynchronous operations depend on each other or execution order matters. What if we’re dealing with multiple promises, but we don’t care about the order? Let’s think in terms of cleaning again.
  
  For us to consider our house clean, we need our clothes to dry, our trash bins emptied, and the dishwasher to run. We need all of these tasks to complete but not in any particular order. Furthermore, since they’re all getting done asynchronously, they should really all be happening at the same time!
  
  To maximize efficiency we should use concurrency, multiple asynchronous operations happening together. With promises, we can do this with the function Promise.all().
  
  Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:
  
  If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value from each promise in the argument array.
  If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.
  Let’s look at a code example:
  
  let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
   
  myPromises
    .then((arrayOfValues) => {
      console.log(arrayOfValues);
    })
    .catch((rejectionReason) => {
      console.log(rejectionReason);
    });
  Let’s break down what’s happening:
  
  We declare myPromises assigned to invoking Promise.all().
  We invoke Promise.all() with an array of three promises— the returned values from functions.
  We invoke .then() with a success handler which will print the array of resolved values if each promise resolves successfully.
  We invoke .catch() with a failure handler which will print the first rejection message if any promise rejects.
  ==============================

  -----------app.js file-------------
  const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);



  -----------------library.js file ----------------
  const checkAvailability = (itemName, distributorName) => {
    console.log(`Checking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (restockSuccess()) {
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else {
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};

module.exports = { checkAvailability };


// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
    return (Math.random() > .2);
}
=================================
True: promise1 and promise2 both produce the same output.

const examplePromise1 = new Promise((resolve, reject) => { reject('Uh-oh!') });
const examplePromise2 = new Promise((resolve, reject) => { reject('Uh-oh!') });
 
const onFulfill = value => {console.log(value)};
const onReject = reason => {console.log(reason)};
 
const promise1 = examplePromise1.then(onFulfill, onReject);
 
const promise2 = examplePromise2.then(onFulfill).catch(onReject);

--------------------------
let link = state => {
  return new Promise(function(resolve, reject) {
    if (state) { 
      resolve('success'); 
    } else { 
      reject('error');
    }
  });
}
 
let promiseChain = link(true);
 
promiseChain
.then( data => {  
   console.log(data + " 1");
   return link(true);
})
.then( data => {
   console.log(data+ " 2");
   return link(true);
});

outcom=
success 1
success 2
--------------------------