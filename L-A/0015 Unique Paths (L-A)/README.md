# Unique Paths (L-A)
## Problem
### Description
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.


#### Example
1. Input: m = 3, n = 7
    Output: 28

2. Input: m = 3, n = 2
    Output: 3

##### Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

 
## Solution
```javascript
    const uniquePaths = function(m, n, memo = {}) {
     const key = m + ',' + n;
     if (key in memo) return memo[key];
     if (m === 1 || n === 1) return 1
     if (m === 0 || n === 0) return 0;
     
     memo[key] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo);
     return memo[key];
};
```
## How it works
### Approach
Essentially we have 2 base cases where we know that:

a 1x1 grid only has 1 path possible
if we theoretically get a grid where m or n is 0, then the grid is invalid and there are 0 possible paths.
With memoization, we can pass down a hash that keeps track of values we have already calculated. If we have already previously saved the value, then we can simply add another base case where it simply returns the value saved in our memoization hash.

If we imagine uniquePaths as a tree of paths, we can either move down or right. Each decision effectively shrinks the grid size by either 1 row when we go down or 1 column when we go right. When drawn out, we can clearly see duplicate nodes that would return the same values, so we can simply save the first solution and refer back to it whenever we encounter it again.
Time: O(m * n)
Space: O(m + n)

## References
- [LeetCode](https://leetcode.com/problems/unique-paths/)

## Problem Added By
- [SjxSubham](https://github.com/SjxSubham)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
