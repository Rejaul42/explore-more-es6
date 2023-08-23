class Products{
    country = 'Bangladesh'
    constructor(name){
        this.name = name
    }
    sentence(number){
        console.log(`${number} this number is my favorite`)
    }
}

const result = new Products('apple');
console.log(result);

result.sentence('54');

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
};

const tich = new Teacher('Topon', 'Physics');
console.log(tich);

const sopon = new Teacher('Sopon', 'Math');
console.log(sopon)