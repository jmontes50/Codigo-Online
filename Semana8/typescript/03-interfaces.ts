//contrato
interface iPerrete {
  nombre:string;
  raza:string;
  edad:number;
  ladra?:boolean;
}

let dog:iPerrete	= {
  nombre:"Backus",
  raza:"Poodle",
  edad:11,
  ladra:true
}

let mostrarNombre = (dog:iPerrete) => {
  console.log(dog.nombre)
}

mostrarNombre(dog)