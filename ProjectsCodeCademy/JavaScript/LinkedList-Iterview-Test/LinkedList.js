class linkedList {
  constructor() {
    // this creates an empty constructor
    this.head = null; // this targets the first item/element in the LinkedList array. It is NULL because there is nothing in the array yet.
    this.length = 0; // this is keep track of the length of the LinkedList array, and avoid the need to go though the array to find the length
  }

  insertAtHead(data) {
    // this is a method that will insert a new item/element at the beginning of the LinkedList array
    const newNode = new LinkedListNode(data, this.head); // this creates a new Node with the data that is passed in as an argument. Ths DATA can be a number or anything you want. Because ypu created a NEW NODE, then this NODE will be the SECOND item/element in your array/list
    this.head = newNode; 
    this.length++; // means add one element to our array. Our elements get ONE longer which this keep track of.
  }
}

class LinkedListNode { // this is to reference to each of the list items/elements in the LinkedList array
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = linkedList;

// SECOND STEP; To test this and see actual output, we create a new file called app.js and require this file