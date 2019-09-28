import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RepositoryComponent } from './repository/repository.component';
const routes: Routes = [
{ path: "landing", component:LandingComponent },
{ path: "repository", component:RepositoryComponent},
{ path: '', redirectTo:"/landing", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
