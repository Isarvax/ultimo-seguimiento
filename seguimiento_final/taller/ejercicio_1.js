// 1. Defina una clase Cita que tenga los atributos:
// • paciente (nombre del paciente)
// • doctor (nombre del doctor)
// • fecha (fecha de la cita)
// • hora (hora de la cita)
// • motivo (motivo de la cita)
// Cree una lista de citas inicializada con algunos ejemplos de citas.
// Después cree las siguientes funciones (todo es simulado):
// • agregar_cita(cita): agrega una nueva cita a la lista
// • eliminar_cita(cita): elimina una cita de la lista
// • buscar_cita(doctor): devuelve las citas de un doctor dado
// • citas_hoy(): devuelve las citas de hoy
// • citas_fecha(fecha): devuelve las citas de una fecha dada
// Puede probar el funcionamiento con algunos ejemplos, agregando, eliminando y buscando citas y probando las
// funciones de búsqueda.
var Cita = /** @class */ (function () {
    function Cita(paciente, doctor, fecha, hora, motivo) {
        this.paciente = paciente;
        this.doctor = doctor;
        this.fecha = fecha;
        this.hora = hora;
        this.motivo = motivo;
    }
    return Cita;
}());
var citas = [
    new Cita('Carlos Augusto', 'Dr. Juan', '2024-06-10', '10:00', 'Consulta general'),
    new Cita('Lucia Lopez', 'Dr. Juan', '2024-06-10', '11:00', 'Revisión anual'),
    new Cita('Luis Sánchez', 'Dr. Martínez', '2024-06-11', '09:00', 'Chequeo cardiaco')
];
function agregar_cita(cita) {
    citas.push(cita);
    console.log("Cita agregada: " + cita.paciente + " con " + cita.doctor + " el " + cita.fecha + " a las " + cita.hora);
}
function eliminar_cita(cita) {
    var index = citas.findIndex(function (c) {
        return c.paciente === cita.paciente &&
            c.doctor === cita.doctor &&
            c.fecha === cita.fecha &&
            c.hora === cita.hora &&
            c.motivo === cita.motivo;
    });
    if (index !== -1) {
        citas.splice(index, 1);
        console.log("Cita eliminada: " + cita.paciente + " con " + cita.doctor + " el " + cita.fecha + " a las " + cita.hora);
    }
    else {
        console.log('Cita no encontrada.');
    }
}
function buscar_cita(doctor) {
    return citas.filter(function (cita) { return cita.doctor.toLowerCase() === doctor.toLowerCase(); });
}
function citas_hoy() {
    var hoy = new Date().toISOString().split('T')[0]; // Obtener la fecha de hoy en formato 'YYYY-MM-DD'
    return citas.filter(function (cita) { return cita.fecha === hoy; });
}
function citas_fecha(fecha) {
    return citas.filter(function (cita) { return cita.fecha === fecha; });
}
var nuevaCita = new Cita('Ana Torres', 'Dr. Juan', '2024-06-10', '12:00', 'Dolor de cabeza');
agregar_cita(nuevaCita);
console.log('\nCitas después de agregar una nueva:');
citas.forEach(function (cita) { return console.log(cita); });
var citaAEliminar = new Cita('Juan Pérez', 'Dr. Juan', '2024-06-10', '10:00', 'Consulta general');
eliminar_cita(citaAEliminar);
console.log('\nCitas después de eliminar una:');
citas.forEach(function (cita) { return console.log(cita); });
console.log('\nBuscar citas del Dr. Juan:');
buscar_cita('Dr. Gómez').forEach(function (cita) { return console.log(cita); });
console.log('\nCitas de hoy:');
citas_hoy().forEach(function (cita) { return console.log(cita); });
console.log('\nCitas para el 2024-06-10:');
citas_fecha('2024-06-10').forEach(function (cita) { return console.log(cita); });
