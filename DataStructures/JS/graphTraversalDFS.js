/**
 * Example of Depth-first-search graph traversal using stack (recursion)
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
 * console.log(DFS(graph));
 * 
 */

// Color enumerator for marking vertices
const Colors = {
  WHITE: 0, // Unvisited vertex
  GREY: 1, // first visited vertex
  BLACK: 2, // explored vertex
};

// marking all vertices as unvisited
const initializeColor = vertices => {
  const color = {};

  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

const DFS = function (graph) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjacencyList();
  const color = initializeColor(vertices);
  const discovered = {};
  const finished = {};
  const time = { count: 0 };
  const parents = {};

  for (let i = 0; i < vertices.length; i++) {
    let v = vertices[i];
    discovered[v] = 0;
    finished[v] = 0;
    parents[v] = null;
  }

  for (let i = 0; i < vertices.length; i++) {
    const u = vertices[i]
    if (color[u] === Colors.WHITE) {
      DFSVisit(u, color, discovered, finished, parents, time, adjList);
    }
  }

  return {
    discovered,
    finished,
    parents,
  }
};

const DFSVisit = function (u, color, discovered, finished, parents, time, adjList) {
  color[u] = Colors.GREY;
  discovered[u] = ++time.count;

  const neighbours = adjList[u];

  for (let i = 0; i < neighbours.length; i++) {
    const w = neighbours[i];

    if (color[w] === Colors.WHITE) {
      parents[w] = u;
      DFSVisit(w, color, discovered, finished, parents, time, adjList);
    }
  }

  color[u] = Colors.BLACK;
  finished[u] = ++time.count;
};
