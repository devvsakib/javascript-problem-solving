## Problem

Implement a JavaScript function that implements a breadth-first search (BFS) algorithm to traverse a graph.


## Solution

```javascript
class Node {
    constructor(value, neighbors = []) {
      this.value = value;
      this.neighbors = neighbors;
    }
  }
  
  function bfs(start, target) {
    const queue = [start];
    const visited = new Set();
  
    while (queue.length) {
      const node = queue.shift();
      if (node.value === target) return true;
      if (visited.has(node)) continue;
      visited.add(node);
  
      queue.push(...node.neighbors);
    }
  
    return false;
  }
  ```

## References

- [GeeksforGeeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)
- [StackOverflow](https://stackoverflow.com/questions/2505431/breadth-first-search-and-depth-first-search)

## Problem Added By
- [GitHub](https://github.com/Akbar-Ahmed) 
