let buscarPersona = (persona, callback) => {
  let nombres = ["Paolo","Gabriel","Hugo","Lorena","Marina","Daniel"]

  setTimeout(()=>{
    for(let i = 0; i<nombres.length; i++){
      if(nombres[i] == persona){
        callback(i)
        return; //si es que encuentro la persona, el return va a cortar la ejecución de mi código
      }
    }
    callback(-1)
  }, 3000)
}

buscarPersona("Marina", (posicion) => {
  if(posicion != -1){
    console.log(`La persona existe en la posicion ${posicion}`);
  }else{
    console.log("No existe")
  }
})
