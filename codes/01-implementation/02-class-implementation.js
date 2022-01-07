class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor (value) {
    this.head = {
      value: value,
      next: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  //update the list in final
  append (value) {
    const newNode = new Node(value);

    this.tail.next = newNode; //update de point
    this.tail = newNode; //update last element

    this.length++;
    return this;
  }

  //add to the begining
  prepend (value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    return this;
  }


  printList () {
    const array = [];

    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }


    console.log(array);
  }

  traverseToIndex (index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      counter++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  //add a value in some position
  insert (index, value) {

    if (index >= this.length) {
      return this.append(value);
    } else if (index == 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    let leaderNode = this.traverseToIndex(index - 1);
    const holdeingPointer = leaderNode.next

    leaderNode.next = newNode;
    newNode.next = holdeingPointer;

    return this;
  }

}


const myLinkedList = new LinkedList(0);
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
// myLinkedList.append(5);
// myLinkedList.append(6);
// myLinkedList.prepend(32);
// myLinkedList.prepend(2);

myLinkedList.insert(2, 10);
myLinkedList.insert(4, 20);
myLinkedList.insert(2, 30);

myLinkedList.printList();