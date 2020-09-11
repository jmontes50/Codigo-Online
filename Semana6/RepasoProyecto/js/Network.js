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
      }).catch(error => {
        reject(error)
      })
    })
  }
}