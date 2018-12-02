/**
 * 
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
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

 // iterative approach
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  var l3 = new ListNode(0),
    tempNode = l3;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tempNode.next = new ListNode(l1.val);
      l1 = l1.next;
    } else if (l1.val > l2.val) {
      tempNode.next = new ListNode(l2.val);
      l2 = l2.next;
    } else {
      tempNode.next = new ListNode(l1.val);
      tempNode = tempNode.next;
      tempNode.next = new ListNode(l2.val);
      l1 = l1.next;
      l2 = l2.next;
    }
    tempNode = tempNode.next;
    
  }

  tempNode.next = l1 || l2;

  return l3.next;
};

// recursive approach

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next  = mergeTwoLists(l1, l2.next);
    return l2;
  }
}
