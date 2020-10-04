import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tarea:any;
  @Output() tareaClick: EventEmitter<any> = new EventEmitter();
  @Output() borrarTarea: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  completar(){
    this.tareaClick.emit(this.tarea);
    Swal.fire({
      icon:'success',
      title:'Felicidades',
      text:'Tarea Completada',
      timer:2000,
      showConfirmButton:false
    })
  }

  borrar(){
    this.borrarTarea.emit(this.tarea)
  }

}
