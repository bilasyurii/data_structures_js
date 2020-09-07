import LinkedList from './data-structures/linked-list.js';
import DoubleLinkedList from './data-structures/double-linked-list.js';

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

const tests = [
  linkedList,
  doubleLinkedList,
];

// tests.forEach((test) => test());

tests[1]();
