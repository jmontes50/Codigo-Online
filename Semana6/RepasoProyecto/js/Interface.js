
const getBotones = () => {
  let botonesZoom = document.getElementsByClassName("zoom");
  // console.log("btnszoom",botonesZoom)
  for(let i = 0; i < botonesZoom.length; i++){
    botonesZoom[i].addEventListener("click",() => {
      //Obnteniamos la url del atributo data-url del boton
      let url = botonesZoom[i].getAttribute("data-url");
      //obtener el div modal-body del modal
      let modalBody = document.querySelector(".modal-body");
      //lo limpiamos
      modalBody.innerHTML = '';
      //creamos una imagen y seteamos su atributo src a esa imagen con la url obtenida
      let imgModal = document.createElement("img");
      imgModal.setAttribute("src",url);
      imgModal.setAttribute("style","width:100%");
      //agregamos la imagen a modalBody
      modalBody.appendChild(imgModal)
      $('#modal').modal("show")
    })
  }
}

class Interface{
  imprimirFotos(arregloFotos){
    const contenido = document.getElementById("contenido");

    let cardsFotos = '';
    // arregloFotos.forEach(foto => {
      arregloFotos.forEach(({foto_url,foto_nombre,foto_descripcion,foto_like,id}) => {
      let cardFoto = `<div class="col-6 col-lg-3 mb-2">
                        <div class="card">
                          <img class="card-img-top" src="${foto_url}" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">${foto_nombre}</h5>
                            <p class="card-text">${foto_descripcion}</p>
                          </div>
                          <div class="card-footer d-flex justify-content-around">
                            <button class="btn btn-secondary btn-sm zoom" data-url="${foto_url}"><i class="fas fa-eye"></i></button>
                            <button class="btn btn-danger btn-sm"><i class="fas fa-heart mr-1"></i>${foto_like}</button>
                          </div>
                        </div>
                      </div>`;
     cardsFotos = cardsFotos + cardFoto;       
    });

    contenido.innerHTML = cardsFotos;
    getBotones();  
    
  }
}