import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css'],
})
export class SignInDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<SignInDialogComponent>,
    private dialog: MatDialog,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  signIn(signInForm: NgForm): void {
    console.log(signInForm);
    if (signInForm.valid) {
      this.authService.signIn(signInForm.value).subscribe((res: any) => {
        // this.cookieService.set('token', res.token);
        this.authService.setAuthStatus(true);
        this.dialogRef.close();
      });
    }
  }

  openRegisterDialog(): void {
    this.dialogRef.close();
    this.dialog.open(RegisterDialogComponent, {
      width: '400px',
      hasBackdrop: true,
      disableClose: false,
    });
  }

  signInWithGoogle(): void {
    this.authService.signInWithGoogle();
    // Implement sign in with Google here
  }

  goBack(): void {
    this.dialogRef.close();
  }
}
