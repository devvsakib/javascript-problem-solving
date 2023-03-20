const DFSGraphTraversal = (graph, start, visited = new Set()) => {
  console.log(start);
  visited.add(start);
  for (let child = 0; child < graph[start].length; child++) {
    if (visited.has(graph[start][child]) === false) {
      DFSGraphTraversal(graph, graph[start][child], visited);
    }
  }
};

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

graph = {};

for (let i = 0; i < graph_edges.length; i++) {
  if (graph_edges[i][0] in graph === false) {
    graph[graph_edges[i][0]] = [];
    graph[graph_edges[i][0]].push(graph_edges[i][1]);
  } else {
    graph[graph_edges[i][0]].push(graph_edges[i][1]);
  }

  if (graph_edges[i][1] in graph === false) {
    graph[graph_edges[i][1]] = [];
    graph[graph_edges[i][1]].push(graph_edges[i][0]);
  } else {
    graph[graph_edges[i][1]].push(graph_edges[i][0]);
  }
}

console.log(graph);

DFSGraphTraversal(graph, 5);
