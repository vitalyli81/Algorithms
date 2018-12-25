/**
 * Given an array of stock prices,
 * find the minimum buy price and the maximum sell price that produce the greatest profit.
 * 
 * Example 
 * 
 * [1, 2, 3, 4, 5] => [1, 5]
 * [2, 1, 5, 3, 4] => [1, 5]
 * [2, 10, 1, 3] => [2, 10]
 * [2, 1, 2, 11] => [1, 11]
 */

/**
 * 
 * @param {number[]} A 
 * @return {number[]}
 */

function maxProfit(A) {
  var buyPrice = sellPrice = A[0],
    result = [buyPrice, sellPrice];

  for (let i = 1; i < A.length; i++) {
    if (A[i] < A[i - 1]) {
      buyPrice = A[i];  
    }

    sellPrice = A[i];
    if (result[1] - result[0] < sellPrice - buyPrice) {
      result = [buyPrice, sellPrice];
    }
  }

  return result;
}
