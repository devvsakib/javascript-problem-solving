# 0003 SumOfNNumber ( L-B )

## Problem

Given a number N, print the sum of all numbers from 1 to N.

## Test Cases

- Input: 10, Output: 55
- Input: 5, Output: 15
- Input: 1, Output: 1
- Input: 0, Output: 0


## Solution

```javascript
function sumOfNNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNNumber(10));
```

## How it works

- The function takes a number as a parameter.
- It creates a variable called sum and assigns it a value of 0.
- It creates a for loop that starts from 1 and ends at the number passed as a parameter.
- It adds the value of i to the sum variable.
- It returns the sum variable.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/For_loop)
- [GeeksforGeeks](https://www.geeksforgeeks.org/for-loop-in-javascript/)
- [StackOverflow](https://stackoverflow.com/questions/1669190/javascript-min-max-array-values)

## Problem Added By

- [GitHub](https://www.github.com/devvsakib)
- [LinkedIn](https://www.linkedin.com/in/devvsakib)
- [Twitter](https://twitter.com/devvsakib)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.