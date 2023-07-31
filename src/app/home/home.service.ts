import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  private apiUrl = `${environment.apiUrl}/user`;
  getUserInfo(): Observable<any> {
    const headers = this.getHeadersWithToken();
    return this.http.get(`${this.apiUrl}/home`, {
      headers: headers,
      withCredentials: false,
    });
  }
  getHeadersWithToken(): HttpHeaders {
    const token = this.getCookie('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
    });
  }

  private getCookie(name: string): string | null {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }
}
