Introduction
When building interfaces with Express, we will run into the pattern of expecting certain information in a requested URL and using that information to identify the data that is being requested. To give an example:

app.get('/sorcerers/:sorcererName', (req, res, next) => {
  const sorcerer = Sorcerers[req.params.sorcererName];
  res.send(sorcerer.info);
});
 
app.get('/sorcerers/:sorcererName/spellhistory', (req, res, next) => {
  const sorcerer = Sorcerers[req.params.sorcererName];
  const spellHistory = Spells[sorcerer.id].history;
  res.send(spellHistory);
});
In the above code we need to extract the request parameter :sorcererName from the url in both instances, and end up duplicating the necessary code so that it appears in both routes. When working with routes that require parameters, we might find ourselves in a position where multiple different routes require the same parameter and use it to identify the same piece of data. While writing this duplicate code will get the job done, copy-and-pasting functionality does leave a bitter taste in the mouth of the principled developer. We should investigate if there is a better way to accomplish this.

------------

router.param()
Express, luckily, is mindful of the pain-point of replicated parameter-matching code and has a method specifically for this issue. When a specific parameter is present in a route, we can write a function that will perform the necessary lookup and attach it to the req object in subsequent middleware that is run.

app.param('spellId', (req, res, next, id) => {
  let spellId = Number(id);
    try {
      const found = SpellBook.find((spell) => {
        return spellId === spell.id;
      })
      if (found) {
        req.spell = found;
        next();
      } else {
        next(new Error('Your magic spell was not found in any of our tomes'));
      };
    } catch (err) {
      next(err)
    }
});
In the code above we intercept any request to a route handler with the :spellId parameter. Note that in the app.param function signature, 'spellId' does not have the leading :. The actual ID will be passed in as the fourth argument, id in this case, to the app.param callback function when a request arrives.

We look up the spell in our SpellBook array using the .find() method. If SpellBook does not exist, or some other error is thrown in this process, we pass the error to the following middleware (hopefully we’ve written some error-handling middleware, or included some externally-sourced error-handling middleware). If the spell exists in SpellBook, the .find() method will store the spell in found, and we attach it as a property of the request object (so future routes can reference it via req.spell). If the requested spell does not exist, .find() will store undefined in found, and we let future middlewares know there was an error with the request by creating a new Error object and passing it to next().

Note that inside an app.param callback, you should use the fourth argument as the parameter’s value, not a key from the req.params object.


const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const spiceRack = [
  {
    id: 1,
    name: 'cardamom',
    grams: 45,
  },
  {
    id: 2,
    name: 'pimento',
    grams: 20,
  },
  {
    id: 3,
    name: 'cumin',
    grams: 450,
  },
  {
    id: 4,
    name: 'sichuan peppercorns',
    grams: 107,
  }
];

let nextSpiceId = 5;

app.use(bodyParser.json());

// Add your code here:
app.param('spiceId', (req, res, next, id) => {
  const spiceId = Number(id);
  const spiceIndex = spiceRack.findIndex(spice => spice.id === spiceId);
  
  if (spiceIndex !== -1){
    req.spiceIndex = spiceIndex;
    next();
  } else {
    res.sendStatus(404);
  }
})


app.get('/spices/', (req, res, next) => {
  res.send(spiceRack);
});

app.post('/spices/', (req, res, next) => {
  const newSpice = req.body.spice;
  if (newSpice.name  && newSpice.grams) {
    newSpice.id = nextSpiceId++;
    spiceRack.push(newSpice);
    res.send(newSpice);
  } else {
    res.status(400).send();
  }
});

app.get('/spices/:spiceId', (req, res, next) => {
  res.send(spiceRack[req.spiceIndex]);
});

app.put('/spices/:spiceId', (req, res, next) => {
  spiceRack[req.spiceIndex] = req.body.spice;
  res.send(spiceRack[req.spiceIndex]);
});

app.delete('/spices/:spiceId', (req, res, next) => {
  spiceRack.splice(req.spiceIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
---------------

Merge Parameters
Complexity is all around us. Buildings are made from bricks and many droplets of water make a cloud. When we want to create something complex in software, we model out our base components and use composition to create these relationships.

When we’re building web endpoints, we might want to access some property of a complex object. In order to do this in Express, we can design a nested router. This would be a router that is invoked within another router. In order to pass parameters the parent router has access to, we pass a special configuration object when defining the router.

const sorcererRouter = express.Router();
const familiarRouter = express.Router({mergeParams: true});
 
sorcererRouter.use('/:sorcererId/familiars', familiarRouter);
 
sorcererRouter.get('/', (req, res, next) => {
  res.status(200).send(Sorcerers);
  next();
});
 
sorcererRouter.param('sorcererId', (req, res, next, id) => {
  const sorcerer = getSorcererById(id);   
  req.sorcerer = sorcerer;
  next();
});
 
familiarRouter.get('/', (req, res, next) => {
  res.status(200).send(`Sorcerer ${req.sorcerer} has familiars ${getFamiliars(sorcerer)}`);
});
 
app.use('/sorcerer', sorcererRouter);
In the code above we define two endpoints: /sorcerer and /sorcerer/:sorcererId/familiars. The familiars are nested into the sorcerer endpoint — indicating the relationship that a sorcerer has multiple familiars. Take careful note of the {mergeParameters: true} argument that gets passed when creating the familiarRouter. This argument tells Express that the familiarRouter should have access to parents passed into its parent router, that is, the sorcererRouter. We then tell express that the path for the familiarRouter is the same as the path for the sorcererRouter with the additional path /:sorcererId/familiars. We then can create a family of routes (a router) built by appending routes to familiarRouter‘s base: /sorcerer/:sorcererId/familiars.

---------------

Merge Parameters
Complexity is all around us. Buildings are made from bricks and many droplets of water make a cloud. When we want to create something complex in software, we model out our base components and use composition to create these relationships.

When we’re building web endpoints, we might want to access some property of a complex object. In order to do this in Express, we can design a nested router. This would be a router that is invoked within another router. In order to pass parameters the parent router has access to, we pass a special configuration object when defining the router.

const sorcererRouter = express.Router();
const familiarRouter = express.Router({mergeParams: true});
 
sorcererRouter.use('/:sorcererId/familiars', familiarRouter);
 
sorcererRouter.get('/', (req, res, next) => {
  res.status(200).send(Sorcerers);
  next();
});
 
sorcererRouter.param('sorcererId', (req, res, next, id) => {
  const sorcerer = getSorcererById(id);   
  req.sorcerer = sorcerer;
  next();
});
 
familiarRouter.get('/', (req, res, next) => {
  res.status(200).send(`Sorcerer ${req.sorcerer} has familiars ${getFamiliars(sorcerer)}`);
});
 
app.use('/sorcerer', sorcererRouter);
In the code above we define two endpoints: /sorcerer and /sorcerer/:sorcererId/familiars. The familiars are nested into the sorcerer endpoint — indicating the relationship that a sorcerer has multiple familiars. Take careful note of the {mergeParameters: true} argument that gets passed when creating the familiarRouter. This argument tells Express that the familiarRouter should have access to parents passed into its parent router, that is, the sorcererRouter. We then tell express that the path for the familiarRouter is the same as the path for the sorcererRouter with the additional path /:sorcererId/familiars. We then can create a family of routes (a router) built by appending routes to familiarRouter‘s base: /sorcerer/:sorcererId/familiars.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

app.use(bodyParser.json());

const spiceRacks = [
  {
    id: 1,
    location: 'Kitchen Countertop',
  },
  {
    id: 2,
    location: 'Pantry',
  },
  {
    id: 3,
    location: 'Outdoor Barbecue',
  }
];

let nextSpiceRackId = 4;

app.param('spiceRackId', (req, res, next, id) => {
  const idToFind = Number(id);
  const rackIndex = spiceRacks.findIndex(spiceRack => spiceRack.id === idToFind);
  if (rackIndex !== -1) {
    req.spiceRack = spiceRacks[rackIndex];
    req.spiceRackIndex = rackIndex;
    next();
  } else {
    res.status(404).send('Spice Rack Not Found.');
  }
});

app.get('/spice-racks/', (req, res, next) => {
 res.send(spiceRacks);
});

app.post('/spice-racks/', (req, res, next) => {
  const newRack = req.body.spiceRacks;
  newRack.id = nextSpiceRackId++;
  spiceRacks.push(newRack);
  res.send(newRack);
});

app.get('/spice-racks/:spiceRackId', (req, res, next) => {
  res.send(req.spiceRack);
});

app.put('/spice-racks/:spiceRackId', (req, res, next) => {
  const updatedRack = req.body.spiceRack;
  if (req.spiceRack.id !== updatedRack.id) {
    res.status(400).send('Cannot update Spice Rack Id');
  } else {
    spiceRacks[req.spiceRackIndex] = updatedRack;
    res.send(spiceRacks[req.spiceRackIndex]);
  }
});

app.delete('/spice-racks/:spiceRackId', (req, res, next) => {
  spiceRacks.splice(req.spiceRackIndex, 1);
  res.status(204).send();
});

const spicesRouter = require('./spicesRouter');

// Write your code below:
app.use('/spice-racks/:spiceRackId/spices', spicesRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
--------------

Review
router.param is a powerful tool that we can use to keep our code from repeating core functionality through routes. This is a pattern we want to frequently follow: identify multiple pieces of code that accomplish the same goal, put it into a single component, let that component do that thing (and update it when we want the thing it does to change — in a single place).

Let’s try applying that knowledge again, to another codebase. If you look at the workspace you’ll find the same problem of data-lookup happening, based on a URL parameter, multiple times in different places. Try combining that logic in a single place using router.param.

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

const vendingMachine = [
  {
    id: 1,
    name: 'Gum',
    price: 1.25,
  },
  {
    id: 7,
    name: 'Bag of chips',
    price: 3.50,
  },
  {
    id: 23,
    name: 'cumin',
    price: .75,
  }
];

let nextSnackId = 24;

app.use(bodyParser.json());

// Add your code here:
app.param('snackId', (req, res, next, id) => {
  const snackId = Number(id);
  const snackIndex = vendingMachine.findIndex(snack => snack.id === snackId);
  if (snackIndex === -1) {
    res.status(404).send('Snack not found!');
  } else {
    req.snackIndex = snackIndex;
    next();
  }
});

app.get('/snacks/', (req, res, next) => {
  res.send(vendingMachine);
});

app.post('/snacks/', (req, res, next) => {
  const newSnack = req.body;
  if (!newSnack.name || !newSnack.price) {
    res.status(400).send('Snack not found!');
  } else {
    newSnack.id = nextSnackId++;
    vendingMachine.push(newSnack);
    res.send(newSnack);
  }
});

app.get('/snacks/:snackId', (req, res, next) => {
  res.send(vendingMachine[req.snackIndex]);
});

app.put('/snacks/:snackId', (req, res, next) => {
  vendingMachine[req.snackIndex] = req.body;
  res.send(vendingMachine[req.snackIndex]);
});

app.delete('/snacks/:snackId', (req, res, next) => {
  vendingMachine.splice(req.snackIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
----------------

