# 0020 NthNumberFibonacci ( L-B )

## Problem

Create a function that calculates the nth fibonacci number in O(1) time.

Fibonacci starts with `0` and `1`

F(n) = (1 / sqrt(5)) \* ((1 + sqrt(5) / 2) ^ n - (1 - sqrt(5) / 2) ^ n)

## Test Cases

- NthFibonacciNumber(0) // 0
- NthFibonacciNumber(1) // 1
- NthFibonacciNumber(2) // 1
- NthFibonacciNumber(3) // 2
- NthFibonacciNumber(6) // 8
- NthFibonacciNumber(10) // 55
- NthFibonacciNumber(30) // 832040
- NthFibonacciNumber(50) // 12586269025

## Solution

```javascript
const NthFibonacciNumber = (n) => {
  root_five = Math.sqrt(5);
  major_term = (1 + root_five) / 2;
  minor_term = (1 - root_five) / 2;

  return Math.round(
    (1 / root_five) * (Math.pow(major_term, n) - Math.pow(minor_term, n))
  );
};
```

## References

- [Math Stack Exchange](https://math.stackexchange.com/questions/1105093/proving-a-slight-variation-of-the-fibonacci-formula-using-complete-induction)

## Problem Added By

- [khairalanam](https://github.com/khairalanam)

## Contributing

If you have the idea to optimise the solution, then please feel free to open a pull request and let me know about your optimization :D
