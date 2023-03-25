let Node = require("./node.js");
function Tree(array) {
  const sortIntegers = (arr) => {
    return arr.sort((a, b) => {
      return a - b;
    });
  };

  const buildTree = (arr) => {
    const mid = Math.floor(arr.length / 2);
    const leftTree = arr.length > 1 ? buildTree(arr.slice(0, mid)) : null;
    const rightTree =
      arr.length > 2 ? buildTree(arr.slice(mid + 1, arr.length)) : null;
    return new Node(arr[mid], leftTree, rightTree);
  };
  /* 
  prettyPrint is not my own code, it was shared on The Odin Project at
  https://www.theodinproject.com/lessons/javascript-binary-search-trees
  */
  const prettyPrint = function (node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  function rebalance() {
    let array = this.root.inorder();
    this.root = new Tree(array).root;
  }

  function insertValue(value) {
    this.root.insertValue(value);
  }
  function deleteValue(value) {
    this.root.deleteValue(value);
  }
  function find(value) {
    return this.root.find(value);
  }
  function levelOrder(func) {
    return this.root.levelOrder(func);
  }
  function levelOrderRecursive(func) {
    return this.root.levelOrderRecursive(func);
  }
  function inorder(func) {
    return this.root.inorder(func);
  }
  function preorder(func) {
    return this.root.preorder(func);
  }
  function postorder(func) {
    return this.root.postorder(func);
  }
  function height() {
    return this.root.height();
  }
  function depth() {
    return this.root.depth();
  }
  function isBalanced() {
    return this.root.isBalanced();
  }

  const root = buildTree(sortIntegers([...new Set(array)]));
  return {
    root,
    prettyPrint,
    rebalance,
    insertValue,
    deleteValue,
    find,
    levelOrder,
    inorder,
    preorder,
    postorder,
    levelOrderRecursive,
    height,
    depth,
    isBalanced,
  };
}

module.exports = Tree;
