//Obteniendo los elementos del HTML
var btnObtener = document.getElementById("btnobtener");
var listaUsuarios = document.getElementById("listausuarios")
var pagina = document.getElementById("pagina");
var btnGuardar = document.getElementById("guardardatos");

var usuariosTemporal = [];

//Obtengo los usuarios del localStorage y los imprimo
function obtenerUsuarios(){
  var usuariosObtenidos = localStorage.getItem("misusuarios");
  var usuariosAJSON = JSON.parse(usuariosObtenidos)
  imprimirUsuarios(usuariosAJSON);
}
obtenerUsuarios(); //ejejcuto de forma instantanea obtenerUsuarios

function imprimirUsuarios(usuarios){
  console.log(usuarios)
  var usuariosHtml = '';

  usuarios.forEach(function(user){
    //template string
    var li = `<li>${user.last_name}</li>`
    usuariosHtml = usuariosHtml + li;
  })
  // console.log(usuariosHtml);

  listaUsuarios.innerHTML = usuariosHtml;
}

//Guardar Datos
btnGuardar.addEventListener("click",function(){
  // console.log(usuariosTemporal);
  //JSON.stringify lo que hace es convertir Javascript a Texto
  var usuariosATexto = JSON.stringify(usuariosTemporal);
  // console.log(usuariosATexto);
  localStorage.setItem("misusuarios",usuariosATexto)
  alert("usuarios a texto")
})

//Aqui como vamos a escuchar la peticion para pedir datos
btnObtener.addEventListener("click",function(){
  var cartero = new XMLHttpRequest();

  //escuchamos al evento readystatechange para que nuestro cartero
  //no notifique del estado de nuestra petición
  cartero.addEventListener("readystatechange", function(){
    //readyState es la notificación
    if(cartero.readyState === 4){
      // console.log(cartero.status);
      if(cartero.status === 200) {
        // console.log(cartero.responseText)
        var respuesta = JSON.parse(cartero.responseText)
        // console.log(respuesta)
        var arregloUsuarios = respuesta.data;
        usuariosTemporal = arregloUsuarios;
        // console.log(arregloUsuarios)
        //llamo a mi funcion imprimirUsuarios, esta funcion recibe mia rreglo de Usuarios
        imprimirUsuarios(arregloUsuarios);
      }
    }
  });

  var paginaAConsultar = pagina.value;

  //nuestro asistente (xhr) rotula la petición
  cartero.open("GET", `https://reqres.in/api/users?page=${paginaAConsultar}`);
  //y la manda
  cartero.send(null)
})