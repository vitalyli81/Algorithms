/**
 * 
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
 * 
 * Example:
 * 
 * Input:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) return null;
  if (lists.length === 1) return lists[0];

  return partition(lists, 0, lists.length - 1);
};

function partition(A, s, e) {
  if (s === e) return A[s];

  if (s < e) {
    var mid = Math.floor((s + e) / 2);
    var l1 = partition(A, s, mid);
    var l2 = partition(A, mid + 1, e);
    return mergeTwoLists(l1, l2);
  }
}

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
