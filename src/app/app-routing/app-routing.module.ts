import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "../dashboard/dashboard.component";
import { RunDetailComponent } from "..//run-detail/run-detail.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jump-run/:id', component: RunDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
