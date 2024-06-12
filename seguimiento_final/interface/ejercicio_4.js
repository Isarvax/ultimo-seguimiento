// Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de
// BaseObject. Crea una función genérica que pueda imprimir los datos.
function printObjectData(object) {
    console.log("ID: " + object.id);
    for (var key in object) {
        if (key !== 'id' && object.hasOwnProperty(key)) {
            console.log(key + ": " + object[key]);
        }
    }
}
var user = {
    id: 1,
    name: 'Carlos Augusto',
    email: 'carlose@example.com'
};
var product = {
    id: 2,
    name: 'Laptop',
    price: 10000.00,
    description: 'El último modelo de laptop'
};
var order = {
    id: 3,
    productId: 2,
    userId: 1,
    quantity: 2
};
printObjectData(user);
printObjectData(product);
printObjectData(order);
