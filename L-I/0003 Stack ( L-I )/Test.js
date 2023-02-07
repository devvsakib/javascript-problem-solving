const { strict: assert } = require('assert')

const Stack = require('./Stack.js')

const stack = new Stack()

stack.push('foo')

assert.equal(stack.size, 1)

stack.push('bar')

assert.equal(stack.size, 2)

assert.equal(stack.peek(), 'bar')
assert.equal(stack.size, 2)
assert.equal(stack.pop(), 'bar')
assert.equal(stack.size, 1)
assert.equal(stack.peek(), 'foo')
assert.equal(stack.size, 1)

stack.push('foobar')

assert.equal(stack.size, 2)
assert.equal(stack.peek(), 'foobar')
assert.equal(stack.size, 2)
assert.equal(stack.pop(), 'foobar')
assert.equal(stack.size, 1)
assert.equal(stack.pop(), 'foo')
assert.equal(stack.size, 0)

console.log('All tests success')
