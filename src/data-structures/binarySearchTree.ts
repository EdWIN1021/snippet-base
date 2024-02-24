class Node {
  public val: number;
  public left: Node | null;
  public right: Node | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  public root: Node | null;

  constructor() {
    this.root = null;
  }

  public insert(val: number) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;
    while (true) {
      if (curr.val === val) {
        return this;
      }

      if (val < curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      } else if (val > curr.val) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
