import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "gitsearch", component: GitsearchComponent },
  { path: "profile", component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, GitsearchComponent, ProfileComponent]
