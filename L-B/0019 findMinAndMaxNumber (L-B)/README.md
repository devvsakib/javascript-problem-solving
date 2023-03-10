#0019 findMinAndMaxNumber (L-B)

## Problem
Given an array of numbers, find the highest and lowest numbers in the array.

## Test Cases
- let numbers = [5, 3, 8, 2, 9]; // Min: 2, Max: 9
- let numbers = [4, 10, 18, 2, 3]; // Min: 2, Max: 18
- let numbers = [0, 100, 8, 21, 39]; // Min: 0, Max: 100

## Solution

```javascript
let numbers = [5, 3, 8, 2, 9];

let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(`Min: ${min}, Max: ${max}`);
```

## How it works
- We start a `for` loop that iterates over each element of the `numbers` array.
- Inside the loop, we check if the current element is less than the current value of `min`. If it is, we update `min` to the current element. This way, after the loop has finished executing, `min` will hold the smallest value in the numbers array.
- We also check if the current element is greater than the current value of `max`. If it is, we update `max` to the current element. This way, after the loop has finished executing, `max` will hold the largest value in the `numbers` array.


## References
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Wikipedia](https://en.wikipedia.org/wiki/For_loop)
- [freeCodeCamp](https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/)


## Problem Added By
- [GitHub](https://github.com/gabrysia97) 

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.