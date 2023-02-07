const { strict: assert } = require('assert')

const MemoizedNthNumberFibonacci = require('./MemoizedNthNumberFibonacci.js')

assert.equal(MemoizedNthNumberFibonacci(10), 55n)
assert.equal(MemoizedNthNumberFibonacci(6), 8n)
assert.equal(MemoizedNthNumberFibonacci(0), 0n)
assert.equal(MemoizedNthNumberFibonacci(1), 1n)
assert.equal(MemoizedNthNumberFibonacci(2), 1n)
assert.equal(MemoizedNthNumberFibonacci(3), 2n)
assert.equal(MemoizedNthNumberFibonacci(63), 6557470319842n)
assert.equal(MemoizedNthNumberFibonacci(71), 308061521170129n)
assert.equal(MemoizedNthNumberFibonacci(78), 8944394323791464n)
assert.equal(MemoizedNthNumberFibonacci(100), 354224848179261915075n)
assert.equal(MemoizedNthNumberFibonacci(137), 19134702400093278081449423917n)
assert.equal(
	MemoizedNthNumberFibonacci(200),
	280571172992510140037611932413038677189525n
)

console.log('All tests success')
