import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from '../auth/sign-in-dialog/sign-in-dialog.component';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      }
    });
  }

  openSignInDialog(): void {
    this.dialog.open(SignInDialogComponent, {
      width: '400px',
      hasBackdrop: true,
      disableClose: false,
    });
  }
}
