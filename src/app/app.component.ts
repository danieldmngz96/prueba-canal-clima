import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EstacionesComponent } from './estaciones/estaciones.component'; // 👈 Asegúrate de importar esto

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, EstacionesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
