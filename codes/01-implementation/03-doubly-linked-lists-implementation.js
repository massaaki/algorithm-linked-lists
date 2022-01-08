class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
    this.preview = null;
  }
}

class DoublyLinkedList {
  constructor (value) {
    this.head = {
      value: value,
      next: null,
      preview: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append (value) {
    const newNode = new Node(value);

    newNode.preview = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  prepend (value) {
    const newNode = new Node(value);

    this.head.preview = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
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

  insert (index, value) {
    if (index >= this.length) {
      return this.append(value);
    } else if (index == 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    let leaderNode = this.traverseToIndex(index - 1);
    const followerNode = leaderNode.next

    leaderNode.next = newNode;
    newNode.preview = leaderNode;
    newNode.next = followerNode;
    followerNode.preview = newNode;

    return this;
  }


  remove (index) {
    if (index == 0) {
      this.head = this.head.next
      this.head.preview = null
    } else if (index == this.length - 1) {
      const lasPos = this.length - 1
      const lastUpdatedLastNode = this.traverseToIndex(lasPos - 1);
      lastUpdatedLastNode.next = null;
    } else {
      const leaderNode = this.traverseToIndex(index - 1);
      const nodeToRemove = leaderNode.next;

      leaderNode.next = nodeToRemove.next;
    }
    this.length--;
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

  printReverseList () {
    const array = [];
    let currentNode = this.tail;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.preview;
    }

    console.log(array);
  }


}


const myLinkedList = new DoublyLinkedList(0);
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
// myLinkedList.prepend(1);
// myLinkedList.prepend(2);
// myLinkedList.prepend(3);
// myLinkedList.prepend(4);

// myLinkedList.insert(5, 99);
// myLinkedList.remove(4)
myLinkedList.printList();
// myLinkedList.printReverseList()
