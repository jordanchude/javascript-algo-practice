// PROBLEM STATEMENT
// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse = function(root) {
    let result = [];

    // if root is null, tree is empty
    if (root === null) {
      return result;
    }

    const queue = new Array();
    queue.push(root);

    while (queue.length > 0) {
      let levelSize = queue.length;
      let currentLevel = []

      for (i = 0; i < levelSize; i++) {
        let currentNode = queue.shift();
        currentLevel.push(currentNode.value);

        if (currentNode.left !== null) {
          queue.push(currentNode.left)
        }

        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }

      result.push(currentLevel);
    }

    return result;
  };
  
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Level order traversal: ${traverse(root)}`);

  // console.log(root);