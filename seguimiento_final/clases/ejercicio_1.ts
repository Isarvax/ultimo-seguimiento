// Crear una clase Persona con propiedades como nombre, edad, documento identidad y métodos como caminar(),
// hablar(), comer(). Crear algunos objetos Persona e interactuar con sus propiedades y métodos.

class Persona {
    nombre: string;
    edad: number;
    documentoIdentidad: string;

    constructor(nombre: string, edad: number, documentoIdentidad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.documentoIdentidad = documentoIdentidad;
    }

    caminar(): void {
        console.log(`${this.nombre} está caminando.`);
    }

    hablar(): void {
        console.log(`${this.nombre} está hablando.`);
    }

    comer(): void {
        console.log(`${this.nombre} está comiendo.`);
    }
}

const persona1 = new Persona('Juan Pérez', 30, '123456789');
const persona2 = new Persona('María López', 25, '987654321');
const persona3 = new Persona('Carlos Gómez', 40, '456789123');

persona1.caminar();
persona1.hablar();
persona1.comer();

persona2.caminar();
persona2.hablar();
persona2.comer();

persona3.caminar();
persona3.hablar();
persona3.comer();
