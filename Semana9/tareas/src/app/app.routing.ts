import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { DetalleComponent } from './components/tareas/detalle/detalle.component';
import { ReporteComponent } from './components/tareas/reporte/reporte.component';

const routes: Routes = [
  // {path: ruta_string, component: ComponenteImportado}
  { path: '', component: TareasComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'reporte', component: ReporteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
