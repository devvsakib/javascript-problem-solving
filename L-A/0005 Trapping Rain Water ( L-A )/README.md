# 0005 Trapping Rain Water ( L-A )

## Problem

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

## Example 1

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

## Solution

```javascript
const trap = function (height) {
  let ans = 0;
  const size = height.length;
  let leftMax = height[0];
  let rightMax = height[size - 1];
  const leftArr = new Array(size);
  leftArr[0] = height[0];
  const rightArr = new Array(size);
  rightArr[size - 1] = height[size - 1];

  for (let i = 1; i < size; i++) {
    leftMax = Math.max(leftMax, height[i]);
    leftArr[i] = leftMax;
  }

  for (let k = size - 2; k >= 0; k--) {
    rightMax = Math.max(rightMax, height[k]);
    rightArr[k] = rightMax;
  }

  for (let j = 0; j < size; j++) {
    ans += Math.max(Math.min(leftArr[j], rightArr[j]) - height[j], 0);
  }

  return ans;
};

```

## How it works

- The function `trap` takes an array of integers `height` as input and returns an integer representing the amount of water that can be trapped.
- The function initializes the variables `ans`, `size`, `leftMax`, and `rightMax` to 0, the length of the `height` array, and the maximum heights to the left and right of the array, respectively. It also initializes two arrays leftArr and rightArr to store the maximum height to the left and right of each index, respectively.
- The function then loops through the `height` array from left to right and stores the maximum height to the left of each index in the `leftArr` array using the variable `leftMax`.
- The function loops through the `height` array from right to left and stores the maximum height to the right of each index in the `rightArr` array using the variable `rightMax`.
- The function loops through the `height` array again and calculates the amount of water that can be trapped at each index by taking the minimum of the maximum heights to the left and right of the index, subtracting the height at the index, and taking the maximum with 0 to avoid negative values. The calculated value is added to the `ans` variable.
- The function returns the final `ans` value.

## References

- [LeetCode](https://leetcode.com/problems/trapping-rain-water/)

## Problem Added By

- [Haris](https://github.com/harisdev-netizen)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
