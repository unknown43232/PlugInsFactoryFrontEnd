import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

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
  signInWithGoogle(): Observable<any> {
    // http://localhost:3000/auth/google/callback
    return this.http.get(`${this.apiUrl}/google/callback`);
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
