function MaxPriorityQueue(A) {
  this.A = A;
  this.heapSize = A.length;
  this.buildMaxHeap(this.A);
}

MaxPriorityQueue.prototype.buildMaxHeap = function () {
  for (let i = Math.floor(this.A.length / 2); i >= 0; i--) {
    this.maxHeapify(i);
  }
}

MaxPriorityQueue.prototype.maxHeapify = function (i) {
  var A = this.A;
  var l = i === 0 ? 1 : 2 * i;
  var r = i === 0 ? 2 : 2 * i + 1;
  var largest = i;
  var temp;

  if (l < this.heapSize && A[l] > A[i]) {
    largest = l;
  }

  if (r < this.heapSize && A[r] > A[largest]) {
    largest = r;
  }

  if (largest !== i) {
    temp = A[largest];
    A[largest] = A[i];
    A[i] = temp;
    this.maxHeapify(largest);
  }
}

MaxPriorityQueue.prototype.getHeapMax = function () {
  return this.A[0];
}

MaxPriorityQueue.prototype.heapExtractMax = function () {
  var A = this.A;
  var max;

  if (this.heapSize < 1) return;

  max = A[0];
  A[0] = A[this.heapSize - 1];
  this.heapSize--;
  this.maxHeapify(0);

  return max;
}

MaxPriorityQueue.prototype.heapIncrease = function (i, key) {
  var A = this.A;
  var p = Math.floor(i / 2); // parent index

  if (key < this.A[i]) return;

  A[i] = key;

  while (i > 0 && A[p] < A[i]) {
    let temp = A[p];
    A[p] = A[i];
    A[i] = temp;
    i = p; // changing i to parent index
    p = Math.floor(i / 2); // new parent index
  }
}

MaxPriorityQueue.prototype.heapInsert = function (key) {
  this.heapSize++;
  this.A[this.heapSize - 1] = Number.NEGATIVE_INFINITY;
  this.heapIncrease(this.heapSize - 1, key);
}


/**
 * 
 * var maxPQ = new MaxPriorityQueue([1,4,7,9,5,2,7,9,23,98]);
 * maxPQ.getHeapMax(); // 98
 * maxPQ.heapExtractMax(); // 98 
 * maxPQ.heapExtractMax(); // 23
 * maxPQ.heapIncrease(4, 100);
 * maxPQ.heapInsert(200);
 * 
 */