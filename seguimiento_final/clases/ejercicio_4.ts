// Crear una clase FiguraGeometrica y subclases Triángulo, Círculo y Cuadrado. Implementar el método area() en
// cada subclase. Crear objetos y calcular sus áreas.


abstract class FiguraGeometrica {
    abstract area(): number;
}

class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return (this.base * this.altura) / 2;
    }
}

class Circulo extends FiguraGeometrica {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    area(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class Cuadrado extends FiguraGeometrica {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    area(): number {
        return Math.pow(this.lado, 2);
    }
}

const miTriangulo = new Triangulo(5, 10);
const miCirculo = new Circulo(7);
const miCuadrado = new Cuadrado(4);

console.log(`Área del triángulo: ${miTriangulo.area()}`); 
console.log(`Área del círculo: ${miCirculo.area()}`); 
console.log(`Área del cuadrado: ${miCuadrado.area()}`); 
