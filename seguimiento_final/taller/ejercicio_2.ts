// 2. Defina una clase Producto con los atributos:
// • nombre (nombre del producto)
// • precio (precio del producto)
// Defina una clase CajaRegistradora con los atributos:
// • products (lista de productos)
// • total (total de la compra)
// Agregue métodos a la clase CajaRegistradora:
// • cobrar(producto):
// • Agrega el producto a la lista de productos
// • Suma el precio del producto al total
// imprimir_ticket():
// • Imprime los productos con sus precios
// • Imprime el total de la compra
// Puede crear algunos productos de ejemplo y probar el funcionamiento de la caja registradora agregando productos con
// el método cobrar() y luego imprimiendo el ticket con el método imprimir_ticket().


class Producto {
    nombre: string;
    precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class CajaRegistradora {
    productos: Producto[];
    total: number;

    constructor() {
        this.productos = [];
        this.total = 0;
    }

    cobrar(producto: Producto): void {
        this.productos.push(producto);
        this.total += producto.precio;
        console.log(`Producto agregado: ${producto.nombre} - Precio: ${producto.precio}`);
    }

    imprimir_ticket(): void {
        console.log('Ticket de compra:');
        this.productos.forEach(producto => {
            console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
        });
        console.log(`Total: ${this.total}`);
    }
}

const producto1 = new Producto('Pan', 1.00);
const producto2 = new Producto('Leche', 1.50);
const producto3 = new Producto('Huevos', 2.00);

const cajaRegistradora = new CajaRegistradora();

cajaRegistradora.cobrar(producto1);
cajaRegistradora.cobrar(producto2);
cajaRegistradora.cobrar(producto3);

cajaRegistradora.imprimir_ticket();
