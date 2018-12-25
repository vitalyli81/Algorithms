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
  if (index === 0) return 0;
  if (index < 3) return 1;
  if (index === 3) return 2;

  var first = 1,
    second = 2,
    third = 3;

  for (let i = 4; i <= index; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return third;
}
