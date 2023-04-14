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

  // Find the LCS string by tracing back the 2D array
  let i = m;
  let j = n;
  let lcsStr = "";

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcsStr = str1[i - 1] + lcsStr;
      i--;
      j--;
    } else if (lcs[i - 1][j] > lcs[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return {
    length: lcs[m][n],
    sequence: lcsStr,
  };
}

// Example usage
const str1 = "ABCDGH";
const str2 = "AEDFHR";
const result = longestCommonSubsequence(str1, str2);
console.log(result); // Output: { length: 3, sequence: 'ADH' }

// Another example
const str3 = "AGGTAB";
const str4 = "GXTXAYB";
const result2 = longestCommonSubsequence(str3, str4);
console.log(result2); // Output: { length: 4, sequence: 'GTAB' }
