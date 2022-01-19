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

    // create array to count current level
    const queue = new Array();

    // start current level with root
    queue.push(root);


    while (queue.length > 0) {
      // count levelSize for currentLevel array
      let levelSize = queue.length;

      // initialize currentLevel array to hold current level
      let currentLevel = []

      // loop through queue
      for (i = 0; i < levelSize; i++) {
        // take each element
        let currentNode = queue.shift();

        // push value of element to currentLevel array
        currentLevel.push(currentNode.value);

        // ADDING CHILDREN TO QUEUE
        // if left node isn't null, push it to queue
        if (currentNode.left !== null) {
          queue.push(currentNode.left)
        }

        // if right node isn't null, push it to queue
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }

      // add currentLevel array to result array
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