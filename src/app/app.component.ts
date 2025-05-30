import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EstacionesComponent } from './estaciones/estaciones.component'; // 👈 Asegúrate de importar esto
import { DashboardComponent } from './dashboard/dashboard.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, EstacionesComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
