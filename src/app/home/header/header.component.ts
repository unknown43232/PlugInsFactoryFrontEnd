import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userInfo: any;
  showSidebar = false;

  constructor(
    private authService: AuthService,
    private homeService: HomeService
  ) {
    this.homeService.userInfo$.subscribe((userInfo) => {
      this.userInfo = { ...userInfo };
    });
  }
  get profileImage(): string {
    return (
      this.userInfo.picture || 'https://randomuser.me/api/portraits/men/75.jpg'
    );
  }

  signOut(): void {
    this.authService.signOut();
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
