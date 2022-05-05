There are only seven fundamental data types in JavaScript, and six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code to more complex possibilities.
OBJECTS
Accessing Properties
There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver'
  };
  spaceship.homePlanet; // Returns 'Earth',
  spaceship.color; // Returns 'silver',
=================
Beraket Notion:

let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  let isActive = spaceship['Active Mission'];
  console.log(spaceship[propName]);
  ===================
  It’s important to know that although we can’t reassign an object declared with const, we can still mutate it, meaning we can add new properties and change the properties that are there.

  const spaceship = {type: 'shuttle'};
  spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
  spaceship.type = 'alien'; // Changes the value of the type property
  spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
  You can delete a property from an object with the delete operator.
  
  const spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    mission: 'Explore the universe' 
  };
   
  delete spaceship.mission;  // Removes the mission property
  ==============
  OBJECTS
Methods
When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.
Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global javascript object and .log() is a method on that object. Math is also a global javascript object and .floor() is a method on it.

You can have many METHOD in an object:
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  } 
}
alienShip.retreat();
alienShip.takeOff();
============
let spaceship = {
    passengers: [{ name: 'Rez'}],
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  let capFave = spaceship.crew.captain['favorite foods'][0];
  let firstPassenger = spaceship.passengers[0];
  console.log(firstPassenger);

  ========
  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  }
`Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.
let functionName = objectParam => {
  objectParam['Property Name'] = 'New Property Value';
};
`


  let remotelyDisable = obj => {
    obj.disabled = true;
  }
` Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.
let functionName = objectParam => {
  objectParam.propertyName = 'A Property Value';
};
`
greenEnergy(spaceship); //invoking the objects/ calling the function
remotelyDisable(spaceship); //invoking the objects/ calling the function
console.log(spaceship);
=============
// spaceship ={} is an 'object'
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      //powerFuel() {} is a 'method'
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below

for (let crewMembers in spaceship.crew) {
console.log(`${crewMembers}: ${spaceship.crew[crewMembers].name}`)
}
for (let crewMembers in spaceship.crew) {
console.log(`${spaceship.crew[crewMembers].name} : ${spaceship.crew[crewMembers].degree}`)
}
==============================Advance Objects=====================

ADVANCED OBJECTS
The this Keyword
Objects are collections of related data and functionality. We store that functionality in methods on our objects:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};
In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

goat.makeSound(); // Prints baaa
Nice, we have a goat object that can print baaa to the console. Everything seems to be working fine. What if we wanted to add a new method to our goat object called .diet() that prints the goat‘s dietType?

const goat = { // this is an object
  dietType: 'herbivore',
  makeSound() { // this is a method/function
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); // thi is the way to call an boject
// Output will be "ReferenceError: dietType is not defined"
That’s strange, why is dietType not defined even though it’s a property of goat? That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object.

Here’s where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType); // Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!
  }
};
 
goat.diet(); 
// Output: herbivore
The this keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.
=====================
ADVANCED OBJECTS
Arrow Functions and this
We saw in the previous exercise that for a method, the calling object is the object the method belongs to. If we use the this keyword in a method then the value of this is the calling object. However, it becomes a bit more complicated when we start using arrow functions for methods. Take a look at the example below:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
 
goat.diet(); // Prints undefined
In the comment, you can see that goat.diet() would log undefined. So what happened? Notice that the .diet() method is defined using an arrow function.

Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.

To read more about either arrow functions or the global object check out the MDN documentation of the global object and arrow functions.

The key takeaway from the example above is to avoid using arrow functions when using this in a method!
=================
Getters
Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method:

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'
Notice that in the getter method above:

We use the get keyword followed by a function.
We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

Getters can perform an action on the data when getting a property.
Getters can return different values using conditionals.
In a getter, we can access the properties of the calling object using this.
The functionality of our code is easier for other developers to understand.
Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.
=================
GET 

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};
console.log(robot.energyLevel);
============
SET 

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors);


=======
Factory Functions
So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. Here’s where factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!
==============
Property Value Shorthand
ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

In the previous exercise, we created a factory function that helped us create objects. We had to assign each property a key and value even though the key name was the same as the parameter name we assigned to it. To remind ourselves, here’s a truncated version of the factory function:

const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};
Imagine if we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. The example below works exactly like the example above:

const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
Notice that we don’t have to repeat ourselves for property assignments!
=============
Built-in Object Methods
In the previous exercises we’ve been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!

For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! Practice your documentation reading skills and check out: MDN’s object instance documentation.

There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few. For a comprehensive list, browse: MDN’s object instance documentation.

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, 
voiceRecognition: true},robot)


console.log(newRobot);
===========Team Stats Project==============

const team = { //first object
  _players: [
    {firstName:'Rez1', lastName:'So1', age:21}, // nested object, each are players and each are OBJECT too
    {firstName:'Rez2', lastName:'So2', age:22},
    {firstName:'Rez3', lastName:'So3', age:23},
  ],
  _games: [
    {opponent:'op1', teamPoints:'tp1', opponentPoints:21},// nested object, each are games and each are OBJECT too
    {opponent:'op2', teamPoints:'tp2', opponentPoints:22},
    {opponent:'op3', teamPoints:'tp3', opponentPoints:23},
  ],

  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){ // here by the help of METHOD we add new player to the list/players.
    let player = { // here we creat a veriable/OBJECT and we say premetters of the new player IS the same as PLAYERS premeters.
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player); //here we ACTUALLY add the player object to the team‘s _players array, team is an OBJECT alreay.
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent:newOpponent,
      teamPoints:newTeamPoints,
      opponentPoints:newOpponentPoints,
    };
    this.games.push(game);//here we ACTUALLY add the GAME object to the team‘s _game array, team is an OBJECT alreay.
  },
};
team.addPlayer('Bugs', 'Bunny',76); //here we adde a person by the help of 'addPlayer'
console.log(team.players);

team.addGame('Titans', 100, 98); //here we adde a game by the help of 'addGame'
console.log(team.games);
===============
