var arreglo = ["Dharry", "Jaime", "Lorena", "Paolo"];

arreglo.push("Hugo");

console.log(arreglo);

arreglo.push("Backus");

console.log(arreglo);

arreglo.pop();

console.log(arreglo);

//hacerlo con un for
var arr = ["Papaya","Mandarina","Sandia"];

function anadirElemento(elemento, posicion){
  var arrTmp = [];
  for(var i = 0; i < arr.length; i++){
    if(i === posicion){
      arrTmp.push(elemento);
    }else{
      arrTmp.push(arr[i])
    }
  }
  return arrTmp;
}

var arrAnadido = anadirElemento("Mango", 2);
console.log(arrAnadido)

let primero = arr.shift();

console.log(primero)

var lista = ["SmartPhone", "Audifonos", "Mouse", "Teclado", "WebCam"];

lista.splice(2,0,"Celular","Lampara");

console.log(lista);

//FOR EACH

var numeros = [20,18,19,15,14,17,25,30,15,17,45,50];

//ejecutamos un bloque de codigo por cada elemento que encuentre en el arreglo
numeros.forEach(function(numero,i,arreglo){
  console.log(i + ". " + numero);
  console.log(arreglo);
  //forEach no retorna nada
});

//MAP

var lugares = ["Arequipa", "Lima", "Trujillo"];

//map transforma los elementos de un arreglo y los asigna a otro arreglo
var lugaresMayus = lugares.map(function(ciudad, indice){
  var lugar = indice + ". " + ciudad.toUpperCase()
  return lugar; //por eso tenemos que retornar cada elemento que encuentre
});

console.log(lugaresMayus);

//FILTER

var notas = [20,19,17,14,09,11,08,20,14,10];

//filter igual "devuelve" elemento, indice, arreglo
var aprobados = notas.filter(function(item){
  if(item > 10){ //le damos una condición si la cumple lo retornamos
    return item;
  }
});

console.log(aprobados);


//-------------------------------------------------------------------
var miFuncion = (saludo) => {
  console.log(saludo)
}

miFuncion("Hola :D");