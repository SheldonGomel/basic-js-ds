const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

   constructor() {
      this.rootNode = null;
   }

   root() {
      return this.rootNode;
   }

   add(data) {
    this.rootNode = addNode(this.rootNode, data);
    function addNode(node, data) {
       if (!node) return new Node(data);
       if (node.data === data) return node;
       if (node.data > data) node.left = addNode(node.left, data);
       else node.right = addNode(node.right, data);
       return node;
    }
  }
   has(data) {
    return checkNode(this.rootNode, data);
    function checkNode(node, data) {
       if (node===null) return false;
       if (node.data === data) return true;   
       if(data < node.data) return checkNode(node.left, data);
       return checkNode(node.right, data);
    }
   }

   find(data) {
      return findNode(this.rootNode, data);
      function findNode(node, data) {
         if (!node) return null;
         if (node.data === data) return node;
         //return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
         if(data < node.data) return findNode(node.left, data);
         return findNode(node.right, data);
      }
   }

   remove(data) {
      this.rootNode = removeNode(this.rootNode, data);
      function removeNode(node, data) {
         if (node===null) return null;
         if (node.data > data) {
            node.left = removeNode(node.left, data);
            return node;
         } else if (node.data < data) {
            node.right = removeNode(node.right, data);
            return node;
         } else {
            if (node.right===null && node.left===null) return null;
            if (node.left===null) return node.right;
            if (node.right===null) return node.left;
            let minRight = node.right;
            while (minRight.left) {
               minRight = minRight.left;
            }
            node.data = minRight.data;
            node.right = removeNode(node.right, minRight.data);
            return node;
         }
      }
   }

   min() {
    if (!this.rootNode) return;
    let node = this.rootNode;
    while(node.left){
        node = node.left;
    }
    return node.data;
   }

   max() {
    if (this.rootNode === null) return;
    let node = this.rootNode;
    while(node.right){
        node = node.right;
    }
    return node.data;
   }
}

module.exports = {
   BinarySearchTree
};