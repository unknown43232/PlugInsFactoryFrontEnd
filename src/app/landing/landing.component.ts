import { Component, OnInit } from '@angular/core';
import { SignInDialogComponent } from '../auth/sign-in-dialog/sign-in-dialog.component';
import { AuthService } from '../auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.authService.isAuthenticated();
  }

  openSignInDialog(): void {
    this.modalService.open(SignInDialogComponent, { centered: true });
  }
}
