import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent {
  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<RegisterDialogComponent>,
    private cookieService: CookieService
  ) {}

  register(form: NgForm): void {
    if (form.valid) {
      this.authService.register(form.value).subscribe(
        (res: any) => {
          // If the registration is successful, store the JWT in a cookie
          this.cookieService.set('token', res.token);
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
  }
}
