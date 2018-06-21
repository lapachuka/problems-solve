/**
You are given two non-empty linked lists representing two non-negative integers.
 The digits are stored in reverse order and each of their nodes contain a single digit.
 Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

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
var addTwoNumbers = function(l1, l2) {
  let listNode = new ListNode();
  let startPoint = listNode;
  let numbStore = 0;
  let midRes;

  while (l1 || l2) {
    midRes = numbStore;
    if (l1) {
      midRes += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      midRes += l2.val;
      l2 = l2.next;
    }

    numbStore = midRes >= 10 ? 1 : 0;
    listNode.next = new ListNode(midRes % 10);
    listNode = listNode.next;
  }

  if (numbStore) {
    listNode.next = new ListNode(numbStore);
  }

  return startPoint.next;
};
