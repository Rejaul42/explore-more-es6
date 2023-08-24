class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('this is the toyota car')
    }
}

class Bus extends Vehicle{
    constructor(name, price, pesenger, seat){
        super(name, price);
        this.pesenger = pesenger;
        this.seat = seat;
    }
}

class Truck extends Vehicle{
    constructor(name, price, load, power){
        super(name, price);
        this.load = load;
        this.power = power;
    }
}