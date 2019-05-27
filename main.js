var vehicleName = 'Toyota';

function printVehicleNameOuter() {
    console.log(this.vehicleName);
}

console.log(this);

printVehicleNameOuter();
var vehicle = {
    vehicleName: 'Nissan',
    printVehicleNameInner: function () {
        return function (){
            console.log(this.vehicleName);
        }
    }
};

var execute = vehicle.printVehicleNameInner().bind(vehicle);
execute();

//==============================================

function taxCalclator(taxPercentage){
    var percentage = taxPercentage;
    return function (amount) {
        return amount*(percentage/100);
    }
}

var calculator = taxCalclator(30);
console.log(calculator(1000));
console.log(calculator(5000));

//==============================================

function fetchUsers() {
    fetch('https://api.github.com/users').then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
    });
}

fetchUsers();

//==============================================

function Vehicle(type) {
    Vehicle.VehicleCount++;
    this.type = type
}

Vehicle.VehicleCount = 0;
Vehicle.prototype.drive = function () {
    console.log('Vehicle is driving');
}

var vehicle= new Vehicle('Toyota');
console.log(vehicle.type);
vehicle.drive();

function Car(type) {
    Vehicle.call(this,type);
}

Car.prototype=Object.create(Vehicle.prototype);
Car.prototype.constructor=Car;

Car.prototype.balanceWheels = function () {
    console.log('Wheels are balanced');
}

var car = new Car('Nissan');
car.drive();
car.balanceWheels();

console.log(car.type, Vehicle.VehicleCount);

//==============================================

let vehicleName2 = 'Toyota';
vehicleName2 = 'Nissan';
const COUNTRY = 'Japan';

//==============================================

function fetchUsers() {
    return fetch('https://api.github.com/users')
        .then(response => response.json());
}
fetchUsers().then(json => {
    console.log(json);
});

//==============================================

async function fetchUsersAsync() {
    const  responce = await fetch('https://api.github.com/users');
    const json = await responce.json();
    console.log(json)
}

fetchUsersAsync();

//==============================================

class Vehicle2 {
    constructor(type) {
        Vehicle2.VehicleCount++;
        this.type = type;
    }
    drive() {
        console.log('Vehicle is driving');}
}
Vehicle2.VehicleCount = 0;
const vehicle2 = new Vehicle2('Toyota');
vehicle2.drive();
console.log(Vehicle2.VehicleCount);
class Car2 extends Vehicle2 {
    constructor(type) {
        super(type);
    }
    balanceWheels() {
        console.log('Wheels are balanced');
    }
}
const car2 = new Car2('Nissan');
car2.drive();
car2.balanceWheels();
console.log(Vehicle2.VehicleCount);