import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../../services/reporte.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  suscripcionAReporte:Subscription;
  tareasCompletadas:Array<any> = [];

  constructor(private _sReporte:ReporteService) { }

  ngOnInit(): void {
    this.suscripcionAReporte = this._sReporte.reporteActual.subscribe((tareas) => {
      this.tareasCompletadas = tareas;
      console.log(this.tareasCompletadas)
    })
  }

}
