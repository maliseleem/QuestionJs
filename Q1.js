const listOfObjs = [
  { name: 'foo', id: 1 },
  { name: 'foo2', id: 2 },
  { name: 'foo3', id: 3 },
];
const foundObj = listOfObjs.find((x) => x.id === 1);

foundObj.name = 'name changed';

console.log(foundObj);
console.log(listOfObjs);
