var perrete = {
  nombre:"Backus",
  edad:10,
  color:"Blanco",
  raza:"Poodle Mini",
  hobbies:["Ladrar","Dormir","Perseguir Palomas"],
  
  jugar:function(juguete){
    console.log('Backus juega con una ' + juguete);
  }
}

console.log(perrete.nombre);
console.log(perrete.color);

perrete.edad = 11;
console.log(perrete.edad)

console.log(perrete.hobbies[2]);

for(var i = 0; i < perrete.hobbies.length ; i++){
  console.log(perrete.hobbies[i])
}

var perrete2 = {
  nombre:"Luna",
  edad:2,
  color:"Blanco",
  raza:"Poodle Mini",
  hobbies:["Ladrar","Jugar","Morder Cosas"],
  
  jugar:function(juguete){
    console.log('Luna juega con una ' + juguete);
  }
}

perrete2.jugar("pelota");


function compararPerro(dog){

  if(dog.raza === perrete.raza){
    console.log("Es la misma raza y su nombre es " + dog.nombre)
  }else{
    console.log("No es la misma raza y su nombre es " + dog.nombre)
  }
}

compararPerro(perrete2);