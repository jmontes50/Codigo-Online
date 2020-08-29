var btnmodal = document.getElementById("clickmodal");

btnmodal.addEventListener("click", function(){
  //$ <- jquery
  //$("selector ya sea con #id .clase")
  //modal(show), abre el modal
  $("#mimodal").modal("show");

})