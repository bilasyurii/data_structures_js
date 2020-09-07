import LinkedList from './data-structures/linked-list.js';
import DoubleLinkedList from './data-structures/double-linked-list.js';
import Stack from './data-structures/stack.js';
import Queue from './data-structures/queue.js';
import Deque from './data-structures/deque.js';
import BinaryTree from './data-structures/binary-tree.js';

function listTest(list) {
  list.push(2);
  list.push(5);
  list.push(4);
  list.push(6);
  list.unshift(1);
  list.insert(1, 7);

  console.log(list.toArray().join(' '));

  console.log(list.pop());
  console.log(list.shift());
  console.log(list.remove(1));

  console.log(list.toArray().join(' '));
  
  console.log(list.get(0));
  console.log(list.get(1));

  console.log(list.indexOf(5));
  console.log(list.indexOf(8));

  console.log(list.find((item) => item < 10));
  console.log(list.find((item) => item >= 10));
  console.log(list.findAll((item) => item <= 6).join(' '));
}

function linkedList() {
  const list = new LinkedList();

  listTest(list);
}

function doubleLinkedList() {
  const list = new DoubleLinkedList();

  listTest(list);
}

function stack() {
  const stack = new Stack();

  stack.push(2);
  stack.push(5);
  stack.push(4);
  stack.push(6);
  
  console.log(stack.toArray().join(' '));

  console.log(stack.pop());
  console.log(stack.top);
  console.log(stack.pop());
  console.log(stack.count);

  console.log(stack.toArray().join(' '));

  
  const stack2 = Stack.fromArray([1, 2, 3]);
  
  console.log(stack2.toArray().join(' '));
}

function queue() {
  const queue = new Queue();

  queue.enqueue(2);
  queue.enqueue(5);
  queue.enqueue(4);
  queue.enqueue(6);
  
  console.log(queue.toArray().join(' '));

  console.log(queue.dequeue());
  console.log(queue.front);
  console.log(queue.dequeue());
  console.log(queue.count);

  console.log(queue.toArray().join(' '));

  const queue2 = Queue.fromArray([1, 2, 3]);
  
  console.log(queue2.toArray().join(' '));
}

function dequeue() {
  const deque = new Deque();

  deque.push(2);
  deque.push(5);
  deque.pushFront(4);
  deque.pushFront(6);
  
  console.log(deque.toArray().join(' '));
  
  console.log(deque.back);
  console.log(deque.pop());
  console.log(deque.front);
  console.log(deque.popFront());
  console.log(deque.count);

  console.log(deque.toArray().join(' '));

  const deque2 = Queue.fromArray([1, 2, 3]);
  
  console.log(deque2.toArray().join(' '));
}

function binaryTree() {
  const tree = new BinaryTree();

  tree.add(3, 'lorem');
  tree.add(1, 'ipsum');
  tree.add(8, 'dolor');
  tree.add(5, 'sit');

  console.log(tree.get(8));
  console.log(tree.get(1));
  console.log(tree.get(5));
  console.log(tree.get(9));
}

const tests = [
  linkedList,
  doubleLinkedList,
  stack,
  queue,
  dequeue,
  binaryTree,
];

// tests.forEach((test) => test());

tests[5]();
