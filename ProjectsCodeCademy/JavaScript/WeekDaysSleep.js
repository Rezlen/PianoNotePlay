const getSleepHours = day => {
    day=day.toLowerCase(); 
    switch(day) {
      case 'monday':
    return 8;
        case 'tuesday':
    return 5;
        case 'wednesday':
    return 7;
        case 'thursday':
    return 2;
        case 'friday':
    return 8;
        case 'saturday':
    return 1;
        case 'sunday':
    return 3;
    default:
    return 'Error';
    }
  };
  
const getActualSleepHours= () => // IMPILICIT RETURN does not use kerly berecets
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday');

    const getIdealSleepHours= () => {
    const idealHours = 8;
    return idealHours*7;
};
  
const calculateSleepDebt = () => {
    const actualSleepHours= getActualSleepHours();
    const idealSleepHours= getIdealSleepHours();
    if (actualSleepHours===idealSleepHours) {
        console.log('User got the perfect amount of sleep.');
    };
    if (actualSleepHours>idealSleepHours) {
        console.log('User got more sleep than needed.');
    };
    if (actualSleepHours< idealSleepHours) {
        console.log('User should get some rest.');
    };
};
  
  console.log(getSleepHours('tuesday'));
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  calculateSleepDebt();
  
  
  
  
  



/*
JAVASCRIPT SYNTAX, PART I
Rock, Paper, or Scissors
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.

Tasks
13/14 Complete
Mark the tasks as complete by checking them off
1.
The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.

Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.


Stuck? Get a hint
2.
Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ with different capitalizations, begin by utilizing JavaScript’s toLowerCase() function to make the userInput all lowercase.

You can use code like this:

userInput = userInput.toLowerCase();

Stuck? Get a hint
3.
When getting the user’s choice, you should also check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.

Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log to print an error message to the console.


Stuck? Get a hint
4.
Test the function by calling it with valid and invalid input, and printing the results to the console.

You can delete this when you know your function works.


Stuck? Get a hint
5.
Now we need to have the computer make a choice.

Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.


Stuck? Get a hint
6.
Test the function by calling it multiple times and printing the results to the console.

You can delete this when you know your function works.


Stuck? Get a hint
7.
Now it’s time to determine a winner.

Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.

Let’s deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.


Stuck? Get a hint
8.
If the game is not a tie, you’ll need to determine a winner.

Begin by writing an if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, write another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not, return a message that the user won.


Stuck? Get a hint
9.
Next, write another if statement for if the userChoice is 'paper'.

Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.


Stuck? Get a hint
10.
Next, write yet another if statement for if the userChoice is 'scissors'.

Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.


Stuck? Get a hint
11.
Don’t forget to test your function!

Check off this task when you’ve finished testing.


Stuck? Get a hint
12.
Everything is set up. Now you need to start the game and log the results.

Create a function named playGame.

Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument.

Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().

Under both of these variables, use console.log to print them to the console.


Stuck? Get a hint
13.
Finally, let’s determine who won.

Inside the playGame() function, call the determineWinner() function. Pass in the userChoice and computerChoice variables as its parameters. Make sure to put this function call inside of a console.log() statement so you can see the result.

Then, to start the game, call the playGame() function on the last line of your program.


Stuck? Get a hint
14.
Make this game better by adding a secret cheat code. If a user types 'bomb' as their choice, then make sure they win, no matter what.

*/