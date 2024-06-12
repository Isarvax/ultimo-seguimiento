// Crear una clase Hotel con propiedades como nombre y ubicación. Crear clase Habitación con número de
// habitación, precio y estado. Agregar métodos para reservar y liberar habitación. Probar con algunos hoteles e
// interacciones.
var Habitacion = /** @class */ (function () {
    function Habitacion(numeroHabitacion, precio) {
        this.numeroHabitacion = numeroHabitacion;
        this.precio = precio;
        this.estado = 'libre';
    }
    Habitacion.prototype.reservar = function () {
        if (this.estado === 'libre') {
            this.estado = 'reservada';
            console.log("La habitaci\u00F3n " + this.numeroHabitacion + " ha sido reservada.");
        }
        else {
            console.log("La habitaci\u00F3n " + this.numeroHabitacion + " ya est\u00E1 reservada.");
        }
    };
    Habitacion.prototype.liberar = function () {
        if (this.estado === 'reservada') {
            this.estado = 'libre';
            console.log("La habitaci\u00F3n " + this.numeroHabitacion + " ha sido liberada.");
        }
        else {
            console.log("La habitaci\u00F3n " + this.numeroHabitacion + " ya est\u00E1 libre.");
        }
    };
    return Habitacion;
}());
var Hotel = /** @class */ (function () {
    function Hotel(nombre, ubicacion) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.habitaciones = [];
    }
    Hotel.prototype.agregarHabitacion = function (habitacion) {
        this.habitaciones.push(habitacion);
        console.log("Habitaci\u00F3n " + habitacion.numeroHabitacion + " agregada al hotel " + this.nombre + ".");
    };
    Hotel.prototype.reservarHabitacion = function (numeroHabitacion) {
        var habitacion = this.habitaciones.find(function (h) { return h.numeroHabitacion === numeroHabitacion; });
        if (habitacion) {
            habitacion.reservar();
        }
        else {
            console.log("La habitaci\u00F3n " + numeroHabitacion + " no existe en el hotel " + this.nombre + ".");
        }
    };
    Hotel.prototype.liberarHabitacion = function (numeroHabitacion) {
        var habitacion = this.habitaciones.find(function (h) { return h.numeroHabitacion === numeroHabitacion; });
        if (habitacion) {
            habitacion.liberar();
        }
        else {
            console.log("La habitaci\u00F3n " + numeroHabitacion + " no existe en el hotel " + this.nombre + ".");
        }
    };
    return Hotel;
}());
var hotel1 = new Hotel('Hotel Plaza', 'Madrid');
var habitacion101 = new Habitacion(101, 100);
var habitacion102 = new Habitacion(102, 150);
hotel1.agregarHabitacion(habitacion101);
hotel1.agregarHabitacion(habitacion102);
hotel1.reservarHabitacion(101);
hotel1.reservarHabitacion(101);
hotel1.liberarHabitacion(101);
hotel1.liberarHabitacion(101);
var hotel2 = new Hotel('Hotel Mar', 'Barcelona');
var habitacion201 = new Habitacion(201, 200);
var habitacion202 = new Habitacion(202, 250);
hotel2.agregarHabitacion(habitacion201);
hotel2.agregarHabitacion(habitacion202);
hotel2.reservarHabitacion(202);
hotel2.liberarHabitacion(202);
