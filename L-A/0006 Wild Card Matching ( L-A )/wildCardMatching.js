function isMatch(s, p) {
  const memo = {}; // memoization object to store previous results
  return dp(0, 0, memo);

  function dp(i, j, memo) {
    const key = `${i}-${j}`; // key to store and retrieve memoization results

    if (memo.hasOwnProperty(key)) {
      // check if result has already been computed
      return memo[key];
    }

    if (j === p.length) {
      // if pattern is empty, string must also be empty
      return i === s.length;
    }

    const firstMatch = i < s.length && (p[j] === s[i] || p[j] === "?");

    if (p[j] === "*") {
      // if current character is wildcard
      memo[key] =
        dp(i, j + 1, memo) || // match 0 characters
        (firstMatch && dp(i + 1, j, memo)); // match 1 or more characters
    } else {
      // if current character is not a wildcard
      memo[key] = firstMatch && dp(i + 1, j + 1, memo); // match current characters
    }

    return memo[key];
  }
}
