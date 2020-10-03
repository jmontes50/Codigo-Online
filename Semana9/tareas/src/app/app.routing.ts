import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './components/tareas/tareas.component';
import { DetalleComponent } from './components/tareas/detalle/detalle.component';

const routes: Routes = [
  // {path: ruta_string, component: ComponenteImportado}
  { path: '', component: TareasComponent },
  { path: 'detalle', component: DetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
