let traerData = async () => {
  return "mi_respuesta";
  // throw "Errrrooooor!"
}

// traerData()
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//   console.error(err)
// })

let usarData = async () => {
  try{
    let miRespuesta = await traerData();
    console.log(miRespuesta);
  }catch(err){
    console.log(err)
  }
}

usarData();