// Crear una clase Electrodoméstico con subclases Televisor, Nevera y Lavadora. Cada electrodoméstico tiene
// propiedades como precio y color. Crear algunos objetos y probar.
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
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(precio, color) {
        this.precio = precio;
        this.color = color;
    }
    Electrodomestico.prototype.mostrarInformacion = function () {
        console.log("Precio: " + this.precio + ", Color: " + this.color);
    };
    return Electrodomestico;
}());
var Televisor = /** @class */ (function (_super) {
    __extends(Televisor, _super);
    function Televisor(precio, color, tamanoPantalla) {
        var _this = _super.call(this, precio, color) || this;
        _this.tamanoPantalla = tamanoPantalla;
        return _this;
    }
    Televisor.prototype.mostrarInformacion = function () {
        _super.prototype.mostrarInformacion.call(this);
        console.log("Tama\u00F1o de la pantalla: " + this.tamanoPantalla + " pulgadas");
    };
    return Televisor;
}(Electrodomestico));
var Nevera = /** @class */ (function (_super) {
    __extends(Nevera, _super);
    function Nevera(precio, color, capacidad) {
        var _this = _super.call(this, precio, color) || this;
        _this.capacidad = capacidad;
        return _this;
    }
    Nevera.prototype.mostrarInformacion = function () {
        _super.prototype.mostrarInformacion.call(this);
        console.log("Capacidad: " + this.capacidad + " litros");
    };
    return Nevera;
}(Electrodomestico));
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(precio, color, capacidadCarga) {
        var _this = _super.call(this, precio, color) || this;
        _this.capacidadCarga = capacidadCarga;
        return _this;
    }
    Lavadora.prototype.mostrarInformacion = function () {
        _super.prototype.mostrarInformacion.call(this);
        console.log("Capacidad de carga: " + this.capacidadCarga + " kg");
    };
    return Lavadora;
}(Electrodomestico));
var miTelevisor = new Televisor(500, 'Negro', 55);
var miNevera = new Nevera(1000, 'Blanco', 300);
var miLavadora = new Lavadora(750, 'Gris', 10);
miTelevisor.mostrarInformacion();
miNevera.mostrarInformacion();
miLavadora.mostrarInformacion();
