import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private reporte = new BehaviorSubject([]); //inicial - estado
  reporteActual = this.reporte.asObservable(); //como voy a ver ese estado

  constructor() { }

  modificarReporte(arregloTareas:Array<any>){ //método para modificar el estado
    this.reporte.next(arregloTareas);
  }
}
