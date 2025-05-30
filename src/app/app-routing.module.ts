import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'estaciones', component: EstacionesComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
