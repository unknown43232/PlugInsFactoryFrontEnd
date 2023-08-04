import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AuthModule } from '../auth/auth.module';
import { GreetingComponent } from './greeting/greeting.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    GreetingComponent,
    HeaderComponent,
    SettingsComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    AuthModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class HomeModule {}
