import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url:string = "https://5f6419cd363f0000162d9468.mockapi.io/";

  constructor(private _sHttp: HttpClient) { }

  getTareas(): Observable<any> {
      return this._sHttp.get(`${this.url}tareas`);
  }

  getTareaById(id:string): Observable<any> {
    return this._sHttp.get(`${this.url}tareas/${id}`)
  }
}
