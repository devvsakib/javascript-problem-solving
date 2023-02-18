class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    // create a new node with the value passed to the constructor
    this.head = new Node(value);
    // set the tail to be the same as the head since there is only one node in the linkedlist
    this.tail = this.head;
    this.length = 1;
  }

  // append a node to the end of the linkedlist
  append(value) {
    const node = new Node(value);
    // set the next property of the tail to be the new node
    this.tail.next = node;
    // set the previous property of the new node to be the tail
    node.prev = this.tail;
    // set the tail to be the new node
    this.tail = node;
    this.length++;
    return this.print();
  }

  // prepend a node to the beginning of the linkedlist
  prepend(value) {
    const node = new Node(value);
    // set the next property of the new node to be the head
    node.next = this.head;
    // set the previous property of the head to be the new node
    this.head.prev = node;
    // set the head to be the new node
    this.head = node;
    this.length++;
    return this.print();
  }

  // insert a node at a specific index
  insert(index, value) {
    const node = new Node(value);
    // if index is greater than the length of the linkedlist, append the value to the end
    if (index >= this.length) {
      this.append(value);
      return this.print();
    }

    // if index is 0, prepend the value to the beginning
    if (index === 0) {
      this.prepend(value);
      return this.print();
    }

    // if index is in the middle of the linkedlist
    // [1,3,2,5] -- insert(2,55)
    // leadPointer -> 3
    let leadPointer = this.traverseToIndex(index - 1);
    // trailPointer -> 2
    let trailPointer = leadPointer.next;
    // set the next of the leadPointer to the new node
    leadPointer.next = node;
    // set the previous of the new node to the leadPointer
    node.prev = leadPointer;
    // set the next of the new node to the trailPointer
    node.next = trailPointer;
    // set the previous of the trailPointer to the new node
    trailPointer.prev = node;
    this.length++;
    return this.print();
  }

  // remove a node at a specific index
  remove(index) {
    // if index is 0, set the head to be the next node
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this.print();
    }

    // if index is the last node, set the tail to be the previous node
    if (index >= this.length) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
      return this.print();
    }

    // if index is in the middle of the linkedlist
    // [1,3,2,5] -- remove(2)
    // leadPointer -> 3
    let leadPointer = this.traverseToIndex(index - 1);
    // trailPointer -> 5
    let trailPointer = leadPointer.next.next;
    // set the next of the leadPointer to the trailPointer
    leadPointer.next = trailPointer;
    // set the previous of the trailPointer to the leadPointer
    trailPointer.prev = leadPointer;
    this.length--;
    return this.print();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // print the linkedlist as an array
  print() {
    const array = [];
    // Start with first item in the linkedlist
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

// Test cases
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.insert(2, 55);
myLinkedList.insert(3, 45);
myLinkedList.append(22);
myLinkedList.prepend(1);
myLinkedList.insert(0, 0);
myLinkedList.insert(50, 99);
myLinkedList.remove(0);
myLinkedList.remove(50);
myLinkedList.remove(3);
myLinkedList.remove(3);
console.log(myLinkedList.print());
