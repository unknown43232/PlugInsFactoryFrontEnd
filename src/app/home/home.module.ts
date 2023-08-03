import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthModule } from '../auth/auth.module';
import { GreetingComponent } from './greeting/greeting.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, GreetingComponent],
  imports: [HomeRoutingModule, CommonModule, AuthModule],
})
export class HomeModule {}
