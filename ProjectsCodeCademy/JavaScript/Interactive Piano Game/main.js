// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
const keyPlay = function(event){
  event.target.style.backgroundColor = 'blue';
}
//document.addEventListener('mousedownn', keyPlay);
// Write a named function with event handler properties
const keyReturn = function(){
  event.target.style.backgroundColor = '';
}
//document.addEventListener('mouseup', keyReturn);
//Create a named function and leave the code block blank for now
let eventAssignment = function(note){
  note.onmousedown = function(){
    keyPlay(event);
  } 
  note.onmouseup = function(){
    keyReturn(event);
  } 
}

// Write a loop that runs the array elements through the function
notes.forEach(eventAssignment);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;
  // Next, a click event firing on the nextOne must change the music notes that guide the piano student through the song.
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
} 

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function(){
  nextThree.hidden = false;
  nextTwo.hidden = true;
  // Once the student has reached this point of the Happy Birthday song the lyrics changes from HAP-PY BIRTH-DAY TO YOU to HAP-PY BIRTH-DAY DEAR FRI-END.
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI';

  //A click event firing on the second button must also change the music notes to guide the piano student through the song.
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
  
  lastLyric.style.display = 'inline-block'; // Now you have the lyrics HAP-PY BIRTH-DAY DEAR FRI-. To finish the line, you must add the -END to the song box under the piano.
} 

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function(){
  startOver.hidden = false;
  nextThree.hidden = true;
  // Once the student has reached this point of the Happy Birthday song the lyrics changes from HAP-PY BIRTH-DAY TO YOU to HAP-PY BIRTH-DAY DEAR FRI-END.
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU !';

  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';

  lastLyric.style.display = 'none';
}

  //lastLyric.style.display = 'inline-block'; 

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}