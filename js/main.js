import LinkedList from './data-structures/linked-list.js';
function linkedList() {
  const list = new LinkedList();

  list.push(2);
  list.push(5);
  list.push(4);

  list.unshift(1);

  console.log(list.toArray().join(' '));

  list.insert(1, 7);

  console.log(list.toArray().join(' '));

  console.log(list.pop());
  console.log(list.shift());

  console.log(list.toArray().join(' '));
}

const tests = [
  linkedList,
];

tests.forEach((test) => test());
