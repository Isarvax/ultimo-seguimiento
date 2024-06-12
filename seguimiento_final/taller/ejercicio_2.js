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
var Producto = /** @class */ (function () {
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    return Producto;
}());
var CajaRegistradora = /** @class */ (function () {
    function CajaRegistradora() {
        this.productos = [];
        this.total = 0;
    }
    CajaRegistradora.prototype.cobrar = function (producto) {
        this.productos.push(producto);
        this.total += producto.precio;
        console.log("Producto agregado: " + producto.nombre + " - Precio: " + producto.precio);
    };
    CajaRegistradora.prototype.imprimir_ticket = function () {
        console.log('Ticket de compra:');
        this.productos.forEach(function (producto) {
            console.log("Producto: " + producto.nombre + " - Precio: " + producto.precio);
        });
        console.log("Total: " + this.total);
    };
    return CajaRegistradora;
}());
var producto1 = new Producto('Pan', 1.00);
var producto2 = new Producto('Leche', 1.50);
var producto3 = new Producto('Huevos', 2.00);
var cajaRegistradora = new CajaRegistradora();
cajaRegistradora.cobrar(producto1);
cajaRegistradora.cobrar(producto2);
cajaRegistradora.cobrar(producto3);
cajaRegistradora.imprimir_ticket();
