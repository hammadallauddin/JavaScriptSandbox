//Making own array with own functions

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
  
    get(index) {
      return this.data[index];
    }
  
    push(data) {
      this.data[this.length] = data;
      this.length++;
      return data;
    }
  
    pop() {
      const data = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return data;
    }
  
    deleteAtIndex(index) {
      const data = this.data[index];
      this.shiftItems(index);
      return data;
    }
  
    shiftItems(index) {
      for(let i=index;i<this.length-1;i++) {
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length--;
    }
  
  }
  
  // testing my own array
  const myArray = new MyArray();
  myArray.push('hello');
  myArray.push('hi');
  myArray.push('you');
  myArray.push('!');
  myArray.pop();
  myArray.deleteAtIndex(0);
  myArray.push('are');
  myArray.push('nice');
  myArray.shiftItems(0);
  console.log(myArray);