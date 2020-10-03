import { Component, OnInit } from '@angular/core';
import {TareaService} from '../../../services/tarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulariotarea',
  templateUrl: './formulariotarea.component.html',
  styleUrls: ['./formulariotarea.component.css']
})
export class FormulariotareaComponent implements OnInit {

  nuevaTarea:object = {
    tarea_nombre:'',
    tarea_descripcion:'',
    tarea_imagen:'',
    tarea_tiempo:0
  }

  constructor(private _sTarea:TareaService) { }

  ngOnInit(): void {

  }

  crearTarea(){
    this._sTarea.createTarea(this.nuevaTarea).subscribe((tareaCreada)=>{
      Swal.fire({
        icon:'success',
        title:'Tarea Creada'
      })
    },
    (error)=>{
      console.log(error)
    })
  }

}
