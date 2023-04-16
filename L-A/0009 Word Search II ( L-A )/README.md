# 0009  Word Search II ( L-A )

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
function findWords(board, words):
  result = []

  function dfs(i, j, word, visited):
    if i < 0 or j < 0 or i >= board.length or j >= board[0].length:
      return
    if visited[i][j]:
      return
    word += board[i][j]

    if words includes word:
      result.push(word)

    visited[i][j] = true

    dfs(i+1, j, word, visited)
    dfs(i-1, j, word, visited)
    dfs(i, j+1, word, visited)
    dfs(i, j-1, word, visited)

    visited[i][j] = false

  visited = new Array(board.length).fill(false).map(() => new Array(board[0].length).fill(false))

  for i from 0 to board.length-1:
    for j from 0 to board[0].length-1:
      dfs(i, j, "", visited)

  return result
```

## How it works

- We first define a `result` array to store the found words. Then, we define a `dfs` function that takes the current position on the board (`i` and `j`), the current word being built (`word`), and a `visited` array to keep track of visited positions.
- The function checks if the current position is out of bounds or has already been visited. If either of these conditions are true, the function returns. Otherwise, the function adds the current character to the word, and checks if the word is in the list of target words. If it is, it adds the word to the `result` array.
- The function then marks the current position as visited and performs a depth-first search on all adjacent positions. After the search is complete, the current position is marked as unvisited.
- Lastly, we create a `visited` array with the same dimensions as the board, and iterate through each position on the board, calling the `dfs` function with the initial parameters. The function returns the `result` array containing all the found words.

## References

- [LeetCode](https://leetcode.com/problems/word-search-ii/)

## Problem Added By

- [Haris](https://github.com/harisdev-netizen)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
