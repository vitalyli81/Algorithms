/**
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var carryover = 0,
    l3 = new ListNode(0),
    l3Temp = l3;

  while (l1 || l2 || carryover) {
    let l1Val = l1 && l1.val || 0,
      l2Val = l2 && l2.val || 0,
      sum = l1Val + l2Val + carryover;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    carryover = 0;

    if (sum > 9) {
      carryover = 1;
      sum = sum % 10;
    }

    l3Temp.val += sum;
    if (l1 || l2 || carryover) {
      l3Temp.next = new ListNode(0);
      l3Temp = l3Temp.next;
    }
  }

  return l3;
};
