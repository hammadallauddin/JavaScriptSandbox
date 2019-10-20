// Implements a Stack using linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if(this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.top) {
      return null;
    }

    if(this.top === this.bottom) {
      this.bottom == null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }

  peek() {
    return this.top;
  }
}

const myStack = new Stack();
myStack.push('allauddin');
myStack.push('hammad');
myStack.peek();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
