var btndata = document.getElementById("btndata");

btndata.addEventListener("click", function () {
  // console.log("click");

  //Creamos una instancia (copia) de un objeto con AJAX que hará la petición
  var postman = new XMLHttpRequest();

  //onreadystatechange es un listener (oyente) que escucha cuando se a actualizado el ciclo de mi petición (1. open, 2.send, 3.data, 4.responseText)
  postman.addEventListener("readystatechange", function(){
  // postman.onreadystatechange = function () {
    //readystate me indicara el estado de la peticion en forma de número del 1 al 4
    switch (postman.readyState) {
      case 1:
        console.log("OPEN", postman.readyState);
        break;
      case 2:
        alert("Hola soy un alert! :D")
        console.log("SEND", postman.readyState);
        break;
      case 3:
        console.log("Data, esperando al servidor...", postman.readyState);
        break;
      case 4:
        console.log("la respuesta ya esta aquí...", postman.readyState);
        // console.log("respuesta en texto", postman.responseText);
        var objRespuesta = JSON.parse(postman.responseText);
        console.log("JSON ya convertido", objRespuesta.data);
        break;
    }
  });

  //open configura (rotula) mi petición, indicando .open(TIPO, LA_URL_DONDE_IRA_LA_PETICION)
  postman.open("GET", "https://reqres.in/api/users?page=2")

  //send cuando ya enviamos la petición al servidor
  postman.send(null);
});
