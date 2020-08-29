class Perrete {
  //el constructor es la funcion que se va a encargar de definir las propiedades de mi objeto, y por eso siempre se va a ejecutar primero
  constructor(nombre, edad, raza, narizmojada, tamanio){
    this.name = nombre; 
    this.age = edad;
    this.breed = raza;
    this.wetnose = narizmojada; 
    this.size = tamanio;
  }

  //un método
  ladrar(veces){
    console.log(`wau wau wau wau woff ${veces} veces`);
  }

  aumentarEdad(){
    this.age = this.age + 1;
  }
}


let dog = new Perrete("Backus", 11, "poodle", true, "toy");

console.log(dog);

let chien = new Perrete("Luna", 2, "poodle", true, "mediana");

console.log(chien)

console.log(dog.name);

//llamando al metodo
dog.ladrar(3);

dog.name = "Firulais"; //maaaaal

console.log(dog.name);

chien.aumentarEdad();

console.log(chien.age);

