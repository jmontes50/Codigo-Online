var miContenedor = document.getElementById("container");

miContenedor.style.color = "#EE2046";
miContenedor.style.border = "1px solid blue";
miContenedor.style.opacity = 0.6;

miContenedor.style.backgroundColor = "lightblue";

miContenedor.classList.add("brillo");

miContenedor.classList.remove("brillo");

//sedInerval ejecuta una funcion cada cantidad de tiempo de
//forma repetitiva
setInterval(function(){
  //toggle aplica o remueve una clase en caso la encuentre
  //o no la encuentre
  miContenedor.classList.toggle("brillo");
},500);

var h1 = document.querySelector("h1");
//inner HTML me sirve para acceder al contenido que tiene una etiqueta
console.log(h1.innerHTML);

h1.innerHTML = "<code id='titulo'>Pizza con piña y bits</code>";

//createElement me permite crear objetos elementos HTML
var nuevoParrafo = document.createElement("p");

//como es un elemento HTML puedo modificar sus propiedades
nuevoParrafo.innerHTML = "Hola soy nuevo :P";

/////
var divpapa = document.getElementById("papa");
divpapa.appendChild(nuevoParrafo);

var mititulo = document.getElementById("titulo");
console.log(mititulo);

var imagen = document.createElement("img");

imagen.setAttribute("src","https://www.freecodecamp.org/news/content/images/2019/07/panel-1-1.png");

divpapa.appendChild(imagen);