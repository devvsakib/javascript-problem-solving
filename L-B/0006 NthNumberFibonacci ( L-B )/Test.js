const { strict: assert } = require('assert')

const NthNumberFibonacci = require('./NthNumberFibonacci.js')

assert.equal(NthNumberFibonacci(10), 55)
assert.equal(NthNumberFibonacci(6), 8)
assert.equal(NthNumberFibonacci(0), 0)
assert.equal(NthNumberFibonacci(1), 1)
assert.equal(NthNumberFibonacci(2), 1)
assert.equal(NthNumberFibonacci(3), 2)

console.log('All tests success')