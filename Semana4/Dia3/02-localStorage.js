var btnGuardar = document.getElementById("btnguardar");
var inputTexto = document.getElementById("inputtexto");

var btnObtener = document.querySelector("#btnobtener");
var element = document.querySelector("#snacks")

btnGuardar.addEventListener("click", function(){
  var texto = inputTexto.value;
  localStorage.setItem("snack", texto);
  localStorage.setItem("Clave","º1278ett78");
})

btnObtener.addEventListener("click", function(){
  var snack = localStorage.getItem("snack");
  console.log("Snack encontrado",snack)

  element.innerHTML = snack;
})
