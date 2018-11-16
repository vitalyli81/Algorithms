var maxHeapify = function (A, i) {
  var l = i === 0 ? 1 : 2 * i;
  var r = i === 0 ? 2 : 2 * i + 1;
  var largest = i;
  var temp;

  if (l < A.heapSize && A[l] > A[i]) {
    largest = l;
  }

  if (r < A.heapSize && A[r] > A[largest]) {
    largest = r;
  }

  if (largest !== i) {
    temp = A[largest];
    A[largest] = A[i];
    A[i] = temp;
    maxHeapify(A, largest);
  }

}

var buildMaxHeap = function (A) {
  A.heapSize = A.length;

  for (let i = Math.floor(A.length / 2); i >= 0; i--) {
    maxHeapify(A, i);
  }
}

var heapSort = function (A) {
  buildMaxHeap(A);

  for (let i = A.length; i >= 2; i--) {
    let temp = A[0];

    A[0] = A[A.heapSize - 1];
    A[A.heapSize - 1] = temp;
    A.heapSize--;
    maxHeapify(A, 0);
  }
}


/**
 * var arr  = [1,4,7,9,5,2,4,7,9,23,98];
 * 
 * heapSort(arr);
 * 
 */