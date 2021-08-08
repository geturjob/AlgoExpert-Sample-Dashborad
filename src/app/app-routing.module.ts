import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from '../app/dashboard/dashboard/dashboard.component';
import { SystemdashComponent } from '../app/systemdash/systemdash.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"systemdash",component:SystemdashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
