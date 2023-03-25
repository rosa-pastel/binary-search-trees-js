let Tree = require("./tree.js");
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.prettyPrint();
/*
│       ┌── 6345
│       │   └── 324
│   ┌── 67
│   │   └── 23
│   │       └── 9
└── 8
    │   ┌── 7
    │   │   └── 5
    └── 4
        └── 3
            └── 1
*/
console.log(tree.isBalanced()); //1
console.log(tree.levelOrder()); // [8, 4, 67, 3, 7, 23, 6345, 1, 5, 9, 324]
console.log(tree.preorder()); // [8, 4, 3, 1, 7, 5, 67, 23, 9, 6345, 324]
console.log(tree.postorder()); // [1, 3, 5, 7, 4, 9, 23, 324, 6345, 67, 8]
console.log(tree.inorder()); // [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]
tree.insertValue(380);
tree.insertValue(500);
tree.insertValue(600);
tree.prettyPrint();
/*
│       ┌── 6345
│       │   │           ┌── 600
│       │   │       ┌── 500
│       │   │   ┌── 380
│       │   └── 324
│   ┌── 67
│   │   └── 23
│   │       └── 9
└── 8
    │   ┌── 7
    │   │   └── 5
    └── 4
        └── 3
            └── 1
*/
console.log(tree.isBalanced()); //0
tree.rebalance();
console.log(tree.isBalanced()); //1
console.log(tree.levelOrder()); // [23, 5, 500, 3, 8, 324, 6345, 1, 4, 7, 9, 67, 380, 600]
console.log(tree.preorder()); // [23, 5, 3, 1, 4, 8, 7, 9, 500, 324, 67, 380, 6345, 600]
console.log(tree.postorder()); // [1, 4, 3, 7, 9, 8, 5, 67, 380, 324, 600, 6345, 500, 23]
console.log(tree.inorder()); // [1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 380, 500, 600, 6345]
tree.prettyPrint();
/*
│       ┌── 6345
│       │   └── 600
│   ┌── 500
│   │   │   ┌── 380
│   │   └── 324
│   │       └── 67
└── 23
    │       ┌── 9
    │   ┌── 8
    │   │   └── 7
    └── 5
        │   ┌── 4
        └── 3
            └── 1
*/
