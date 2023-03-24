# Palindrome (L-I)

## Problem

- Write a function in JavaScript that takes a sorted array of integers as input and returns an array with unique elements

- Example Inputs and Outputs:

- Input: `[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]` -> Output: `[ 0, 1, 2, 3, 4 ]`
- Input: `[1, 1, 1, 2, 2, 3, 3, 4, 6, 7, 8, 8, 9]` -> Output: `[
  1, 2, 3, 4,
  6, 7, 8, 9
]`

## Solution

```javascript
const RemoveDuplicates = (nums) => {
  i = 1;

  size = nums.length;

  while (i < size) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      size -= 1;
    } else i += 1;
  }

  return nums;
};
```

## How it works

- The function takes an array `nums` as input and returns `nums` with unique elements.

- We initialise an index `i` to be `1` and `size` to be the length of `nums`.

- We run a while loop whenever `i < size`.

- if the current element at index `i` is equal to the previous element, then remove the current element from `nums`

- If not, then increment `i` by `1`.

- After the while loop terminates, we return the `nums` array.

## References

- [Leetcode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

## Problem Added By

- [GitHub](https://www.github.com/khairalanam)
- [LinkedIn](https://www.linkedin.com/in/khair-alanam-b27b69221/)
- [Twitter](https://twitter.com/khair_alanam)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
