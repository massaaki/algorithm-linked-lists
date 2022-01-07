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
    console.log('current tail..: ', this.tail)

    this.tail.next = newNode; //update de point
    console.log('updating tail.next..: ', this.tail)

    this.tail = newNode; //update last element
    console.log('updating tail..: ', this.tail)

    console.log();
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

    console.log('head', this.head);
    newNode.next = this.head;
    console.log('head', this.head);
    this.head = newNode;
    console.log('head', this.head);

    console.log();

    return this;

  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(16);
// myLinkedList.prepend(32);
// myLinkedList.prepend(2);

console.log(myLinkedList);