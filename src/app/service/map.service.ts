import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private http: HttpClient) {}

  obtenerEstaciones(): Observable<any[]> {
    return this.http.get<any[]>('/api/estaciones');
  }

  obtenerDatosPorEstacion(id: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/estaciones/${id}/datos`);
  }
}
