import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent {
  constructor(
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  register(form: NgForm): void {
    if (form.valid) {
      this.authService.register(form.value).subscribe(
        (res: any) => {
          this.modalService.dismissAll();
          this.authService.setCookie(res.token);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
  goBack(): void {
    this.modalService.dismissAll();
    this.modalService.open(SignInDialogComponent, { centered: true });
  }
}
