var inputNombre = document.getElementById("nombre");
var inputTrabajo = document.getElementById("trabajo");
var btnEnviar = document.getElementById("enviar");


btnEnviar.addEventListener("click",function(){
  var objUsuario = {
    //en un objeto añado la información que voy a enviar
    name:inputNombre.value,
    job:inputTrabajo.value
  }

  var asistente = new XMLHttpRequest();

  asistente.addEventListener("readystatechange",function(){

    if(asistente.readyState === 4){
      if(asistente.status === 201){
        // console.log(asistente.responseText);
        var respuesta = JSON.parse(asistente.responseText);
        console.log(respuesta)
      }
    }
  })

  asistente.open("POST", "https://reqres.in/api/users");
  //agregando cabeceras
  asistente.setRequestHeader("Content-type","application/json");
  //send ya envio mi objeto pero convertido a texto
  asistente.send(JSON.stringify(objUsuario));
})

