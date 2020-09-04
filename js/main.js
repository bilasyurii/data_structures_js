import Test from './data-structures/test.js';

function linkedList() {
  new Test();
}

const tests = [
  linkedList,
];

tests.forEach((test) => test());
