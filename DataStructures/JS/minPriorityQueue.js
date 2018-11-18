function MinPriorityQueue(A) {
  this.A = A;
  this.heapSize = A.length;

  this.buildMinHeap();
}

MinPriorityQueue.prototype.buildMinHeap = function () {
  var len = this.A.length;
  var mid = len % 2 ? (len - 1) / 2 : len / 2

  for (let i = mid; i >= 0; i--) {
    this.minHeapify(i);
  }
}

MinPriorityQueue.prototype.minHeapify = function (i) {
  var A = this.A;
  var l = i === 0 ? 1 : 2 * i; // left child index
  var r = i === 0 ? 2 : 2 * i + 1 // right child index
  var smallest = i;
  var temp;

  if (l < this.heapSize && A[l] < A[i]) {
    smallest = l;
  }

  if (r < this.heapSize && A[r] < A[smallest]) {
    smallest = r;
  }

  if (i !== smallest) {
    // swap elems
    temp = A[i];
    A[i] = A[smallest];
    A[smallest] = temp;
    this.minHeapify(smallest);
  }
}

MinPriorityQueue.prototype.getHeapMin = function () {
  if (this.heapSize < 1) return;

  return this.A[0];
}

MinPriorityQueue.prototype.heapExtractMin = function () {
  if (this.heapSize < 1) return;

  var A = this.A;
  var min = A[0];

  A[0] = A[this.heapSize - 1];
  A[this.heapSize - 1] = null;
  this.heapSize--;
  this.minHeapify(0);

  return min;
}

MinPriorityQueue.prototype.heapDecrease = function (i, key) {
  if (this.heapSize < 1) return;

  var A = this.A;
  var p = Math.floor(i / 2); // parent index
  var temp;
  var j = i;

  if (A[i] < key) return;

  A[i] = key;

  while (j > 0 && A[j] < A[p]) {
    temp = A[j];
    A[j] = A[p];
    A[p] = temp;
    j = p;
    p = Math.floor(j / 2); // new parent index
  }
}

MinPriorityQueue.prototype.heapInsert = function (key) {
  this.heapSize++;
  this.A[this.heapSize - 1] = Infinity;
  this.heapDecrease(this.heapSize - 1, key);
}