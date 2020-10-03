import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //modulo para peticiones Http
import { RoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TareaComponent } from './components/tareas/tarea/tarea.component';
import { DetalleComponent } from './components/tareas/detalle/detalle.component';
import { ReporteComponent } from './components/tareas/reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TareasComponent,
    TareaComponent,
    DetalleComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
