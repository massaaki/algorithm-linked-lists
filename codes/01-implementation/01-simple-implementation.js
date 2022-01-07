//10 --> 5 --> 16 --> null

// let myLinnkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }


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
    const newNode = {
      value: value,
      next: null
    }

    this.tail.next = newNode;
    this.tail = newNode;

    //update the length
    this.length++;
    return this;
  }

  //add to the begining
  prepend (value) {
    const newNode = {
      value: value,
      next: null
    }

    newNode.next = this.head;
    this.head = newNode;
    return this;

  }
}

const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
myLinkedList.prepend(32);
myLinkedList.prepend(2);

console.log(myLinkedList);