import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent {
  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private dialogRef: MatDialogRef<RegisterDialogComponent>,
    private cookieService: CookieService
  ) {}

  register(form: NgForm): void {
    if (form.valid) {
      this.authService.register(form.value).subscribe(
        (res: any) => {
          // If the registration is successful, store the JWT in a cookie
          // this.cookieService.set('token', res.token);
          this.authService.setAuthStatus(true);
          this.dialogRef.close();
        },
        (err) => {
          // If the registration fails, handle the error
          console.error(err);
        }
      );
    }
  }
  goBack(): void {
    this.dialogRef.close();
    this.dialog.open(SignInDialogComponent, {
      width: '400px',
      hasBackdrop: true,
      disableClose: false,
    });
  }
}
