var miBoton = document.getElementById("boton");

miBoton.addEventListener("click", function (evento) {
  console.log(evento);

  alert("Haz dado click");
});

var hipervinculo = document.getElementById("link");

hipervinculo.addEventListener("click", function (evento) {
  console.log(evento);
  evento.preventDefault();
});

// ------------------------------------------

var inputTarea = document.getElementById("inputtarea");
var btnTarea = document.getElementById("btntarea");
var lista = document.getElementById("lista");

btnTarea.addEventListener("click", function () {
  var textotarea = inputTarea.value;
  // console.log(textotarea)

  //.trim() remueve los espacios vacios en un string
  if (textotarea.trim() === "") {
    //si texto esta vacio, no hacemos nada
    alert("No juegues conmigo");

  } else {

    //si no esta vacio, añadimos la tarea
    var li = document.createElement("li");
    li.innerHTML = textotarea;

    lista.appendChild(li);

    inputTarea.value = "";
  }
});

console.log(patata);
