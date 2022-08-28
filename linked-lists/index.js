class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  get tail() {
    let node = this.head;

    while (node.nextNode !== null) {
      node = node.nextNode;
    }

    return node;
  }

  get size() {
    let node = this.head;
    let i = +!!this.head;

    while (node.nextNode !== null) {
      i++;
      node = node.nextNode;
    }

    return i;
  }

  append(value) {
    this.tail.nextNode = new Node(value);

    return this;
  }

  prepend(value) {
    const node = new Node(value);
    node.nextNode = this.head;
    this.head = node;

    return this;
  }

  pop() {
    let node = this.head;

    while (node.nextNode?.nextNode !== null) {
      node = node.nextNode;
    }

    node.nextNode = null;

    return this;
  }

  shift() {
    this.head = this.head.nextNode;

    return this;
  }

  at(idx) {
    let node = this.head;
    let i = 0;

    while (i !== idx) {
      i++;
      node = node.nextNode;
    }

    return node;
  }

  find(value) {
    let node = this.head;
    let i = 0;

    while (node.nextNode !== null) {
      if (node.value === value) return i;
      i++;
      node = node.nextNode;
    }

    if (node.value === value) return i; // quick fix
    return null;
  }

  contains(value) {
    return this.find(value) !== null;
  }

  insertAt(value, idx) {
    if (idx > this.size - 1) this.append(value);
    else if (idx <= 0) this.prepend(value);
    else {
      const node = new Node(value);
      const prev = this.at(idx - 1);
      node.nextNode = prev.nextNode;
      prev.nextNode = node;
    }

    return this;
  }

  removeAt(idx) {
    if (idx > this.size - 1) this.pop();
    else if (idx <= 0) this.shift();
    else {
      const prev = this.at(idx - 1);
      const toBeRemoved = prev.nextNode;
      prev.nextNode = toBeRemoved.nextNode;
    }

    return this;
  }

  toString() {
    let node = this.head;
    let output = '';

    while (node.nextNode !== null) {
      output += `( ${JSON.stringify(node.value)} ) -> `;
      node = node.nextNode;
    }

    output += `( ${JSON.stringify(node.value)} )`;

    return output.trim();
  }
}

module.exports = LinkedList;
