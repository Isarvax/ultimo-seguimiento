"use strict";
class StoreInventory {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    findProductById(id) {
        return this.products.find(product => product.id === id);
    }
}
const inventory = new StoreInventory();
const product1 = {
    id: 1,
    name: 'Laptop',
    price: 10000.00,
    description: 'El último modelo de laptop'
};
const product2 = {
    id: 2,
    name: 'Smartphone',
    price: 5000.00,
    description: 'El último modelo de smartphone'
};
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(inventory.findProductById(1));
console.log(inventory.findProductById(2));
