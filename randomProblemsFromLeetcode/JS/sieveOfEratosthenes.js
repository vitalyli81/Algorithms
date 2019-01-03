/**
 * 
 * For a given number, find all the prime numbers from zero to that number.
 * 
 * Example
 * 
 * sieveOfEratosthenes(10) => [2, 3, 5, 7]
 * 
 * Algorithm is here
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * 
 */

/**
 * 
 * @param {number} n
 * @return {number[]}
 */

function sieveOfEratosthenes(n) {
  var tempArray = Array(n);
  var resultArray = [];

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    var m = 0;

    if (tempArray[i] === undefined) {
      for (let j = i * i; j < n; j = Math.pow(i, 2) + (m++) * i) {
        tempArray[j] = null;
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if (tempArray[i] === undefined) {
      resultArray.push(i)
    }
  }

  return resultArray;
}
