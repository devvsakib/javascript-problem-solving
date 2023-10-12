# Longest Valid Parentheses
[LeetCode Problem]https://leetcode.com/problems/contains-duplicate-iii/description/

You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:
1. i != j,
2. abs(i - j) <= indexDiff.
3. abs(nums[i] - nums[j]) <= valueDiff, and

Return true if such pair exists or false otherwise.

## Example 1
```
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0
```

## Example 2:
```
Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.
```

### Constraints:
```javascript
2 <= nums.length <= 105
-109 <= nums[i] <= 109
1 <= indexDiff <= nums.length
0 <= valueDiff <= 109
```

## Approach 1:
1. Run a loop for every element nums[i] of the given array.
2. Inside this loop again run a for loop and traverse all the elements from j=i+1 to j=i+k and compare its value to the nums[i].
   (i) If nums[j]==nums[i] then return true. As we have found an element.
3. Finally when no duplicate element is found then return false before exiting the function.

## Approach 2:
1. Create a Hash Set for storing k previous elements.
2. Traverse for every element nums[i] of the given array in a loop.
   (i) Check if hash set already contains nums[i] or not. If nums[i] is present in the set ( i.e. duplicate element is present at a distance less than equal to k ), then return true. Else add nums[i] to the set.
   (ii) If the size of the set becomes greater than k then remove the last visited element (nums[i-k]) from the set.
3. Finally when no duplicate element is found then return false before exiting the function.

## Problem Added By
- [himanshukoshti](https://github.com/himanshukoshti)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.