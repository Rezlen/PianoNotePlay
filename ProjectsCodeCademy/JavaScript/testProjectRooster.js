=====start of index section===========
// Define a rooster
Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'moo!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;

=====End of index section===========
=====start of index_test section===========


const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
    //Setup
      const expected = 'cock-a-doodle-doo!';

    //Exercise 
      const actual = Rooster.announceDawn();
    // Verify
      assert.equal(actual, expected);
    });
});

  describe('.timeAtDawn', () => {
    //Test that .timeAtDawn 'returns its argument as a string'
    it('returns its argument as a string', () => {
    //Setup
  const inputNumber = 12;
  const expected = '12';

  //Exercise  =(i=0 i<23 i++)
    const actual = Rooster.timeAtDawn(inputNumber);
  // Verify
    assert.equal(actual, expected);
  });


    // test for test that .timeAtDawn throws an error if its argument is not a valid hour (less than 0 or greater than 23).
    it('throws an error if its argument is not a valid hour less than 0', () => {
    //Setup
    const inputNumber = -1;
    const expected = RangeError;

    // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber); //Exersise is actuslly this line
        }, expected);
      })

     // test for test that .timeAtDawn throws an error if its argument is not a valid hour (less than 0 or greater than 23).
    it('throws an error if its argument is not a valid hour above 23', () => {
    //Setup
    const inputNumber = -23;
    const expected = RangeError;

    // Verify
     assert.throws(() => {
        Rooster.timeAtDawn(inputNumber); //Exersise is actuslly this line
        }, expected);
      })
    });
  });


=====end of index_test section===========

=

