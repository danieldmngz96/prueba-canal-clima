// app.routes.ts (o donde tengas las rutas)
import { Routes } from '@angular/router';
import { EstacionesModuleComponent } from './estaciones-module/estaciones-module.component';

export const routes: Routes = [
  {
    path: '',
    component: EstacionesModuleComponent
  }
];
