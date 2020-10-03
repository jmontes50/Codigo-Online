import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Subscription } from 'rxjs';
import { ReporteService } from '../../services/reporte.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  misTareas: Array<any>; //para almacenar mis tareas dentro de mi componente
  suscripcionTareas: Subscription;
  errorTareas: boolean = false;
  tareasCompletadas: Array<any> = [];

  constructor(
    private _sTarea: TareaService,
    private _sReporte: ReporteService
  ) {}

  ngOnInit(): void {
    this.suscripcionTareas = this._sTarea.getTareas().subscribe(
      (data) => {
        // console.log(data);
        this.misTareas = data;
        console.log(this.misTareas);
      },
      //al mandar una segunda función como parámetro, ya podemos manejar errores
      (error) => {
        // console.log("error",error)
        this.errorTareas = true;
      }
    );
  }

  completarTarea(tarea) {
    // alert(JSON.stringify(tarea));
    this.tareasCompletadas.push(tarea);
    this._sReporte.modificarReporte(this.tareasCompletadas);
  }

  crearTarea() {
    let objTarea = {
      tarea_nombre: 'Conectar los cables',
      tarea_descripcion: 'Unir los cables por colores',
      tarea_imagen:
        'https://assets.mibolsillo.com/__export/1601317812007/sites/debate/img/2020/09/28/2_crop1601317811616.jpg_1708765372.jpg',
      tarea_tiempo: 20,
    };
    
    this._sTarea.createTarea(objTarea).subscribe(
      (tareaCreada) => {
        console.log(tareaCreada);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
