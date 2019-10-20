// Make Own Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if(this.root === null) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          currentNode = currentNode.left;
        } else if(value > currentNode.value) {
          if(!currentNode.right) {
            currentNode.right = node;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if(!this.root) {
      return false;
    }

    let currentNode = this.root;
    while(currentNode) {
      if(value == currentNode.value) {
        return currentNode;
      } else if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }


  remove(value) {
    if(!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while(currentNode) {
      
      if(value < currentNode.value) {
        this.parentNode = currentNode;
        this.currentNode = this.currentNode.left;
      } else if(value > currentNode.value) {
        this.parentNode = currentNode.value;
        this.currentNode = currentNode.right;
      } else if(currentNode.value == value) {
         // We have a match

          //Option 1: No right child
        if(currentNode.right == null) {
          if(parentNode === null) {
            this.root === currentNode.left; 
          } else {

            //if parent > current value make current left child as a left child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } 
            //if parent < current value make current left child as a right child of parent
            else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left; 
            }
          }
        } 

        //Option 2: Right child which does not have left child
        else if(currentNode.right.left == null) {
          if(parentNode === null) {
            this.root === currentNode.left; 
          } else {
            currentNode.right.left = currentNode.left;

            //if parent > current make right child of the left parent 
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } 
            //if parent < current make right child of the right parent 
            else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right; 
            }
          }
        } 

        //Option 2: Right child which have left child
        else {

          //find the right child's left most child
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while(leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;

          if(parentNode == null) {
            this.root = leftMost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }
        return true;
      }
    }
  }
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(1);
tree.insert(20);
tree.insert(170);
tree.insert(15);

tree.remove(20);

JSON.stringify(traverse(tree.root));

function traverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
