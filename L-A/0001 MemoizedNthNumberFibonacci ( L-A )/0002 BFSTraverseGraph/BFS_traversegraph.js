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
  