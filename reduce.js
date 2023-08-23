const numbers  = [23, 56, 76, 40, 98, 67];
const result = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(result);