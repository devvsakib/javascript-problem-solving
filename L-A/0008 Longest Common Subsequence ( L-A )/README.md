# 0008 Longest Common Subsequence ( L-A )

## Problem

Given two strings, find the length of their longest common subsequence (LCS). A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

## Example 1

```
Input:
str1 = "ABCDGH"
str2 = "AEDFHR"

Output:
The longest common subsequence is "ADH" with a length of 3.

Input:
str1 = "AGGTAB"
str2 = "GXTXAYB"

Output:
The longest common subsequence is "GTAB" with a length of 4.
```

## Solution Pseudocode

```javascript
function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Initialize a 2D array with 0
  const lcs = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // Fill the 2D array with LCS lengths
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      }
    }
  }

  // Return the length of LCS
  return lcs[m][n];
}

// Example usage
const str1 = "ABCDGH";
const str2 = "AEDFHR";
const result = longestCommonSubsequence(str1, str2);
console.log(result); // Output: 3

// Another example
const str3 = "AGGTAB";
const str4 = "GXTXAYB";
const result2 = longestCommonSubsequence(str3, str4);
console.log(result2); // Output: 4
```

## How it works

- The code returns an object with two properties: `length`, which is the length of the longest common subsequence, and `sequence`, which is the actual subsequence itself.
- It also includes a section of code to trace back the 2D array and find the actual LCS string.
- The time complexity of this algorithm is O(mn), where m and n are the lengths of the input strings.

## References

- [Google](https://www.google.com/search?client=opera&q=Longest+Common+Subsequence&sourceid=opera&ie=UTF-8&oe=UTF-8)

## Problem Added By

- [Haris](https://github.com/harisdev-netizen)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
