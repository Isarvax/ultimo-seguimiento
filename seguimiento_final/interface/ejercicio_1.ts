// Crea una interface Vehicle con propiedades comunes a distintos vehículos como model, year, color, etc. Luego
// crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas, implemente en una
// clase.

interface Vehicle {
    model: string;
    year: number;
    color: string;
    manufacturer: string;
}

interface Car extends Vehicle {
    numberOfDoors: number;
    isElectric: boolean;
}

interface Motorcycle extends Vehicle {
    hasSidecar: boolean;
}

class CarClass implements Car {
    model: string;
    year: number;
    color: string;
    manufacturer: string;
    numberOfDoors: number;
    isElectric: boolean;

    constructor(model: string, year: number, color: string, manufacturer: string, numberOfDoors: number, isElectric: boolean) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.manufacturer = manufacturer;
        this.numberOfDoors = numberOfDoors;
        this.isElectric = isElectric;
    }

    displayCarInfo(): void {
        console.log(`Car Info: ${this.manufacturer} ${this.model}, Year: ${this.year}, Color: ${this.color}, Doors: ${this.numberOfDoors}, Electric: ${this.isElectric}`);
    }
}

class MotorcycleClass implements Motorcycle {
    model: string;
    year: number;
    color: string;
    manufacturer: string;
    hasSidecar: boolean;

    constructor(model: string, year: number, color: string, manufacturer: string, hasSidecar: boolean) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.manufacturer = manufacturer;
        this.hasSidecar = hasSidecar;
    }

    displayMotorcycleInfo(): void {
        console.log(`Motorcycle Info: ${this.manufacturer} ${this.model}, Year: ${this.year}, Color: ${this.color}, Sidecar: ${this.hasSidecar}`);
    }
}

const myCar = new CarClass('Model S', 2021, 'Red', 'Tesla', 4, true);
myCar.displayCarInfo();

const myMotorcycle = new MotorcycleClass('Sportster', 2020, 'Black', 'Harley-Davidson', false);
myMotorcycle.displayMotorcycleInfo();
