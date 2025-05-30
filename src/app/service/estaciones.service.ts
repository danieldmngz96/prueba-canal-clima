import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Estacion } from '../models/estacion.model';
import { AuthService } from './auth.service';

interface WeatherResponse {
  temperature: number;
  humidity: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root',
})
export class EstacionesService {
  private apiUrl = 'https://climateconnector.canalclima.com/ccapitest/Stations';
  private weatherUrl = 'https://climateconnector.canalclima.com/ccapitest/Weather';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getEstaciones(): Observable<Estacion[]> {
    return this.authService.login().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        return this.http.get<Estacion[]>(this.apiUrl, { headers });
      })
    );
  }

  obtenerDatosClimaPorEstacion(stationId: number): Observable<WeatherResponse> {
    return this.authService.login().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        const url = `${this.weatherUrl}?stationId=${stationId}`;
        return this.http.get<WeatherResponse>(url, { headers });
      })
    );
  }

  getDatosEstacion(): Observable<any[]> {
    return this.authService.login().pipe(
      switchMap((token) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        return this.http.get<any[]>(`${this.apiUrl}/data`, { headers });
      })
    );
  }

}
