//es que utilice todos los recursos que voy a tener en mis demás JS
let comunicacion = new Network();
let interface = new Interface();
let btnAgregarModal = document.getElementById("btnAgregarModal");
let btnAgregarFoto = document.getElementById("btnAgregarFoto");

let getFotos = () => {
  comunicacion.obtenerFotos()
  .then(fotos => {
    interface.imprimirFotos(fotos)
  })
  .catch(err => console.log(err))
}
getFotos();

btnAgregarModal.addEventListener("click",()=>{
  $("#modal2").modal("show");
})

btnAgregarFoto.addEventListener("click",()=>{
  let formulario = document.getElementById("formfoto");
  let nuevaFoto = new Foto(
    formulario["foto_nombre"].value,
    formulario["foto_descripcion"].value,
    formulario["foto_url"].value);

    comunicacion.crearFoto(nuevaFoto)
    .then(fotoCreada => {
      console.log(fotoCreada);
      $("#modal2").modal("hide");
      formulario.reset();
      getFotos()
    })
})