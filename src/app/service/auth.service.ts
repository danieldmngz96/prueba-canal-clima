import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://climateconnector.canalclima.com/ccapitest';
  private _token: string = '';

  constructor(private http: HttpClient) {}

  login(): Observable<string> {
    const body = {
      username: 'Desarrollo2',
      password: '#usertemp13423_CC',
    };

    return this.http.post<any>(`${this.baseUrl}/login/authenticate`, body).pipe(
      tap((res) => console.log('✅ Token generado:', res.token)),
      map((res) => {
        this._token = res.token;
        return res.token;
      })
    );
  }

  get token(): string {
    return this._token;
  }
}
