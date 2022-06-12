import { animals } from 'animals';
import ReactDOM from 'react-dom';
import React from 'react';

const title = '';
 const showBackground = true;
  const background = (
      <img 
        className = 'background'
        alt = 'ocean'
        src= '/images/ocean.jpg'
      />
  );

//  For each animal, add a new <img /> to that array.
const images = [];
for (const animal in animals) {
  images.push(
    <img 
      key= {animal}
      className= 'animal'
      alt= {animal}
      src= {animals[animal].image}
      ariaLabel= {animal}
      role= 'button'
      onClick = {displayFact}
    />
  ) 
}

//add an event listener!
function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
  //grab the <p> element where we’ll add our fact. Change the .innerHTML of the <p> element to our randomly selected fact.
}

//  pass in animalFacts as the JSX expression that we want to be compiled and rendered
const animalFacts = (
  <div>
  <h1>{title || '‘Click an animal for a fun fact!’'} </h1>
  {/*each click displa its image titlec*/}
    {/* <h1>{title === '' ? '‘Click an animal for a fun fact!’' : title} </h1> */}
    {/*i.g if the left hand side is true, the right hand side also true; otherwise no diplay*/}
    {showBackground && background}
    <div className = 'animals'>
    {images}
    <p id = 'fact'></p>
    </div>
    {/* array of images, let’s inject it into the JSX expression8*/}
  </div>
)



ReactDOM.render(animalFacts, document.getElementById('root'));
