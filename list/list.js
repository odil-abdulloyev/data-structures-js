class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export default class List {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  pushFront(value) {
    const newHead = new Node(value, null, this._head);
    if (this._head) {
      this._head.prev = newHead;
    }
    this._head = newHead;
    if (this._length === 0) {
      this._tail = newHead;
    }
    ++this._length;
    return this;
  }

  pushBack(value) {
    const newTail = new Node(value, this._tail, null);
    if (this._tail) {
      this._tail.next = newTail;
    }
    this._tail = newTail;
    if (this._length === 0) {
      this._head = newTail;
    }
    ++this._length;
    return this;
  }

  popFront() {
    if (this._length > 0) {
      this._head = this._head.next;
      if (this._head) {
        this._head.prev = null;
      }
      --this._length;
    }
    return this;
  }

  popBack() {
    if (this._length > 0) {
      this._tail = this._tail.prev;
      if (this._tail) {
        this._tail.next = null;
      }
      --this._length;
    }
    return this;
  }

  clear() {
    while (this._length > 0) {
      this.popFront();
    }
    return this;
  }

  forEach(callback) {
    let it = this._head;
    let index = 0;
    while (it) {
      callback.call(this, it.value, index);
      it = it.next;
      ++index;
    }
  }

  get length() {
    return this._length;
  }

  get front() {
    if (this._length > 0) {
      return this._head.value;
    }
    return undefined;
  }

  get back() {
    if (this._length > 0) {
      return this._tail.value;
    }
    return undefined;
  }

  toString() {
    let res = '';
    this.forEach((x) => {
      if (x) {
        res += `${x.toString()},`;
      }
    });
    return `[${res.slice(0, -1)}]`;
  }
}
