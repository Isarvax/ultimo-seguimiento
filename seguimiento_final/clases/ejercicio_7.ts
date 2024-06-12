// Crear una clase Película con propiedades como título, duración y director. Crear clase CatalogoPeliculas para
// almacenar películas en una lista. Agregar búsqueda por título y filtrado por director. Probar con un catálogo de
// películas.

class Pelicula {
    titulo: string;
    duracion: number;
    director: string;

    constructor(titulo: string, duracion: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
    }

    mostrarInformacion(): void {
        console.log(`Título: ${this.titulo}, Duración: ${this.duracion} minutos, Director: ${this.director}`);
    }
}

class CatalogoPeliculas {
    peliculas: Pelicula[];

    constructor() {
        this.peliculas = [];
    }

    agregarPelicula(pelicula: Pelicula): void {
        this.peliculas.push(pelicula);
    }

    buscarPorTitulo(titulo: string): Pelicula | undefined {
        return this.peliculas.find(pelicula => pelicula.titulo.toLowerCase() === titulo.toLowerCase());
    }

    filtrarPorDirector(director: string): Pelicula[] {
        return this.peliculas.filter(pelicula => pelicula.director.toLowerCase() === director.toLowerCase());
    }

    mostrarCatalogo(): void {
        this.peliculas.forEach(pelicula => pelicula.mostrarInformacion());
    }
}

const catalogo = new CatalogoPeliculas();

const pelicula1 = new Pelicula('Inception', 148, 'Christopher Nolan');
const pelicula2 = new Pelicula('Interstellar', 169, 'Christopher Nolan');
const pelicula3 = new Pelicula('The Dark Knight', 152, 'Christopher Nolan');
const pelicula4 = new Pelicula('Pulp Fiction', 154, 'Quentin Tarantino');
const pelicula5 = new Pelicula('Kill Bill', 111, 'Quentin Tarantino');

catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);
catalogo.agregarPelicula(pelicula3);
catalogo.agregarPelicula(pelicula4);
catalogo.agregarPelicula(pelicula5);

console.log('Catálogo completo:');
catalogo.mostrarCatalogo();

console.log('\nBuscar por título "Inception":');
const peliculaEncontrada = catalogo.buscarPorTitulo('Inception');
if (peliculaEncontrada) {
    peliculaEncontrada.mostrarInformacion();
} else {
    console.log('Película no encontrada.');
}

console.log('\nFiltrar por director "Christopher Nolan":');
const peliculasNolan = catalogo.filtrarPorDirector('Christopher Nolan');
peliculasNolan.forEach(pelicula => pelicula.mostrarInformacion());
