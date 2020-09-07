let objVehiculo = {
  marca:"Kia",
  modelo:"Sorrento",
  anio:2019,
  colores:["Rojete","Plomo"],
  prender: () => console.log("run run")
}

let {marca, modelo, anio, colores, prender} = objVehiculo

console.log(marca)
console.log(modelo)
console.log(anio)
console.log(colores)

prender();

//SpreadOperator
let copiaVehiculo = { ...objVehiculo, kilometraje:10000, anio:2018}

console.log(copiaVehiculo)

//Destructuracion de arreglos

let nombres = ["Osmar","Daniel","Marina","Preet"];

let prosor = nombres[0];

console.log(prosor)

let [dev1, dev2, dev3, dev4] = nombres;

console.log(dev3)

//SpreadOperator arreglos

let desarrolladores = [...nombres, "Jorge"];

console.log(desarrolladores)