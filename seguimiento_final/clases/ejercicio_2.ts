// Crear una clase CuentaBancaria con propiedades como número de cuenta, titular y saldo. Agregar métodos para
// depositar, retirar y consultar saldo. Crear varias cuentas y probar los métodos.

class CuentaBancaria {
    numeroCuenta: string;
    titular: string;
    saldo: number;

    constructor(numeroCuenta: string, titular: string, saldo: number = 0) {
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se han depositado ${cantidad}. Saldo actual: ${this.saldo}`);
        } else {
            console.log('La cantidad a depositar debe ser mayor a cero.');
        }
    }

    retirar(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se han retirado ${cantidad}. Saldo actual: ${this.saldo}`);
        } else {
            console.log('Fondos insuficientes o cantidad inválida.');
        }
    }

    consultarSaldo(): void {
        console.log(`El saldo actual es: ${this.saldo}`);
    }
}

const cuenta1 = new CuentaBancaria('123456789', 'Juan Pérez', 500);
const cuenta2 = new CuentaBancaria('987654321', 'María López');
const cuenta3 = new CuentaBancaria('456789123', 'Carlos Gómez', 1000);

cuenta1.consultarSaldo();
cuenta1.depositar(200);
cuenta1.retirar(100);
cuenta1.consultarSaldo();

cuenta2.consultarSaldo();
cuenta2.depositar(500);
cuenta2.retirar(100);
cuenta2.consultarSaldo();

cuenta3.consultarSaldo();
cuenta3.depositar(300);
cuenta3.retirar(1300); // Intentar retirar más de lo que hay en la cuenta
cuenta3.consultarSaldo();
