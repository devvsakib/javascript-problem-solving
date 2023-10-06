/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var dummy = new ListNode(0);
        dummy.next = head;
        var prevGroupTail = dummy;

        while (head) {
            var groupStart = head;
            var groupEnd = getGroupEnd(head, k);

            if (!groupEnd)
                break;

            prevGroupTail.next = reverseList(groupStart, groupEnd.next);
            prevGroupTail = groupStart;
            head = prevGroupTail.next;
        }
    var newHead = dummy.next;
    return newHead;
}

var getGroupEnd = function(head, k) {
    while (head && k > 1) {
        head = head.next;
        k--;
    }
    return head;
}

var reverseList = function(head, stop) {
    var prev = stop;
    while (head !== stop) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
