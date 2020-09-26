interface iProducto {
  codigo:number;
  nombre:string;
  cantidad:number;

  sumarInventario(cantidad:number):number;
}

class Producto implements iProducto{
  public codigo:number;
  public nombre:string;
  public cantidad:number;
  private ingredienteSecreto = "cafe";

  constructor(codigo:number, nombre:string, cantidad:number){
    this.codigo = codigo;
    this.nombre = nombre;
    this.cantidad = cantidad;
  }

  get Formula():string {
    return this.ingredienteSecreto;
  }

  set cambioFormula(nuevoIngrediente:string) {
    this.ingredienteSecreto = nuevoIngrediente;
  }

  sumarInventario(cantidad:number){
    return 10;
  }
}

let tecladoMecanico:Producto = new Producto(123, "Anne Pro 2", 10);

console.log(tecladoMecanico.nombre);

// tecladoMecanico.Formula;