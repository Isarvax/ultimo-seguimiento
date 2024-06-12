// Crear una clase Persona con propiedades como nombre, edad, documento identidad y métodos como caminar(),
// hablar(), comer(). Crear algunos objetos Persona e interactuar con sus propiedades y métodos.
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, documentoIdentidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.documentoIdentidad = documentoIdentidad;
    }
    Persona.prototype.caminar = function () {
        console.log(this.nombre + " est\u00E1 caminando.");
    };
    Persona.prototype.hablar = function () {
        console.log(this.nombre + " est\u00E1 hablando.");
    };
    Persona.prototype.comer = function () {
        console.log(this.nombre + " est\u00E1 comiendo.");
    };
    return Persona;
}());
var persona1 = new Persona('Juan Pérez', 30, '123456789');
var persona2 = new Persona('María López', 25, '987654321');
var persona3 = new Persona('Carlos Gómez', 40, '456789123');
persona1.caminar();
persona1.hablar();
persona1.comer();
persona2.caminar();
persona2.hablar();
persona2.comer();
persona3.caminar();
persona3.hablar();
persona3.comer();
