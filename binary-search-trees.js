function Node(data, left = null, right = null) {
  const insertValue = function (value) {
    if (!this) return;
    else if (this.data < value) {
      this.right
        ? this.right.insertValue(value)
        : (this.right = new Node(value));
    } else if (this.data > value) {
      this.left ? this.left.insertValue(value) : (this.left = new Node(value));
    }
  };

  const deleteValue = (value) => {
    if (!this) return;
    else if (this.data === value) {
    } else if (this.data < value) {
      this.right
        ? this.right.insertValue(value)
        : (this.right = new Node(value));
    } else if (this.data > value) {
      this.left ? this.left.insertValue(value) : (this.left = new Node(value));
    }
  };

  return { data, left, right, insertValue, deleteValue };
}

function Tree(array) {
  const sortIntegers = (arr) => {
    return arr.sort((a, b) => {
      return a - b;
    });
  };

  const buildTree = (arr) => {
    console.log(arr);
    const mid = Math.floor(arr.length / 2);
    const leftTree = mid > 0 ? buildTree(arr.slice(0, mid)) : null;
    const rightTree = mid > 1 ? buildTree(arr.slice(mid, arr.length)) : null;
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

  const root = buildTree(sortIntegers([...new Set(array)]));
  return { root, prettyPrint };
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.root.insertValue(333);
tree.prettyPrint();
