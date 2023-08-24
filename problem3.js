const instructor = [
    {name: 'Nodi', age: 26, position: 'Senior'},
    {name: 'Sagor', age: 24, position: 'junior'},
    {name: 'Akhi', age: 22, position: 'Senior'}
]

const result = instructor.filter(item => item.position === 'Senior');
console.log(result.name)