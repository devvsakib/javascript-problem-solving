# 0001 MemoizedNthNumberFibonacci ( L-A )

## Problem

Create a function that return the nth fibonacci number with [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) type.

Since the 100th fibonacci number larger than maximum integer you need to use [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

This must be fast when running `MemoizedNthNumberFibonacci(100)`

Faster than [NthNumberFibonacci](<../../L-B/0006%20NthNumberFibonacci%20(%20L-B%20)/>>)

Fibonacci starts with `0` and `1`

Fibonacci(n) = Fibonacci(n - 1) + Fibonacci(n - 2)

## Test Cases

-   MemoizedNthNumberFibonacci(10) // 55n
-   MemoizedNthNumberFibonacci(6) // 8n
-   MemoizedNthNumberFibonacci(0) // 0n
-   MemoizedNthNumberFibonacci(1) // 1n
-   MemoizedNthNumberFibonacci(2) // 1n
-   MemoizedNthNumberFibonacci(3) // 2n
-   MemoizedNthNumberFibonacci(63) // 6557470319842n
-   MemoizedNthNumberFibonacci(71) // 308061521170129n
-   MemoizedNthNumberFibonacci(78) // 8944394323791464n
-   MemoizedNthNumberFibonacci(100) // 354224848179261915075n
-   MemoizedNthNumberFibonacci(137) // 19134702400093278081449423917n
-   MemoizedNthNumberFibonacci(200) // 280571172992510140037611932413038677189525n

## Solution

```javascript
const MemoizedNthNumberFibonacci = (n, memo = {}) => {
	if (n <= 0) return BigInt(0)
	if (n <= 1) return BigInt(1)

	if (memo[n]) {
		return memo[n]
	}

	const result =
		MemoizedNthNumberFibonacci(n - 2, memo) +
		MemoizedNthNumberFibonacci(n - 1, memo)

	memo[n] = result

	return result
}
```

## References

-   [Fibonacci Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_number)
-   [Memoization Wikipedia](https://en.wikipedia.org/wiki/Memoization)
-   [Recursive MDN](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
-   [BigInt MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
-   [Memoization FreeCodeCamp](https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/)

## Problem Added By

-   [GitHub](https://www.github.com/kennarddh)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
