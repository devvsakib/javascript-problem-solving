# 0008 BubbleSort ( L-I )

## Problem

Implement a function that sorts an array in increasing order using bubble sort.

## Testcases

- Input: `[0, 4, 2, 3, 7, 3, 6, 2, 9, 10, 2, 6]` <br>
  Output: `[0, 2, 2, 2, 3, 3,  4, 6, 6, 7, 9, 10]`

- Input: `[45, 32, 12, 67, 86, 92, 29, 24, 53, 1, 6, 32, 56]` <br>
  Output: `[1,  6, 12, 24, 29, 32, 32, 45, 53, 56, 67, 86, 92]`

## Solution

```javascript
const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
```

## How it works

- The function takes an array of integers `arr` as an argument.
- The function runs a for loop in `i` until the second last element. This is due to the fact that on every iteration of the `i` loop, the last `i` elements are sorted. Therefore, running the `i` loop for the first element is unnecessary.
- The inner loop runs in `j` and will traverse `arr` from the start to the `n - i`th position since the last `i` elements are sorted.
- The function terminates with the sorted `arr`.
- The function will also work for those arrays that have duplicate elements.

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/bubble-sort/)

## Problem Added By

- [GitHub](https://www.github.com/khairalanam)
- [LinkedIn](https://www.linkedin.com/in/khair-alanam-b27b69221/)
- [Twitter](https://twitter.com/khair_alanam)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
