import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstacionesComponent } from './estaciones/estaciones.component';

const routes: Routes = [
  { path: 'estaciones', component: EstacionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
