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
    return this.http.get(`${this.apiUrl}/home`, {
      withCredentials: true,
    });
  }
}
