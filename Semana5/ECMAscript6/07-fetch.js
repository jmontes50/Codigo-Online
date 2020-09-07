fetch("https://5f4845dd95646700168da4a8.mockapi.io/tabla_alumnos")
.then(respuesta => {
  // console.log(respuesta);
  return respuesta.json();
})
.then(datos => {
  console.table(datos);
}).catch(error => {
  console.error(error);
});

//POST

let nuevoAlumno = {
  nombres:"Juancito",
  apellidos:"Perez",
  dni:12412421,
  telefono:"+51 932432532"
}

let cabecera = {
  method: 'POST',
  headers:{
    'Content-type': 'application/json'
  },
  body:JSON.stringify(nuevoAlumno)
}

//fetch(url, cabeceras)
fetch("https://5f4845dd95646700168da4a8.mockapi.io/tabla_alumnos",cabecera)
.then((respuesta) => {
  return respuesta.json();
})
.then(datos => {
  console.log(datos)
})
.catch(err => {
  console.log(err)
})