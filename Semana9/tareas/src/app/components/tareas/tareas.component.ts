import { Component, OnInit } from '@angular/core';
import {TareaService} from '../../services/tarea.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  misTareas:Array<any>; //para almacenar mis tareas dentro de mi componente
  suscripcionTareas:Subscription;

  constructor(private _sTarea:TareaService) { }

  ngOnInit(): void {
    this.suscripcionTareas = this._sTarea.getTareas().subscribe((data) => {
      // console.log(data);
      this.misTareas = data;
      console.log(this.misTareas)
    })
  }

  completarTarea(tarea){
    alert(JSON.stringify(tarea));
  }

}
