import { Component, OnInit } from '@angular/core';
import { EstacionesService } from '../service/estaciones.service';
import { Estacion } from '../models/estacion.model';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css'],
})
export class EstacionesComponent implements OnInit {
  estaciones: Estacion[] = [];
  cargando: boolean = true;
  error: string = '';

  constructor(private estacionesService: EstacionesService) {}

  ngOnInit(): void {
    this.estacionesService.getEstaciones().subscribe({
      next: (data) => {
        this.estaciones = data;
        this.cargando = false;
        console.log('📦 Estaciones en el componente:', this.estaciones);
      },
      error: (err) => {
        this.error = 'Error al cargar las estaciones';
        this.cargando = false;
        console.error('❌ Error al obtener estaciones:', err);
      }
    });
  }
}