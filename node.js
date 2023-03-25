function Node(data, left = null, right = null) {
  function insertValue(value) {
    if (!this) return;
    else if (this.data < value) {
      this.right
        ? this.right.insertValue(value)
        : (this.right = new Node(value));
    } else if (this.data > value) {
      this.left ? this.left.insertValue(value) : (this.left = new Node(value));
    }
  }

  function deleteValue(value, parent = this) {
    let node;
    while (parent) {
      if (parent.data === value) {
        node = parent;
        break;
      } else if (parent.left.data === value) {
        node = parent.left;
        break;
      } else if (parent.right.data === value) {
        node = parent.right;
        break;
      } else if (parent.data < value) {
        parent = parent.right;
      } else {
        parent = parent.left;
      }
    }
    let isLeftChild = parent.left === node;
    if (node.left && node.right) {
      let currentParent = node;
      let currentNode = node.right;
      while (currentNode.left !== null) {
        currentParent = currentNode;
        currentNode = currentNode.left;
      }
      currentParent.left = currentNode.right;
      node.data = currentNode.data;
    } else if (node.left) {
      if (isLeftChild) parent.left = node.left;
      else parent.right = node.left;
    } else if (node.right) {
      if (isLeftChild) parent.left = node.right;
      else parent.right = node.right;
    } else {
      if (isLeftChild) parent.left = null;
      else parent.right = null;
    }
  }

  function find(value, node = this) {
    if (node.data === value) {
      return node;
    } else if (node.data < value) {
      return node.right ? node.right.find(value) : null;
    } else {
      return node.left ? node.left.find(value) : null;
    }
  }

  function levelOrder(func) {
    const queue = [this];
    const array = [];
    let node;
    while (queue[0]) {
      node = queue[0];
      if (func) func(node);
      else array.push(node.data);
      queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return array;
  }

  function levelOrderRecursive(func, queue = [this], array = []) {
    if (queue[0]) {
      let node = queue[0];
      if (func) func(node);
      else array.push(node.data);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      queue.shift();
      array = levelOrderRecursive(func, queue, array);
    }
    return array;
  }

  function inorder(func, array = []) {
    if (!this) return array;
    if (this.left) {
      array = this.left.inorder(func, array);
    }
    if (func) func(this);
    else array.push(this.data);
    if (this.right) {
      array = this.right.inorder(func, array);
    }
    return func || array;
  }

  function preorder(func, array = []) {
    if (!this) return array;
    if (func) func(this);
    else array.push(this.data);
    if (this.left) {
      array = this.left.preorder(func, array);
    }
    if (this.right) {
      array = this.right.preorder(func, array);
    }
    return func || array;
  }

  function postorder(func, array = []) {
    if (!this) return array;
    if (this.left) {
      array = this.left.postorder(func, array);
    }
    if (this.right) {
      array = this.right.postorder(func, array);
    }
    if (func) func(this);
    else array.push(this.data);
    return func || array;
  }

  function height(node = this) {
    if (!node) return 0;
    let heightLeft = 0;
    let heightRight = 0;
    if (node.left) {
      heightLeft = node.left.height() + 1;
    }
    if (node.right) {
      heightRight = node.right.height() + 1;
    }
    return Math.max(heightLeft, heightRight);
  }

  function depth(node, root = this) {
    if (node === root) return "found";
    if (root.left) {
      let left = root.left.depth(node);
      if (left === "found") return 1;
      else if (left > 0) return left + 1;
    }
    if (root.right) {
      let right = root.right.depth(node);
      if (right === "found") return 1;
      else if (right > 0) return right + 1;
    }
    return 0;
  }

  function isBalanced() {
    if (!this || (!this.left && !this.right)) return 1;
    else return Math.abs(this.left.height() - this.right.height()) > 1 ? 0 : 1;
  }
  return {
    data,
    left,
    right,
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
module.exports = Node;
