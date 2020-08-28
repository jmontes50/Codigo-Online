var formAlumno = document.getElementById("formalumno");

function crearAlumno(alumno){
  var asistente = new XMLHttpRequest();

  asistente.addEventListener("readystatechange", function(){
    if(asistente.readyState === 4){
      console.log("respuesta",asistente.responseText);
      console.log("estado", asistente.status);
    }
  })

  asistente.open("POST", "https://5f4845dd95646700168da4a8.mockapi.io/tabla_alumnos/");
  asistente.setRequestHeader("Content-type", "application/json");
  asistente.send(JSON.stringify(alumno));

  //algo al final
  console.log("estoy al final")
}


//voy a escuchar al evento submit del formulario, el submit es cuando que el formulario va a enviar los datos
formAlumno.addEventListener("submit", function(e){
  e.preventDefault();

  //que va a representar la información que queremos mandar
  var objAlumno = {
    nombres: formAlumno["nombres"].value,
    apellidos: formAlumno["apellidos"].value,
    dni: formAlumno["dni"].value,
    telefono: formAlumno["telefono"].value,
  }

  crearAlumno(objAlumno);
})