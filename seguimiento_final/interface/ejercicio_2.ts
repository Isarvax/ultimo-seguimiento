// Crea una interface User y otra interfaz Admin que herede de User. Crea una función para imprimir datos de
// usuario que acepte tanto User como Admin.

interface User {
    id: number;
    name: string;
    email: string;
}

interface Admin extends User {
    role: string;
}

function printUserData(user: User | Admin): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);

    if ('role' in user) {
        console.log(`Role: ${user.role}`);
    }
}

const normalUser: User = {
    id: 1,
    name: 'carlos augusto',
    email: 'carlos@example.com'
};

const adminUser: Admin = {
    id: 2,
    name: 'Isaac Newton',
    email: 'isaac.newton@example.com',
    role: 'Administrator'
};

printUserData(normalUser);
printUserData(adminUser);
