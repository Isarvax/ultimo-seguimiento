// Crea una interface Database con funciones como connect, find, update, etc. Luego crea una clase
// MySQLDatabase e SQLiteDatabase que implementen esa interface con distintas funcionalidades.

interface Database {
    connect(): void;
    disconnect(): void;
    find(query: string): any;
    update(id: number, data: any): void;
    delete(id: number): void;
}

class MySQLDatabase implements Database {
    connect(): void {
        console.log("Connecting to MySQL database...");
        
    }

    disconnect(): void {
        console.log("Disconnecting from MySQL database...");
        
    }

    find(query: string): any {
        console.log(`Finding records in MySQL database with query: ${query}`);
        
        return [];
    }

    update(id: number, data: any): void {
        console.log(`Updating record with ID ${id} in MySQL database...`);
        
    }

    delete(id: number): void {
        console.log(`Deleting record with ID ${id} from MySQL database...`);
        
    }
}

class SQLiteDatabase implements Database {
    connect(): void {
        console.log("Connecting to SQLite database...");
        
    }

    disconnect(): void {
        console.log("Disconnecting from SQLite database...");
        
    }

    find(query: string): any {
        console.log(`Finding records in SQLite database with query: ${query}`);
        
        return [];
    }

    update(id: number, data: any): void {
        console.log(`Updating record with ID ${id} in SQLite database...`);
        
    }

    delete(id: number): void {
        console.log(`Deleting record with ID ${id} from SQLite database...`);
        
    }
}

const mysqlDb: Database = new MySQLDatabase();
mysqlDb.connect();
mysqlDb.find("SELECT * FROM users");
mysqlDb.update(1, { name: "Carlos Augusto" });
mysqlDb.delete(1);
mysqlDb.disconnect();

const sqliteDb: Database = new SQLiteDatabase();
sqliteDb.connect();
sqliteDb.find("SELECT * FROM products");
sqliteDb.update(2, { name: "Laptop", price: 1200 });
sqliteDb.delete(2);
sqliteDb.disconnect();
