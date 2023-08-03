import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GreetingComponent } from './greeting/greeting.component'; // If you want to route to the GreetingComponent

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: GreetingComponent }, // Default child route
      // Add other child routes here
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
