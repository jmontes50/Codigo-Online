import axios from "axios";

const URL = "https://5f6419cd363f0000162d9468.mockapi.io/producto";

const obtenerProductos = async () => {
  try {
    let { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return error;
  }
};

const obtenerProductoPorId = async (prod_id) => {
  try {
    let { data } = await axios.get(`${URL}/${prod_id}`);
    return data;
  } catch (error) {
    return error;
  }
};

const crearProducto = async (objProducto) => {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    let { data } = await axios.post(URL, objProducto, { headers });
    return data;
  } catch (error) {
    return error;
  }
};

const borrarProducto = async (prod_id) => {
  try {
    let { data } = await axios.delete(`${URL}/${prod_id}`);
    return data;
  } catch (error) {
    return error;
  }
};

const subirImagen = (imagen, refStorage) => {
  return new Promise((resolve, reject) => {
    const tarea = refStorage.put(imagen);

    tarea.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        reject(error);
      },
      //esto ya nos interesa, aca ya subio la imagen
      () => {
        tarea.snapshot.ref.getDownloadURL()
        .then((urlimagen) => {
          console.log(urlimagen)
          resolve(urlimagen)
        })
        .catch((error) => reject(error))
      }
    );
  });
};

export {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  borrarProducto,
  subirImagen
};
