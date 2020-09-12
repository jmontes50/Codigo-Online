// que tenga la estructura que yo voy a guardar en MockAPI
class Foto{
  foto_nombre = '';
  foto_descripcion = '';
  foto_url = '';

  constructor(nombre, descripcion, url){
    this.foto_nombre = nombre;
    this.foto_descripcion = descripcion;
    this.foto_url = url;
  }
}