/**
 * 
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * 
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return intervals;

  var sortedIntervals;
  var results = [];

  sortedIntervals = intervals.sort((a, b) => a.start - b.start);

  results.push(sortedIntervals[0]);

  for (let i = 1; i < sortedIntervals.length; i++) {
    let resultLastElem = results[results.length - 1];
    let currentElem = sortedIntervals[i];

    if (resultLastElem.end >= sortedIntervals[i].start && resultLastElem.end < currentElem.end) {
      resultLastElem.end = currentElem.end;
    } else if (resultLastElem.end < sortedIntervals[i].start) {
      results.push(sortedIntervals[i]);
    }
  }

  return results;
};
