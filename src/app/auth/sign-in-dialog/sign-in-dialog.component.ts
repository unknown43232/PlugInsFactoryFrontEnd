import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css'],
})
export class SignInDialogComponent {
  constructor(
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  signIn(signInForm: NgForm): void {
    console.log(signInForm);
    if (signInForm.valid) {
      this.authService.signIn(signInForm.value).subscribe((res: any) => {
        this.modalService.dismissAll();
        this.authService.setAuthStatus(true);
      });
    }
  }

  openRegisterDialog(): void {
    this.modalService.dismissAll();
    this.modalService.open(RegisterDialogComponent, { centered: true });
  }

  signInWithGoogle(): void {
    this.authService.signInWithGoogle();
  }
}
