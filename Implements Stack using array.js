// Implements a Stack using array

class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }

  peek() {
    return this.array[this.array.length-1];
  }
}

const myStack = new Stack();
myStack.push('allauddin');
myStack.push('hammad');
myStack.peek();
myStack.pop();
myStack.peek();
// myStack.pop();
myStack.peek();
