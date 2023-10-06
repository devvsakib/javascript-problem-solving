# Reverse Nodes in K-group (L-I)
## Problem
### Description
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

#### Example

1. Input: head = [1,2,3,4,5], k = 2
   Output: [2,1,4,3,5]

2. Input: head = [1,2,3,4,5], k = 3
   Output: [3,2,1,4,5]

 
## Solution
```javascript
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
```
## How it works
### Approach
1. Create a dummy node and set its next to the head of the input list.
2. Initialize a prevGroupTail pointer to the dummy node.
3. Loop through the list until we reach the end.
4. In each iteration, set groupStart to the current head, and find groupEnd using the getGroupEnd     
    function, which returns the end node of the current group (which is k nodes away from the groupStart). If groupEnd is null, then we don't need to reverse the remaining nodes because there are less than k nodes left in the list.
5. Set nextGroupStart to groupEnd->next, and then set groupEnd->next to null to separate the group to 
    be reversed from the rest of the list.
6. Reverse the current group using the reverseList function and set prevGroupTail->next to the new 
    head of the reversed group. Then set groupStart->next to nextGroupStart.
7. Update prevGroupTail to the groupStart.
8. Set head to nextGroupStart.
9. Return the head of the resulting list (which is the dummy->next node).

## References
- [LeetCode](https://leetcode.com/problems/reverse-nodes-in-k-group/description/)

## Problem Added By
- [SjxSubham](https://github.com/SjxSubham)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.



