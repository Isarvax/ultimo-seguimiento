// Crear una clase Vehículo con subclases Coche, Barco y Avión. Cada subclase implementa su propio método
// desplazarse (). Crear objetos de las subclases y probar sus métodos.

abstract class Vehiculo {
    abstract desplazarse(): void;
}

class Coche extends Vehiculo {
    desplazarse(): void {
        console.log("El coche se desplaza por la carretera.");
    }
}

class Barco extends Vehiculo {
    desplazarse(): void {
        console.log("El barco se desplaza por el agua.");
    }
}

class Avion extends Vehiculo {
    desplazarse(): void {
        console.log("El avión se desplaza por el aire.");
    }
}

const miCoche = new Coche();
const miBarco = new Barco();
const miAvion = new Avion();

miCoche.desplazarse(); // El coche se desplaza por la carretera.
miBarco.desplazarse(); // El barco se desplaza por el agua.
miAvion.desplazarse(); // El avión se desplaza por el aire.
