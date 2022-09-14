// this defines what a node is(Made of)
class ListNode {
  constructor(value, next) {
    this.head = value;
    this.tail = next;
  }
}

// Class Definition: LinkedList. Here at the contractor you can add two parameter like( any number or string as its HEAD and TAIL) or define it a NULL this way: (head = null, tail = null) inside the constructor bearcats.
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // after adding to the HEAD, below will become the TAIL. Either the head or tail NULL or whatever you define it as. Especially for the first time/node.
  addToHead(value) {
    const newNode = new ListNode(this.head, this.tail);
    this.head = value;
    this.tail = newNode;
    this.length++; // this with pair in Class LinkedList, beautifully tell you the number of existing lists there
  }
}

// Example. 
// Here we add some nodes to the linked list.When the e.g. 4 added, the tail will be either the head or tail NULL or whatever you define it as.Especially for the first time / node.
const firstList = new LinkedList();
firstList.addToHead(4);
firstList.addToHead(3);
firstList.addToHead(3);
firstList.addToHead(2);
firstList.addToHead(1);
const SecondList = new LinkedList();
SecondList.addToHead(10);
SecondList.addToHead(7);
SecondList.addToHead(6);
SecondList.addToHead(5);
SecondList.addToHead(4);
SecondList.addToHead(2);
const ThirdList = new LinkedList();
ThirdList.addToHead(-10);
ThirdList.addToHead(-20);
ThirdList.addToHead(-30);

// Create a list of linked lists
const lists = [firstList, SecondList, ThirdList];


const merge = function (firstList, secondList) {
  if (firstList.head == null) return secondList;
  if (secondList.head == null) return firstList;
  // this will be the new head of the merged list, after comparing the first head/nodes to the second list's head. If the first head is smaller, then it take it out & adds it to a new array/LinkedList. IF it was NOT smaller then it takes the second lists head & adds it to the new array/LinkedList. AND it will keep doing that.
  if (firstList.head < secondList.head) {
    firstList.tail = merge(firstList.tail, secondList);
    return firstList;
  } else {
    secondList.tail = merge(firstList, secondList.tail);
    return secondList;
  }
};

// Merge the lists. This is the brain function that will merge the lists.
const mergeKLists = (lists) => {
  if (!lists.length) return null;
  // this keep looping through the lists & merge them 2 by 2 until lists are finished.
  for (let i = 1; i < lists.length; i++) {
    lists[0] = merge(lists[0], lists[i]);
  }

  return lists[0];
};

console.log(mergeKLists(lists));
