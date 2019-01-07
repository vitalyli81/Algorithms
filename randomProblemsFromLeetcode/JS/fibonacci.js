/**
 * 
 * Implement a function that returns the fibonacci number at a given index
 */

/**
 * 
 * @param {number} index 
 * @return {number}
 */

function fibonacci(index) {
  if (index < 2) return 0;

  var first = 0,
    second = 1,
    third;

  for (let i = 2; i <= index; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return second;
}
