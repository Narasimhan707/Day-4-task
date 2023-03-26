const json1 = '{"name": "John", "age": 30, "city": "New York"}';
const json2 = '{"age": 30, "name": "John", "city": "New York"}';

// Parse JSON strings into objects
const obj1 = JSON.parse(json1);
const obj2 = JSON.parse(json2);

// Sort object properties alphabetically
const sortedObj1 = {};
const sortedObj2 = {};

Object.keys(obj1).sort().forEach(key => {
  sortedObj1[key] = obj1[key];
});
console.log(sortedObj1);
Object.keys(obj2).sort().forEach(key => {
  sortedObj2[key] = obj2[key];
});

// Compare sorted objects
const isEqual = JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2);

console.log(isEqual); // true