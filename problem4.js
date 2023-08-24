const persons = [
    {name: 'mina', age: 15},
    {name: 'Rina', age: 17},
    {name: 'Inna', age: 19}
];

const sumOfAge = persons.reduce((accumulator, current) => accumulator + current.age,0);
console.log(sumOfAge)
