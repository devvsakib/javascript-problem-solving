const { strict: assert } = require("assert");
const NthFibonacciNumber = require("./NthFibonacciNumberO(1)");

assert.equal(NthFibonacciNumber(0), 0);
assert.equal(NthFibonacciNumber(1), 1);
assert.equal(NthFibonacciNumber(2), 1);
assert.equal(NthFibonacciNumber(3), 2);
assert.equal(NthFibonacciNumber(6), 8);
assert.equal(NthFibonacciNumber(10), 55);
assert.equal(NthFibonacciNumber(30), 832040);
assert.equal(NthFibonacciNumber(50), 12586269025);

console.log("All testcases completed successfully");
