"use strict";
// Crea una interface Vehicle con propiedades comunes a distintos vehículos como model, year, color, etc. Luego
// crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas, implemente en una
// clase.
class CarClass {
    constructor(model, year, color, manufacturer, numberOfDoors, isElectric) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.manufacturer = manufacturer;
        this.numberOfDoors = numberOfDoors;
        this.isElectric = isElectric;
    }
    displayCarInfo() {
        console.log(`Car Info: ${this.manufacturer} ${this.model}, Year: ${this.year}, Color: ${this.color}, Doors: ${this.numberOfDoors}, Electric: ${this.isElectric}`);
    }
}
class MotorcycleClass {
    constructor(model, year, color, manufacturer, hasSidecar) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.manufacturer = manufacturer;
        this.hasSidecar = hasSidecar;
    }
    displayMotorcycleInfo() {
        console.log(`Motorcycle Info: ${this.manufacturer} ${this.model}, Year: ${this.year}, Color: ${this.color}, Sidecar: ${this.hasSidecar}`);
    }
}
const myCar = new CarClass('Model S', 2021, 'Red', 'Tesla', 4, true);
myCar.displayCarInfo();
const myMotorcycle = new MotorcycleClass('Sportster', 2020, 'Black', 'Harley-Davidson', false);
myMotorcycle.displayMotorcycleInfo();
