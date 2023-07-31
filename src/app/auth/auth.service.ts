import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private authStatus = new BehaviorSubject<boolean>(false);
  private googleClientId =
    '560322210794-tis4uva3h869jlsfc910f0fai9svlcbf.apps.googleusercontent.com';
  private redirectUri = `${this.apiUrl}/google/callback`;

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): Observable<boolean> {
    const headers = this.getHeadersWithToken();
    this.http
      .get(`${this.apiUrl}/isAuthenticated`, {
        headers: headers,
        withCredentials: false,
      })
      .subscribe(
        (res: any) => {
          this.setAuthStatus(res.isAuthenticated);
        },
        (err) => {
          this.setAuthStatus(false);
        }
      );
    return this.authStatus.asObservable();
  }
  signIn(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user, {
      withCredentials: true,
    });
  }
  register(user: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user, {
      withCredentials: true,
    });
  }
  signInWithGoogle() {
    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${this.googleClientId}&response_type=code&scope=openid%20email%20profile&redirect_uri=${this.redirectUri}`;
    window.location.href = googleOAuthUrl;
  }

  signOut(): void {
    this.http
      .post(`${this.apiUrl}/logout`, {}, { withCredentials: true })
      .subscribe(
        (res) => {
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
        }
      );
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

  setAuthStatus(value: boolean): void {
    this.authStatus.next(value);
    if (value) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
