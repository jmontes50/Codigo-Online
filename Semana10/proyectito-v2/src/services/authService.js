import fire from "../config/firebase";

const registro = (email, password) => {
  return new Promise ((resolve, reject) => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((u) => {
      console.log(u.user.uid);
      resolve("usuario creado")
    })
    .catch(error => {
      reject(`Error al crear usuario ${error}`);
    })
  })
}

const ingresar = (email, password) => {
  return new Promise ((resolve, reject) => {
    fire.auth().signInWithEmailAndPassword(email, password)
    .then((u) => {
      resolve(u.user)
    })
    .catch(error => {
      reject(`Error al loguear usuario ${error}`);
    })
  })
}

const salir = () => {
  return new Promise ((resolve, reject) => {
    fire.auth().signOut().then(()=>{
      resolve("El usuario se deslogueo");
    }).catch((error) => {
      reject(error);
    });
  })
}

export {registro, ingresar, salir};