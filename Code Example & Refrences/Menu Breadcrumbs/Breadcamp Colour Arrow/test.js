console.log = function() {};

const fs = require('fs');
const code = fs.readFileSync('breadcrumb.css', 'utf8');
const assert = require('chai').assert;


  // step 1: CSS regex 
let CSS_RegEx1 = /\.breadcrumb\s*a\s*:\s*hover\s*{\s*background-color\s*:\s*blue[^}]*}/ // put your css selectors here
let CSS_RegEx2 = /\.breadcrumb\s*a\s*:\s*hover\s*:*\s*before\s*{\s*border-color\s*:\s*blue[^}]*border-left-color\s*:\s*transparent[^}]*}/ // put your css selectors here
let CSS_RegEx3 = /\.breadcrumb\s*a\s*:\s*hover\s*:*\s*after\s*{\s*border-left-color\s*:\s*blue[^}]*}/ // put your css selectors here


let found1 = CSS_RegEx1.test(code);
let found2 = CSS_RegEx2.test(code);
let found3 = CSS_RegEx3.test(code);

describe('', function () {
  it('', function () {
    assert.strictEqual(found1, true, 'Make sure your CSS for the `.breadcrumb a:hover` selector matches the code in the instructions.')
    assert.strictEqual(found2, true, 'Make sure your CSS for the `.breadcrumb a:hover::before` selector matches the code in the instructions.')
    assert.strictEqual(found3, true, 'Make sure your CSS for the `.breadcrumb a:hover::after` selector matches the code in the instructions.')
  })
})