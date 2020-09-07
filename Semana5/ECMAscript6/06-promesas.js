let miHorno = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Torta is ready!")
      reject("pos se quemo :(");
    }, 5000);
  });
};

// miHorno()
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//-----------------------------------

let pensionAlDia = () =>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("si tiene pensión al día")
      // reject("no tiene pensión al día")
    },4000)
  })
}

let obtenerAlumnos = () => {
  return new Promise((resolve, reject) => {
    let asistente = new XMLHttpRequest();

    asistente.addEventListener("readystatechange", () => {
      if (asistente.readyState === 4) {
        if (asistente.status === 200) {
          resolve(JSON.parse(asistente.responseText));
        } else {
          reject("No hay!");
        }
      }
    });

    asistente.open(
      "GET",
      "https://5f4845dd95646700168da4a8.mockapi.io/tabla_alumnos"
    );
    asistente.send(null);
  });
};



obtenerAlumnos()
  .then((alumnos) => {
    console.table(alumnos)
    return pensionAlDia();
  })
  .then(resultado => {
    console.log(resultado)
  })
  .catch((error) => console.error(error));
