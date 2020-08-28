var inputAlumno = document.getElementById("inputalumno");
var btnBuscar = document.getElementById("btnbuscar");


function obtenerAlumnos(){
  //Va a obtener todos mis alumnos

  //Intansciando un nuevo objeto;
  var asistente = new XMLHttpRequest();

  //elemento.addEventListener("tipo_evento", funcion())
  asistente.addEventListener("readystatechange",function(){

    console.log("imprimiendo readyState", asistente.readyState);
    // el readyState me indica cual es el estado de mi peticion, va del 1 al 4, 4 es cuando ya tengo mi respuesta del servidor
    if(asistente.readyState === 4){
      //responseText -> es la rpta en texto plano del servidor
      console.log("status de mi petición: ", asistente.status);
      //el status  va a ser el codigo que me indica el estado de mi petición
      if(asistente.status === 200){
        console.log(JSON.parse(asistente.responseText));
      }
    }
  })

  asistente.open("GET", "https://5f4845dd95646700168da4a8.mockapi.io/tabla_alumnos");

  asistente.send(null); //send()

}

//mi function que obtiene 01 alumno por su id
function obtenerAlumno(id){
  var asistente = new XMLHttpRequest();

  asistente.addEventListener("readystatechange",function(){
    if(asistente.readyState === 4 && asistente.status === 200){
      console.log(JSON.parse(asistente.responseText));
    }else if(asistente.status === 404){
      console.log("No se encontro ningún alumno")
    }
  })

  asistente.open("GET", `https://5f4845dd95646700168da4a8.mockapi.io/tabla_alumnos/${id}`);
  asistente.send();

  console.log("Este mensaje esta puesto al final de mi función obtener alumno")
}

// obtenerAlumnos();

btnBuscar.addEventListener("click",function(){
  var miId = inputAlumno.value;

  obtenerAlumno(miId);
})

