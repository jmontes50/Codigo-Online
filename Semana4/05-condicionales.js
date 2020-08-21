var edad = +prompt("Ingresa tu edad");

if(edad < 18 && edad > 0){ //es menor que 18 y es mayor que 0
  console.log("tienes dni amarillito")
}else if( edad >= 0){ //es mayor o igual que 0
  console.log("tienes dni azulito")
}else{
  console.log("No ingrese numeros raros")
}

