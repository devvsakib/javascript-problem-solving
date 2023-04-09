# 0005 Trapping Rain Water ( L-A )

## Problem

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

## Example 1

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

## Solution

```javascript
function isMatch(s, p) {
  const memo = {};
  return dp(0, 0, memo);

  function dp(i, j, memo) {
    const key = `${i}-${j}`;

    if (memo.hasOwnProperty(key)) {
      return memo[key];
    }

    if (j === p.length) {
      return i === s.length;
    }

    const firstMatch = i < s.length && (p[j] === s[i] || p[j] === "?");

    if (p[j] === "*") {
      memo[key] =
        dp(i, j + 1, memo) ||
        (firstMatch && dp(i + 1, j, memo));
    } else {
      memo[key] = firstMatch && dp(i + 1, j + 1, memo);
    }

    return memo[key];
  }
}

```

## How it works
- This solution uses dynamic programming with memoization to efficiently solve the problem. The `dp` function takes two indices (`i` and `j`) to represent the current positions in the string `s` and pattern `p`, respectively, as well as a memoization object (`memo`) to store previous results.
- The base cases for the recursion are when the pattern is empty (`j === p.length`) and the string is empty (`i === s.length`). In this case, the function returns `true` if the string is empty as well, and ``false` otherwise.
- If the current character in the pattern is a wildcard (`'*'`), there are two possibilities: either the wildcard matches 0 characters (in which case we move to the next character in the pattern by calling `dp(i, j + 1, memo)`), or the wildcard matches 1 or more characters (in which case we move to the next character in the string by calling `dp(i + 1, j, memo)` if there is a match at the current position). We use the `||` operator to combine these two possibilities, and memoize the result.
- If the current character in the pattern is not a wildcard, we check if there is a match at the current position (`firstMatch = i < s.length && (p[j] === s[i] || p[j] === '?')`). If there is a match, we move to the next character in both the string and the pattern by calling `dp(i + 1, j + 1, memo)`. We memoize the result and return it.
- At the end, we call the `dp` function with the initial indices (`0` and `0`) and the memoization object. The result of the function represents whether the string matches the pattern.

## References

- [LeetCode](https://leetcode.com/problems/wildcard-matching/)

## Problem Added By

- [Haris](https://github.com/harisdev-netizen)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
