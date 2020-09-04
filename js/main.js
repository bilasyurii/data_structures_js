import LinkedList from './data-structures/linked-list.js';
function linkedList() {
  const list = new LinkedList();

  list.push(2);
  list.push(5);
  list.push(4);
  list.unshift(1);
  list.insert(1, 7);

  console.log(list.toArray().join(' '));

  console.log(list.pop());
  console.log(list.shift());
  console.log(list.remove(1));

  console.log(list.toArray().join(' '));
  
  console.log(list.get(0));
  console.log(list.get(1));
}

const tests = [
  linkedList,
];

tests.forEach((test) => test());
