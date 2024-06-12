// Crear una clase Película con propiedades como título, duración y director. Crear clase CatalogoPeliculas para
// almacenar películas en una lista. Agregar búsqueda por título y filtrado por director. Probar con un catálogo de
// películas.
var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, duracion, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
    }
    Pelicula.prototype.mostrarInformacion = function () {
        console.log("T\u00EDtulo: " + this.titulo + ", Duraci\u00F3n: " + this.duracion + " minutos, Director: " + this.director);
    };
    return Pelicula;
}());
var CatalogoPeliculas = /** @class */ (function () {
    function CatalogoPeliculas() {
        this.peliculas = [];
    }
    CatalogoPeliculas.prototype.agregarPelicula = function (pelicula) {
        this.peliculas.push(pelicula);
    };
    CatalogoPeliculas.prototype.buscarPorTitulo = function (titulo) {
        return this.peliculas.find(function (pelicula) { return pelicula.titulo.toLowerCase() === titulo.toLowerCase(); });
    };
    CatalogoPeliculas.prototype.filtrarPorDirector = function (director) {
        return this.peliculas.filter(function (pelicula) { return pelicula.director.toLowerCase() === director.toLowerCase(); });
    };
    CatalogoPeliculas.prototype.mostrarCatalogo = function () {
        this.peliculas.forEach(function (pelicula) { return pelicula.mostrarInformacion(); });
    };
    return CatalogoPeliculas;
}());
var catalogo = new CatalogoPeliculas();
var pelicula1 = new Pelicula('Inception', 148, 'Christopher Nolan');
var pelicula2 = new Pelicula('Interstellar', 169, 'Christopher Nolan');
var pelicula3 = new Pelicula('The Dark Knight', 152, 'Christopher Nolan');
var pelicula4 = new Pelicula('Pulp Fiction', 154, 'Quentin Tarantino');
var pelicula5 = new Pelicula('Kill Bill', 111, 'Quentin Tarantino');
catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);
catalogo.agregarPelicula(pelicula3);
catalogo.agregarPelicula(pelicula4);
catalogo.agregarPelicula(pelicula5);
console.log('Catálogo completo:');
catalogo.mostrarCatalogo();
console.log('\nBuscar por título "Inception":');
var peliculaEncontrada = catalogo.buscarPorTitulo('Inception');
if (peliculaEncontrada) {
    peliculaEncontrada.mostrarInformacion();
}
else {
    console.log('Película no encontrada.');
}
console.log('\nFiltrar por director "Christopher Nolan":');
var peliculasNolan = catalogo.filtrarPorDirector('Christopher Nolan');
peliculasNolan.forEach(function (pelicula) { return pelicula.mostrarInformacion(); });
