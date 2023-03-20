# 0003 DFSGraph ( L-A )

## Problem

Implement a JavaScript function that implements a depth-first search (DFS) algorithm to traverse a graph.

## Test Case

```javascript
graph_edges = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [2, 4],
  [4, 6],
  [5, 6],
  [1, 6],
];
```

## Solution

```javascript
const DFSGraphTraversal = (graph, start, visited = new Set()) => {
  console.log(start);
  visited.add(start);
  for (let child = 0; child < graph[start].length; child++) {
    if (visited.has(graph[start][child]) === false) {
      DFSGraphTraversal(graph, graph[start][child], visited);
    }
  }
};
```

## How it works

- We first create the graph out of the given array of edges using an `Object`.
- We then run the `DFSGraphTraversal` function to execute the depth first search.
- In the function, we have three parameters; namely the `graph`, the `start` node and the `visited` set which is empty by default.
- Firstly, we print the `start` node and then we add the node to the `visited` set.
- We then run a for loop for the elements present in the `graph[start]` array.
- If the current element is not present in the `visited` set, then recursively call the `DFSGraphTraversal` function with the same `graph` and `visited` set, but with the current element as the `start` node.
- This function will run until all the nodes are visited in the `graph`.

## References

- [Youtube](https://youtu.be/IG1ABs6lVMw)

## Problem Added By

- [khairalanam](https://github.com/khairalanam)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
