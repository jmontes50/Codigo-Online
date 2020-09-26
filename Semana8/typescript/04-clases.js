class Producto {
    constructor(codigo, nombre, cantidad) {
        this.ingredienteSecreto = "cafe";
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
    get Formula() {
        return this.ingredienteSecreto;
    }
    set cambioFormula(nuevoIngrediente) {
        this.ingredienteSecreto = nuevoIngrediente;
    }
    sumarInventario(cantidad) {
        return 10;
    }
}
let tecladoMecanico = new Producto(123, "Anne Pro 2", 10);
console.log(tecladoMecanico.nombre);
console.log(tecladoMecanico.ingredienteSecreto);
