//es que utilice todos los recursos que voy a tener en mis demás JS
let comunicacion = new Network();
let interface = new Interface();

let getFotos = () => {
  comunicacion.obtenerFotos()
  .then(fotos => {
    interface.imprimirFotos(fotos)
  })
  .catch(err => console.log(err))
}

getFotos();