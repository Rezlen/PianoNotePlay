// ----------------------------------------------------
// Challenge: Search a word between email
// ----------------------------------------------------

var email = `
Hi, 
How are you. 

apple is sweet.

You are employed!

thank you!
`;

// ----------------------------------------------------
// Step 1:  search_word
// ----------------------------------------------------
function search_word(text, word) {
  // number of matched words
  var count = 0;

  //
  var y = 0;

  // loop repeat for each letter in the email. (in this case about 50 times)
  for (i = 0; i < text.length; i++) {
    // is the first letters of two words match?
    if (text[i] == word[0]) {

      // loop;         // the loop repeat for each letter of our word "are" (3 times)
      for (j = i; j < i + word.length; j++) {

        // `apple is ...` VS `are`
        // if the first 3 letters of the found word match the first 3 letters of our word,
        // y becomes equal to word length (3), else y is lower (1 or 2)!
        if (text[j] == word[j - i]) y++;

        // we found one match!
        if (y == word.length) count++;
      }

      // reset y for the next word!
      // (next word is the word with same first letter)
      y = 0;
    }
    // end if statement
  }
  // end for loop

  //
  return `The "${word}" was found ${count} times`;
}

// ----------------------------------------------------
// Step 2: execute the function
// ----------------------------------------------------

var res = search_word(email, "are");
console.log(search_word);

// ----------------------------------------------------
// Step 3: Log the result
// ----------------------------------------------------

console.log(res);

// email to arr
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// challenge 1: filter members that has more than 6 letters
const result = words.filter((word) => word.length > 6);

// ------------------------
// Array Methods:
// ------------------------
// reduce
// filter
// map
// match

// find keywords

// linked-list

console.log(result);
