// Importación de decoradores y utilidades de Angular
import { Component, OnInit } from '@angular/core';
// Importación de directivas comunes de Angular (ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';
// Servicio personalizado para obtener estaciones y sus datos
import { EstacionesService } from '../service/estaciones.service';
// Tipos de datos para gráficos desde Chart.js
import { ChartData, ChartOptions } from 'chart.js';
// Módulo de gráficos de Angular basado en Chart.js
import { NgChartsModule } from 'ng2-charts';
// Librería Leaflet para trabajar con mapas
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard', // Selector del componente
  standalone: true, // Indica que es un componente standalone
  imports: [CommonModule, NgChartsModule], // Importa módulos necesarios para la vista
  templateUrl: './dashboard.component.html', // Ruta al archivo de plantilla HTML
  styleUrls: ['./dashboard.component.css'], // Ruta al archivo de estilos CSS
})
export class DashboardComponent implements OnInit {
  // Lista que almacenará todas las estaciones obtenidas desde el servicio
  estaciones: any[] = [];
  chartData: ChartData<'line'> = { labels: [], datasets: [] };
  chartOptions: ChartOptions<'line'> = { responsive: true };
  map: any;
  currentMarker: any;

  // Inyección del servicio personalizado para obtener estaciones
  constructor(private estacionesService: EstacionesService) {}

  // Método que se ejecuta automáticamente al inicializar el componente
  ngOnInit(): void {
    // Solicita la lista de estaciones desde el backend y la guarda en el array
    this.estacionesService.getEstaciones().subscribe((estaciones) => {
      this.estaciones = estaciones;
    });

    // Inicializa el mapa centrado en Colombia con zoom 5
    this.map = L.map('map').setView([4.5709, -74.2973], 5);

    // Agrega capa base de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors', // Atribución obligatoria
    }).addTo(this.map);

    // Obtener estaciones y marcarlas en el mapa
    this.estacionesService.getEstaciones().subscribe((estaciones) => {
      this.estaciones = estaciones;
      console.log('estanciones' + estaciones);

      // Recorrer cada estación y colocar marcador rojo
      this.estaciones.forEach((estacion) => {
        if (estacion.latitude && estacion.longitude) {
          const redIcon = new L.Icon({
            iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
          });

          L.marker([estacion.latitude, estacion.longitude], { icon: redIcon })
            .addTo(this.map)
            .bindPopup(estacion.name || 'Estación');
        }
      });
    });
  }

  // Evento que se dispara cuando el usuario cambia la estación en el <select>
  onEstacionChange(event: any) {
    const id = event.target.value;

    // Solicita los datos de la estación seleccionada al backend
    this.estacionesService.getEstaciones().subscribe((datos: any[]) => {
      if (datos && datos.length > 0) {
        this.chartData = {
          labels: datos.map((d) => d.hora), // <-- esta línea es la corrección clave
          datasets: [
            {
              label: 'Temperatura (°C)',
              data: datos.map((d) => d.temperatura),
              borderColor: 'red',
              fill: false,
            },
          ],
        };
      }
    });

    // Busca la estación seleccionada por ID para centrar el mapa
    const estacion = this.estaciones.find((e) => e.id === id);

    if (estacion?.lat && estacion?.lon) {
      this.map.setView([estacion.lat, estacion.lon], 13);
      L.marker([estacion.lat, estacion.lon])
        .addTo(this.map)
        .bindPopup(estacion.nombre)
        .openPopup();
    }
    // Cargar los datos de la estación para graficar
    this.cargarDatosEstacion(id);
  }

  // Método separado que carga los datos y los configura en el gráfico
  cargarDatosEstacion(id: any) {
    this.estacionesService.getDatosEstacion().subscribe((datos: any[]) => {
      const datosFiltrados = datos.filter((d) => d.estacionId == id);

      if (datosFiltrados.length > 0) {
        this.chartData = {
          labels: datosFiltrados.map((d) => d.hora),
          datasets: [
            {
              label: 'Temperatura (°C)',
              data: datosFiltrados.map((d) => d.temperatura),
              borderColor: 'red',
              fill: false,
            },
          ],
        };
      } else {
        this.chartData = { labels: [], datasets: [] };
      }
    });
  }

}
