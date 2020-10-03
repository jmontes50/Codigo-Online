import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ReporteService } from '../../../services/reporte.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit, AfterViewInit {

  suscripcionAReporte:Subscription;
  tareasCompletadas:Array<any> = [];

  // grafico
  public label = ['Tareas Completadas','Tareas por Completar'];
  public data = [this.tareasCompletadas.length, 10];
  public tipoGrafico = 'pie';

  constructor(private _sReporte:ReporteService) { }

  ngOnInit(): void {
    this.suscripcionAReporte = this._sReporte.reporteActual.subscribe((tareas) => {
      this.tareasCompletadas = tareas;
      console.log(this.tareasCompletadas)
      this.data = [this.tareasCompletadas.length, 10]
    })
  }

  ngAfterViewInit(){
    this.data = [this.tareasCompletadas.length, 10]
  }

}
