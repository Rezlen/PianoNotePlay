
// ----------------------------------------------
// Solution 1-1: Simple Function
// --------------------------------------------------
// Just create a simple function!  
// ----------------------------------------------

function SolutionOneOne() {
  
  // Array 
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //
  var primaryValue = {
    total: 0,
    odds: 0,
    evens: 0
  };

  // (challenge 1; Total of Array)
  var finalValues = array.reduce((cur, item) => {

    //
    cur["total"] += item;

    //
    if (item % 2) 
    cur["evens"] += item;
    else 
    cur["odds"] += item;

    //
    return cur;

  }, primaryValue);


  //
  var result = {
    total: finalValues["total"],
    odds: finalValues["odds"],
    evens: finalValues["evens"],
    SumMinusOdds: finalValues["total"] - finalValues["odds"],
    Sum_plus_evens: finalValues["total"] + finalValues["evens"]
  }

  //
  console.log(result);

}


// ---------------------------------------------
// execute 
// ---------------------------------------------
SolutionOneOne();