// Crear una clase FiguraGeometrica y subclases Triángulo, Círculo y Cuadrado. Implementar el método area() en
// cada subclase. Crear objetos y calcular sus áreas.
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
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    return FiguraGeometrica;
}());
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.area = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}(FiguraGeometrica));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(radio) {
        var _this = _super.call(this) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.area = function () {
        return Math.PI * Math.pow(this.radio, 2);
    };
    return Circulo;
}(FiguraGeometrica));
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Cuadrado.prototype.area = function () {
        return Math.pow(this.lado, 2);
    };
    return Cuadrado;
}(FiguraGeometrica));
var miTriangulo = new Triangulo(5, 10);
var miCirculo = new Circulo(7);
var miCuadrado = new Cuadrado(4);
console.log("\u00C1rea del tri\u00E1ngulo: " + miTriangulo.area());
console.log("\u00C1rea del c\u00EDrculo: " + miCirculo.area());
console.log("\u00C1rea del cuadrado: " + miCuadrado.area());
