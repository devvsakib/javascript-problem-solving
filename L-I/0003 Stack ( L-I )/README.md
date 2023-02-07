# 0003 Stack ( L-I )

## Problem

Create a class that has 3 method and 1 property.

-   Push method add new element to the stack
-   Pop method remove last added element and return removed element
-   Peek return last added element
-   Size property return stack size

## Solution

```javascript
class Stack {
	constructor() {
		this.stack = []
	}

	push(value) {
		this.stack.push(value)
	}

	pop() {
		return this.stack.pop()
	}

	peek() {
		return this.stack.at(-1)
	}

	get size() {
		return this.stack.length
	}
}
```

## References

-   [Class MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
-   [Stack GeeksForGeeks](https://www.geeksforgeeks.org/implementation-stack-javascript/)
-   [Array MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Problem Added By

-   [GitHub](https://www.github.com/kennarddh)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
