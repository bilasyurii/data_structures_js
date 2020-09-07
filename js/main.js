import LinkedList from './data-structures/linked-list.js';
import DoubleLinkedList from './data-structures/double-linked-list.js';
import Stack from './data-structures/stack.js';

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

const tests = [
  linkedList,
  doubleLinkedList,
  stack,
];

// tests.forEach((test) => test());

tests[2]();
