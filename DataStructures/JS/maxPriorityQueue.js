function MaxPriorityQueue(A) {
  this.A = A;
  this.heapSize = A.length;
  this.buildMaxHeap(this.A);
}

MaxPriorityQueue.prototype.buildMaxHeap = function (A) {
  for (let i = Math.floor(A.length / 2); i >= 0; i--) {
    this.maxHeapify(A, i);
  }
}

MaxPriorityQueue.prototype.maxHeapify = function (A, i) {
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
    this.maxHeapify(A, largest);
  }
}

MaxPriorityQueue.prototype.getHeapMax = function () {
  return this.A[0];
}

MaxPriorityQueue.prototype.heapExtractMax = function () {
  var max;

  if (this.heapSize < 1) return;

  max = this.A[0];
  this.A[0] = this.A[this.heapSize - 1];
  this.heapSize--;
  this.maxHeapify(this.A, 0);

  return max;
}

MaxPriorityQueue.prototype.heapIncrease = function (i, key) {
  var A = this.A;
  var p = Math.floor(i / 2);

  if (key < this.A[i]) return;

  A[i] = key;

  while (i > 0 && A[p] < A[i]) {
    let temp = A[p];
    A[p] = A[i];
    A[i] = temp;
    i = p;
    p = Math.floor(i / 2);
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