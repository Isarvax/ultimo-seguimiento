// Crear una clase Hotel con propiedades como nombre y ubicación. Crear clase Habitación con número de
// habitación, precio y estado. Agregar métodos para reservar y liberar habitación. Probar con algunos hoteles e
// interacciones.

class Habitacion {
    numeroHabitacion: number;
    precio: number;
    estado: 'libre' | 'reservada';

    constructor(numeroHabitacion: number, precio: number) {
        this.numeroHabitacion = numeroHabitacion;
        this.precio = precio;
        this.estado = 'libre';
    }

    reservar(): void {
        if (this.estado === 'libre') {
            this.estado = 'reservada';
            console.log(`La habitación ${this.numeroHabitacion} ha sido reservada.`);
        } else {
            console.log(`La habitación ${this.numeroHabitacion} ya está reservada.`);
        }
    }

    liberar(): void {
        if (this.estado === 'reservada') {
            this.estado = 'libre';
            console.log(`La habitación ${this.numeroHabitacion} ha sido liberada.`);
        } else {
            console.log(`La habitación ${this.numeroHabitacion} ya está libre.`);
        }
    }
}

class Hotel {
    nombre: string;
    ubicacion: string;
    habitaciones: Habitacion[];

    constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.habitaciones = [];
    }

    agregarHabitacion(habitacion: Habitacion): void {
        this.habitaciones.push(habitacion);
        console.log(`Habitación ${habitacion.numeroHabitacion} agregada al hotel ${this.nombre}.`);
    }

    reservarHabitacion(numeroHabitacion: number): void {
        const habitacion = this.habitaciones.find(h => h.numeroHabitacion === numeroHabitacion);
        if (habitacion) {
            habitacion.reservar();
        } else {
            console.log(`La habitación ${numeroHabitacion} no existe en el hotel ${this.nombre}.`);
        }
    }

    liberarHabitacion(numeroHabitacion: number): void {
        const habitacion = this.habitaciones.find(h => h.numeroHabitacion === numeroHabitacion);
        if (habitacion) {
            habitacion.liberar();
        } else {
            console.log(`La habitación ${numeroHabitacion} no existe en el hotel ${this.nombre}.`);
        }
    }
}

const hotel1 = new Hotel('Hotel Plaza', 'Madrid');
const habitacion101 = new Habitacion(101, 100);
const habitacion102 = new Habitacion(102, 150);

hotel1.agregarHabitacion(habitacion101);
hotel1.agregarHabitacion(habitacion102);

hotel1.reservarHabitacion(101);
hotel1.reservarHabitacion(101); 
hotel1.liberarHabitacion(101);
hotel1.liberarHabitacion(101); 

const hotel2 = new Hotel('Hotel Mar', 'Barcelona');
const habitacion201 = new Habitacion(201, 200);
const habitacion202 = new Habitacion(202, 250);

hotel2.agregarHabitacion(habitacion201);
hotel2.agregarHabitacion(habitacion202);

hotel2.reservarHabitacion(202);
hotel2.liberarHabitacion(202);
