// Crear una clase Electrodoméstico con subclases Televisor, Nevera y Lavadora. Cada electrodoméstico tiene
// propiedades como precio y color. Crear algunos objetos y probar.

class Electrodomestico {
    precio: number;
    color: string;

    constructor(precio: number, color: string) {
        this.precio = precio;
        this.color = color;
    }

    mostrarInformacion(): void {
        console.log(`Precio: ${this.precio}, Color: ${this.color}`);
    }
}

class Televisor extends Electrodomestico {
    tamanoPantalla: number;

    constructor(precio: number, color: string, tamanoPantalla: number) {
        super(precio, color);
        this.tamanoPantalla = tamanoPantalla;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Tamaño de la pantalla: ${this.tamanoPantalla} pulgadas`);
    }
}

class Nevera extends Electrodomestico {
    capacidad: number;

    constructor(precio: number, color: string, capacidad: number) {
        super(precio, color);
        this.capacidad = capacidad;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Capacidad: ${this.capacidad} litros`);
    }
}

class Lavadora extends Electrodomestico {
    capacidadCarga: number;

    constructor(precio: number, color: string, capacidadCarga: number) {
        super(precio, color);
        this.capacidadCarga = capacidadCarga;
    }

    mostrarInformacion(): void {
        super.mostrarInformacion();
        console.log(`Capacidad de carga: ${this.capacidadCarga} kg`);
    }
}

const miTelevisor = new Televisor(500, 'Negro', 55);
const miNevera = new Nevera(1000, 'Blanco', 300);
const miLavadora = new Lavadora(750, 'Gris', 10);

miTelevisor.mostrarInformacion();
miNevera.mostrarInformacion();
miLavadora.mostrarInformacion();
