// var contador = 0;

// var llamar = 0;

// do{
//   //el bloque de codigo que queremos ejecutar
//   llamar = Math.random(); //me devuelve un num aleatorio entre 0 y 1
//   console.log("llamar es: " + llamar);

//   contador++;
//   if(contador === 2){
//     console.log("Amig@ date cuenta");
//     break;
//   }

// }while(llamar > 0.5)

// console.log("has llamado " + contador + " veces")

for(var i = 0; i < 10; i++){
  if(i === 5){
    continue;
  }
  console.log(i)
}

//break; interrumpe por completo un ciclo de un bucle,

//continue, va a interrumpir una sola iteración del bucle y de ahi continuará