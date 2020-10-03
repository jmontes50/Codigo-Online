import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute, Params } from '@angular/router';
import {TareaService} from '../../../services/tarea.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  miTarea:any;

  constructor(private _route:ActivatedRoute, private _sTarea:TareaService) { }

  ngOnInit(): void {
    this._route.params.subscribe((parametros:Params) => {
      // console.log(parametros)
      let id = parametros.id;
      this._sTarea.getTareaById(id).subscribe((tareaRecibida) => {
        this.miTarea = tareaRecibida;
      })
    })
  }
}
