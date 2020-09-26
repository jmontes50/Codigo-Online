function decorador(texto:string){
  return function(target){
    target.prototype.saludar = function(){
      console.log("Buenos días damas y caballeros" + texto);
    }
    target.prototype.celular = "908901270";
  }
}

@decorador(", como estan Uds")
class Persona {
  nombre:string;

  constructor(nombre:string){
    this.nombre = nombre;
  }

  saludar(texto:string){
    console.log("Hola que tal, soy " + this.nombre + " " + texto)
  }
}

let Jhonny = new Persona("Jhonny");

Jhonny.saludar("vamos a bailar");
console.log(Jhonny.celular);