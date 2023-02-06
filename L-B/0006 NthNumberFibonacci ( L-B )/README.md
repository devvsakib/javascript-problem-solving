# 0006 NthNumberFibonacci ( L-B )

## Problem

Create a function that return the nth fibonacci number.

Fibonacci starts with `0` and `1`

Fibonacci(n) = Fibonacci(n - 1) + Fibonacci(n - 2)

## Test Cases

-   NthNumberFibonacci(10) // 55
-   NthNumberFibonacci(6) // 8
-   NthNumberFibonacci(0) // 0
-   NthNumberFibonacci(1) // 1
-   NthNumberFibonacci(2) // 1
-   NthNumberFibonacci(3) // 2

## Solution

```javascript
const NthNumberFibonacci = n => {
	if (n <= 0) return 0
	if (n <= 1) return 1

	return NthNumberFibonacci(n - 2) + NthNumberFibonacci(n - 1)
}
```

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_number)
-   [Recursive MDN](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

## Problem Added By

-   [GitHub](https://www.github.com/kennarddh)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
