class Interface{
  imprimirFotos(arregloFotos){
    const contenido = document.getElementById("contenido");

    let cardsFotos = '';
    arregloFotos.forEach(foto => {
      let cardFoto = `<div class="col-3">
                        <div class="card">
                          <img class="card-img-top" src="${foto.foto_url}" alt="...">
                        </div>
                      </div>`;
     cardsFotos = cardsFotos + cardFoto;                 
    });

    contenido.innerHTML = cardsFotos;

    
    /**
     * <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
     */


  }
}