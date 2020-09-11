//Se va a encargar de las peticiones

const URL = 'https://5f4845dd95646700168da4a8.mockapi.io/';

class Network{
  obtenerFotos(){
    return new Promise ((resolve, reject) => {
      fetch(`${URL}/Fotos`)
      .then(respuesta => {
        return respuesta.json()
      }).then(misFotos => {
        // console.log("network",misFotos)
        resolve(misFotos)
      }).catch(error => reject(error))
    })
  }

  crearFoto(objFoto){
    return new Promise((resolve, reject) => {
      let configuracion = {
        method:'POST',
        body:JSON.stringify(objFoto),
        headers: {'Content-Type':'application/json'}
      }
      fetch(`${URL}/Fotos`,configuracion)
      .then(respuesta => {
        return respuesta.json();
      }).then(fotoCreada => {
        resolve(fotoCreada);
      }).catch(error => reject(error))
    })
  }
}