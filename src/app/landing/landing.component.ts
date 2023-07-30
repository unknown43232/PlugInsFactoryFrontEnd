import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from '../auth/sign-in-dialog/sign-in-dialog.component';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.authService.isAuthenticated();
  }

  openSignInDialog(): void {
    this.dialog.open(SignInDialogComponent, {
      width: '400px',
      hasBackdrop: true,
      disableClose: false,
    });
  }
}
