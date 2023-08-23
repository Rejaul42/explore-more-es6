const numbers = [3, 43, 8, 9, 5, 3, 5];

const doubled = numbers.map(number => number *2);
console.log(doubled);

const fiveAdded = numbers.map(num => num + 5);
console.log(fiveAdded);

const names = ['abul', 'khalek', 'michel', 'anderson'];
const personLength = names.map(name => name.length);
console.log(personLength);

const firstPerson = names.map(n1 => n1[0])
console.log(firstPerson)
