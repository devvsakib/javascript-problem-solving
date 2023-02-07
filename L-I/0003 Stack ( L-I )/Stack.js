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

module.exports = Stack
