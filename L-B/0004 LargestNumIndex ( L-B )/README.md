# 0004 LargestNumIndex ( L-B )

## Problem

Given an array of integers, find the index of the largest number in the array.

## Test Cases

- Input: [12, 3, 1, 54, 65, 4, 9], Output: 4
- Input: [12, 3, 1, 54], Output: 3

## Solution

```javascript
function largestNumIndex(arr) {
  let largestNum = arr[0];
  let largestNumIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
      largestNumIndex = i;
    }
  }
  return largestNumIndex;
}
const arr = [12, 3, 1, 54, 65, 4, 9]
console.log(lgNumIndex(arr)); // expected 4, largestnum - 65
```

## How it works

- The function takes an array as a parameter.
- It creates a variable called largestNum and assigns it a value of the first element of the array.
- It creates a variable called largestNumIndex and assigns it a value of 0.
- It creates a for loop that starts from 1 and ends at the length of the array.
- It checks if the value of the current index is greater than the value of largestNum.
- If it is, it assigns the value of the current index to largestNum and assigns the value of i to largestNumIndex.
- It returns the value of largestNumIndex.

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