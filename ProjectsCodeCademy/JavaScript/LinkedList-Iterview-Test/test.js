For better understanding watch this; https://www.youtube.com/watch?v=gJjPWA8wpQg

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}

var mergeKLists = function (lists) {};
 */
var mergeKLists = function (lists) {
  // Create and empty array to save the values from the linked lists
  let listOfValues = [];
  // iterate trough the array of linked lists
  lists.forEach((linkedList) => {
    // for each linked list continue iterating until the current linked list node == null
    while (linkedList) {
      // push the current value of the node to the listOfValues array
      listOfValues.push(linkedList.val);
      // move to the next node if this node becomes null we are at the end of the list
      linkedList = linkedList.next;
    }
  });
  // sort the list in asending order
  listOfValues.sort((a, b) => {
    return a - b;
  });
  // create a holder for the head node
  let headHolder = new ListNode();
  // create a node to iterate through the linked list.
  let listIteratorNode = headHolder;
  // take each value of the array an perfrom the following
  listOfValues.map((x) => {
    // create a new node with the value of the node being the value from the array
    // and place it as the .next of the current node
    listIteratorNode.next = new ListNode(x, null);
    // move the iterator to the newly created node
    listIteratorNode = listIteratorNode.next;
  });
  // We are returning the head node which is the .next of the head holder
  return headHolder.next;
};