import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Estacion } from '../models/estacion.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EstacionesService {
  private apiUrl = 'https://climateconnector.canalclima.com/ccapitest/Stations';

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
}
