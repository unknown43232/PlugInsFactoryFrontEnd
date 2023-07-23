import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = 'http://localhost:3000/auth';
  private apiUrl =
    'https://plug-ins-factory-back-end-production.up.railway.app/auth';
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  // isAuthenticated(): boolean {
  //   const token = this.cookieService.get('token');
  //   // Check if the token exists and is valid
  //   if (token) {
  //     // You might want to add more checks here to verify the token is valid
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  isAuthenticated(): Observable<boolean> {
    return this.authStatus.asObservable();
  }
  private hasToken(): boolean {
    const token = this.cookieService.get('token');
    return !!token;
  }
  signIn(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
  register(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  signOut(): void {
    this.cookieService.delete('token');
    this.authStatus.next(false);
    this.router.navigate(['/']); // Redirect to landing page
  }
  setAuthStatus(value: boolean): void {
    this.authStatus.next(value);
  }
}
