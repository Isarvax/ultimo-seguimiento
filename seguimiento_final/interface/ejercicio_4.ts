// Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de
// BaseObject. Crea una función genérica que pueda imprimir los datos.

interface BaseObject {
    id: number;
}

interface User extends BaseObject {
    name: string;
    email: string;
}

interface Product extends BaseObject {
    name: string;
    price: number;
    description?: string;
}

interface Order extends BaseObject {
    productId: number;
    userId: number;
    quantity: number;
}

function printObjectData<T extends BaseObject>(object: T): void {
    console.log(`ID: ${object.id}`);
    for (const key in object) {
        if (key !== 'id' && object.hasOwnProperty(key)) {
            console.log(`${key}: ${object[key]}`);
        }
    }
}

const user: User = {
    id: 1,
    name: 'Carlos Augusto',
    email: 'carlose@example.com'
};

const product: Product = {
    id: 2,
    name: 'Laptop',
    price: 10000.00,
    description: 'El último modelo de laptop'
};

const order: Order = {
    id: 3,
    productId: 2,
    userId: 1,
    quantity: 2
};

printObjectData(user);
printObjectData(product);
printObjectData(order);
