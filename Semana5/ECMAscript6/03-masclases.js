class Bodega {
  nombre;
  direccion;
  productos;
  // constructor 1ero que se ejecuta, porque define las propiedades de mi objeto
  constructor(name, address) {
    this.nombre = name;
    this.direccion = address;
    this.productos = [];

    this.mostrarInfo()
  }

  //gets sets -> metodos que obtengan datos y que muestren datos
  agregarProducto(producto){
    this.productos.push(producto);
    console.log("SE AGREGO EXITOSAMENTE " + producto);
    this.mostrarInfo()
  }

  mostrarInfo(){
    console.log(`Esta tienda se llama ${this.nombre} y queda en ${this.direccion}`);
  }
}

let opcion = 0;

let nombreBodega = prompt("Ingrese el nombre de tu bodega");
let direccionBodega = prompt("Ingrese la direccion de tu Bodega");

//instanciando con la información que obtuve de los prompt una nueva bodega;
let miBodega = new Bodega(nombreBodega, direccionBodega);

do {
  opcion = +prompt(
    "Ingresa una opción: \n 1. Agrega un producto \n 2. Muestra mis productos ingresados \n 3. Cerrar Sesión"
  );
  switch (opcion) {
    case 1:
      let producto = prompt("Ingresa tu producto");
      miBodega.agregarProducto(producto)
      break;
    default:
      alert("Na, no existe esta opción");
      break;
  }
} while (opcion != 3);
