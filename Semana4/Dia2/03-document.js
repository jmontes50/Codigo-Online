//document me sirve para manipular todos los elementos (nodos) que tengo dentro del DOM

//getElementById es un método que me permite capturar un elemento en el DOM por su ID.
var parrafo = document.getElementById("parrafo");

console.log(parrafo);

parrafo.style.color = "red";
parrafo.style.padding = "20px"; 

//por el nombre de la clase
var elementsPeru = document.getElementsByClassName("peru");
console.log(elementsPeru);

//por la etiqueta p, nav, header, div
var cajitas = document.getElementsByTagName("p");
console.log(cajitas);

//como si fueran CSS
var query = document.querySelector("#parrafo");
console.log(query)

var queries = document.querySelectorAll(".peru");
console.log(queries)