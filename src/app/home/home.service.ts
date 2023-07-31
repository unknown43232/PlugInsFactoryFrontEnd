import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  private apiUrl = `${environment.apiUrl}/user`;
  getUserInfo(): Observable<any> {
    const headers = this.getHeadersWithAuthorization();
    return this.http.get(`${this.apiUrl}/home`, {
      headers: headers,
      withCredentials: false,
    });
  }

  getHeadersWithAuthorization(): HttpHeaders {
    const token = this.cookieService.get('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
    });
  }
}
