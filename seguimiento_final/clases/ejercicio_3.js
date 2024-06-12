// Crear una clase Vehículo con subclases Coche, Barco y Avión. Cada subclase implementa su propio método
// desplazarse (). Crear objetos de las subclases y probar sus métodos.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
    }
    return Vehiculo;
}());
var Coche = /** @class */ (function (_super) {
    __extends(Coche, _super);
    function Coche() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coche.prototype.desplazarse = function () {
        console.log("El coche se desplaza por la carretera.");
    };
    return Coche;
}(Vehiculo));
var Barco = /** @class */ (function (_super) {
    __extends(Barco, _super);
    function Barco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Barco.prototype.desplazarse = function () {
        console.log("El barco se desplaza por el agua.");
    };
    return Barco;
}(Vehiculo));
var Avion = /** @class */ (function (_super) {
    __extends(Avion, _super);
    function Avion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Avion.prototype.desplazarse = function () {
        console.log("El avión se desplaza por el aire.");
    };
    return Avion;
}(Vehiculo));
var miCoche = new Coche();
var miBarco = new Barco();
var miAvion = new Avion();
miCoche.desplazarse(); // El coche se desplaza por la carretera.
miBarco.desplazarse(); // El barco se desplaza por el agua.
miAvion.desplazarse(); // El avión se desplaza por el aire.
