# 0009 TwoSum ( L-I )

## Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

## Testcases

- Input: `nums = [3, 2, 4], target = 6` <br>
  Output: `[1, 2]`

- Input: `nums = [2, 7, 11, 15], target = 9` <br>
  Output: `[0, 1]`

- Input: `nums = [3, 3], target = 6` <br>
  Output: `[0, 1]`

## Solution

```javascript
const TwoSum = (nums, target) => {
  numToIndex = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in numToIndex)
      return [numToIndex[target - nums[i]], i];

    numToIndex[nums[i]] = i;
  }

  return [];
};
```

## How it works

- The functiont takes an array of integers `nums` and an integer `target`.
- We initialise an object `numToIndex` to push the element and its index as key-value pairs.
- The function runs a for loop for the length of `nums`.
- If the difference of `target` and the current element at `i`th index is present in the keys of `numToIndex`, then return the array that contains the element corresponding to the difference as well as the current element.
- If not present, then set the element at `i`th index to be equal to `i` for `numToIndex`.
- If the for loop terminates normally, then return an empty array.

## References

- [LeetCode](https://leetcode.com/problems/two-sum/)

## Problem Added By

- [GitHub](https://www.github.com/khairalanam)
- [LinkedIn](https://www.linkedin.com/in/khair-alanam-b27b69221/)
- [Twitter](https://twitter.com/khair_alanam)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
