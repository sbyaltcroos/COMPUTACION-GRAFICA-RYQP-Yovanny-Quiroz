interface Direccion {
  calle: string;
  ciudad: string;
  pais: string;
}

interface Estudiante {
  nombre: string;
  edad: number;
  curso: string;
  direccion: Direccion;
  mostrarInfo(): string;
}

const estudiante: Estudiante = {
  nombre: 'Juan',
  edad: 22,
  curso: 'Matemáticas',
  direccion: {
    calle: 'Av. Siempre Viva',
    ciudad: 'Bogotá',
    pais: 'Colombia'
  },
  mostrarInfo() {
    return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
  }
};

console.log(estudiante.mostrarInfo());

interface Pelicula {
  titulo: string;
  director: string;
  duracion: number;
  genero: string;
  reproducir(): string;
}

const pelicula: Pelicula = {
  titulo: 'Avengers: Endgame',
  director: 'Anthony y Joe Russo',
  duracion: 181,
  genero: 'Acción',
  reproducir() {
    return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`;
  }
};

console.log(pelicula.reproducir());

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  mostrarDetalle(): string;
}

const producto: Producto = {
  id: 1,
  nombre: 'Laptop',
  precio: 3500,
  stock: 10,
  mostrarDetalle() {
    return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
  }
};

console.log(producto.mostrarDetalle());

interface Usuario {
  username: string;
  password: string;
  roles: string[];
  login(): string;
}

const usuario: Usuario = {
  username: 'admin01',
  password: '123456',
  roles: ['admin', 'editor'],
  login() {
    return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
  }
};

console.log(usuario.login());

interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
  encender(): string;
}

const vehiculo: Vehiculo = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2022,
  encender() {
    return `${this.marca} ${this.modelo} está encendido`;
  }
};

console.log(vehiculo.encender());


export{};