interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

interface Inventory {
    products: Product[];
    addProduct(product: Product): void;
    findProductById(id: number): Product | undefined;
}

class StoreInventory implements Inventory {
    products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    findProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}

const inventory = new StoreInventory();

const product1: Product = {
    id: 1,
    name: 'Laptop',
    price: 10000.00,
    description: 'El último modelo de laptop'
};

const product2: Product = {
    id: 2,
    name: 'Smartphone',
    price: 5000.00,
    description: 'El último modelo de smartphone'
};

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.findProductById(1)); 
console.log(inventory.findProductById(2)); 
