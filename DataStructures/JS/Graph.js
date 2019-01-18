/**
 * 
 * Simple example of Graph data structure
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
*/

function Graph(isDirected) {
  this.isDirected = isDirected || false;
  this.vertices = [];
  this.adjacencyList = {};
};

Graph.prototype.addVertex = function (v) {
  if (!this.vertices.includes(v)) {
    this.vertices.push(v);
    this.adjacencyList[v] = [];
  }
};

Graph.prototype.addEdge = function (v, w) {
  if (!this.adjacencyList[v]) {
    this.addVertex(v);
  }

  if (!this.adjacencyList[w]) {
    this.addVertex(w);
  }

  this.adjacencyList[v].push(w);

  if (!this.isDirected) {
    this.adjacencyList[w].push(v);
  }
};

Graph.prototype.getVertices = function () {
  return this.vertices;
};

Graph.prototype.getAdjacencyList = function () {
  return this.adjacencyList;
};

Graph.prototype.toString = function () {
  let s = '';

  for (let i = 0; i < this.vertices.length; i++) {
    const v = this.vertices[i];
    s += `${v} => ${this.adjacencyList[v].toString()}`;
    s += '\n';
  }

  return s;
};
