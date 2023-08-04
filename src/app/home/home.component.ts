import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userInfo: any;

  constructor(private homeService: HomeService) {}
  ngOnInit(): void {
    this.homeService.FetchUserInfo();
  }
}
