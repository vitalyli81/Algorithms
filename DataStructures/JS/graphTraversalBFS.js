/**
 * Example of Breadth-first-search graph traversal using queue
 * 
 * 
 * Example:
 * 
 * const graph = new Graph();
 * 
 * const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
 * 
 * for (let i = 0; i < myVertices.length; i++) {
 *   graph.addVertex(myVertices[i]); 
 * }
 * graph.addEdge('A', 'B');
 * graph.addEdge('A', 'C');
 * graph.addEdge('A', 'D');
 * graph.addEdge('C', 'D');
 * graph.addEdge('C', 'G');
 * graph.addEdge('D', 'G');
 * graph.addEdge('D', 'H');
 * graph.addEdge('B', 'E');
 * graph.addEdge('B', 'F');
 * graph.addEdge('E', 'I');
 * 
 * 
 * breadthFirstSearch(graph, myVertices[0]);
 * 
 */

// Color enumerator for marking vertices
const Colors = {
  WHITE: 0, // Unvisited vertex
  GREY: 1, // first visited vertex
  BLACK: 2, // explored vertex
};

// marking all vertices as unvisited
const initializeColor = function (vertices) {
  const color = {};

  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

const breadthFirstSearch = function (graph, startVertex) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjacencyList();
  const color = initializeColor(vertices);
  const queue = [];
  const distances = {};
  const parents = {};

  queue.push(startVertex);

  for (let i = 0; i < vertices.length; i++) {
    let v = vertices[i];
    distances[v] = 0;
    parents[v] = null;
  }

  while (queue.length) {
    const u = queue.shift();
    const neighbours = adjList[u];
    color[u] = Colors.GREY;

    for (let i = 0; i < neighbours.length; i++) {
      const w = neighbours[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        parents[w] = u;
        queue.push(w);
      }
    }

    color[u] = Colors.BLACK;
  }

  return {
    distances,
    parents,
  }
};
