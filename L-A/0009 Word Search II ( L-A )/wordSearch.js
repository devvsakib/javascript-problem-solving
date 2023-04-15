function findWords(board, words) {
  const result = []; // array to store found words

  function dfs(i, j, word, visited) {
    // depth-first search function
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return; // check if position is out of bounds
    if (visited[i][j]) return; // check if position has already been visited
    word += board[i][j]; // add current character to current word

    if (words.includes(word)) {
      // check if current word is a target word
      result.push(word); // add word to result array
    }

    visited[i][j] = true; // mark current position as visited

    // search adjacent positions recursively
    dfs(i + 1, j, word, visited);
    dfs(i - 1, j, word, visited);
    dfs(i, j + 1, word, visited);
    dfs(i, j - 1, word, visited);

    visited[i][j] = false; // mark current position as unvisited (backtrack)
  }

  const visited = new Array(board.length)
    .fill(false)
    .map(() => new Array(board[0].length).fill(false)); // initialize visited array

  for (let i = 0; i < board.length; i++) {
    // iterate over each position on the board
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, "", visited); // perform depth-first search starting at current position
    }
  }

  return result; // return array of found words
}
