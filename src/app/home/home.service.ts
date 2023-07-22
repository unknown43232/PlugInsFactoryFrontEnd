import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  private apiUrl = 'http://localhost:3000/user';
  headers = new HttpHeaders({
    Authorization: 'Bearer ' + this.cookieService.get('token'),
  });

  getUserInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/home`, { headers: this.headers });
  }
}
