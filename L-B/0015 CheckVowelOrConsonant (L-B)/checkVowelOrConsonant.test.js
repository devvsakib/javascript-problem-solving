const { strict: assert } = require("assert");

const checkVowelOrConsonant = require("./checkVowelOrConsonant.js");

assert.equal(checkVowelOrConsonant("a"), "a is a VOWEL");
assert.equal(checkVowelOrConsonant("E"), "E is a VOWEL");
assert.equal(checkVowelOrConsonant("b"), "b is a CONSONANT");
assert.equal(checkVowelOrConsonant("C"), "C is a CONSONANT");

console.log("All tests success");
