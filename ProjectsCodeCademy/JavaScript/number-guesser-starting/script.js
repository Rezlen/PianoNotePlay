let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
 return Math.floor(Math.random()*10 );
 //return Math.random();
};

// here remover the negative/minues sign from the number, and find which nimber is nearer to our target number
function compareGuesses(humanGuess, computerGuess, targetGuess) {
const humanDiff = Math.abs(targetGuess-humanGuess); // 2-9=7
const computerDiff = Math.abs(targetGuess-computerGuess); // 2-3=1
  if (humanDiff <= computerDiff) { // 1<6
    return true;
  } else {
    return false;
   } // or insteas of this If use this: return humanDiff <= computerDiff; 
};

// here we update th winner score after each win
const updateScore = winner => {
   if (winner==='human') {
    humanScore++;
  } else if (winner==='computer') {
    computerScore++;
  } 
}; 

// here we increase the played rounds number
const advanceRound = () => {
    currentRoundNumber++;  
};