/**
 * Una farmacia vende diferentes productos (alcohol, mascarillas y jabón). Se
desea contabilizar, el lote de cada producto, y saber cuantos hay en existencia.
 */

var cantProductos = +prompt("Cuantos Productos Existen?"); //X cantidad de productos, que no estan clasificados

var alcohol = 0;
var mascarillas = 0;
var jabon = 0;

//por cada producto que tengamos vamos a evaluar de que tipo es c/producto
for(var i = 0; i < cantProductos; i++){

  var producto = +prompt('Ingrese 1 para alcohol, 2 para mascarillas y 3 para jabon - ' + i);

  switch (producto){
    case 1:
      alcohol++;
      break;
    case 2:
      mascarillas++;
      break;
    case 3:
      jabon++;
      break;
    default:
      alert("Número erroneo intente de nuevo");
      i--; //reducir el valor de mi contador en -1:
      break;
  }
}

console.log('En total tenemos ' + alcohol + 'u. de Alcohol ' + mascarillas + ' u. de mascarillas y ' + jabon + ' u de jabón');