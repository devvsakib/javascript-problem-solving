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
  
  ## How it works

-  We create a queue and add the start node to it.
-  We create a visited set to keep track of the nodes we have visited.
-  We loop through the queue while it is not empty.
-  We shift the first node off the queue and check if it is the target node.
-  If it is, we return true.
-  If it is not, we check if we have visited the node already.
-  If we have, we continue.
-  If we have not, we add the node to the visited set.
-  We then push all of the neighbors of the node to the queue.
-  We then loop again.
-  We repeat this process until the queue is empty.
-  If we have not found the target node, we return false.


## References

- [GeeksforGeeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)
- [StackOverflow](https://stackoverflow.com/questions/2505431/breadth-first-search-and-depth-first-search)


## Problem Added By
- [GitHub](https://github.com/Akbar-Ahmed) 


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
