const sort = (A) => {
  if (A.length < 2) return A;
  quickSort(A, 0, A.length - 1);
};

const quickSort = (A, startIndex, endIndex) => {
  if (startIndex < endIndex) {
    const mid = partition(A, startIndex, endIndex);
    quickSort(A, startIndex, mid - 1);
    quickSort(A, mid + 1, endIndex);
  }
};

const partition = (A, s, e) => {
  let pivot = s;

  for (let i = s; i < e; i++) {
    if (A[i] <= A[e]) {
      swap(A, pivot, i);
      pivot++;
    }
  }

  swap(A, e, pivot);

  return pivot;
};

const swap = (A, i, j) => {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
};
