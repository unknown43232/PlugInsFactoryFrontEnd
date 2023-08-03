import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private userInfoSubject = new BehaviorSubject<any>(null);
  userInfo$ = this.userInfoSubject.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService) {}
  private apiUrl = `${environment.apiUrl}/user`;
  FetchUserInfo() {
    const headers = this.getHeadersWithAuthorization();
    this.http
      .get(`${this.apiUrl}/home`, {
        headers: headers,
        withCredentials: false,
      })
      .subscribe(
        (user) => {
          this.userInfoSubject.next(user);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  getHeadersWithAuthorization(): HttpHeaders {
    const token = this.cookieService.get('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
    });
  }
}
