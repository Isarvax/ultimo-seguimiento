// Crea una interface Database con funciones como connect, find, update, etc. Luego crea una clase
// MySQLDatabase e SQLiteDatabase que implementen esa interface con distintas funcionalidades.
var MySQLDatabase = /** @class */ (function () {
    function MySQLDatabase() {
    }
    MySQLDatabase.prototype.connect = function () {
        console.log("Connecting to MySQL database...");
    };
    MySQLDatabase.prototype.disconnect = function () {
        console.log("Disconnecting from MySQL database...");
    };
    MySQLDatabase.prototype.find = function (query) {
        console.log("Finding records in MySQL database with query: " + query);
        return [];
    };
    MySQLDatabase.prototype.update = function (id, data) {
        console.log("Updating record with ID " + id + " in MySQL database...");
    };
    MySQLDatabase.prototype["delete"] = function (id) {
        console.log("Deleting record with ID " + id + " from MySQL database...");
    };
    return MySQLDatabase;
}());
var SQLiteDatabase = /** @class */ (function () {
    function SQLiteDatabase() {
    }
    SQLiteDatabase.prototype.connect = function () {
        console.log("Connecting to SQLite database...");
    };
    SQLiteDatabase.prototype.disconnect = function () {
        console.log("Disconnecting from SQLite database...");
    };
    SQLiteDatabase.prototype.find = function (query) {
        console.log("Finding records in SQLite database with query: " + query);
        return [];
    };
    SQLiteDatabase.prototype.update = function (id, data) {
        console.log("Updating record with ID " + id + " in SQLite database...");
    };
    SQLiteDatabase.prototype["delete"] = function (id) {
        console.log("Deleting record with ID " + id + " from SQLite database...");
    };
    return SQLiteDatabase;
}());
var mysqlDb = new MySQLDatabase();
mysqlDb.connect();
mysqlDb.find("SELECT * FROM users");
mysqlDb.update(1, { name: "Carlos Augusto" });
mysqlDb["delete"](1);
mysqlDb.disconnect();
var sqliteDb = new SQLiteDatabase();
sqliteDb.connect();
sqliteDb.find("SELECT * FROM products");
sqliteDb.update(2, { name: "Laptop", price: 1200 });
sqliteDb["delete"](2);
sqliteDb.disconnect();
