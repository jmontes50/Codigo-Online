// let saludar = (nombre) => {
//   return `Hola soy ${nombre}`;
// }

// let saludar = nombre => {
//   return `Hola soy ${nombre}`;
// }

// let saludar = nombre => `Hola soy ${nombre}`;

let saludar = (nombre = "alguien", apellido) => `Hola soy ${nombre}`;

console.log(saludar("Osmar"));