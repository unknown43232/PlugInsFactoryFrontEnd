import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
})
export class GreetingComponent {
  userInfo$: Observable<any>;

  constructor(private homeService: HomeService) {
    this.userInfo$ = this.homeService.userInfo$;
  }
}
