import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar3LoginComponent } from './navbar3-login/navbar3-login.component';
import { Navbar3RegisterComponent } from './navbar3-register/navbar3-register.component';
import { Navbar3HomeComponent } from './navbar3-home/navbar3-home.component';
import { Navbar3ContactComponent } from './navbar3-contact/navbar3-contact.component';
import { Navbar3AboutComponent } from './navbar3-about/navbar3-about.component';

const routes: Routes = [
  { path: 'login', component: Navbar3LoginComponent },
  { path: 'register', component: Navbar3RegisterComponent },
  { path: 'home', component: Navbar3HomeComponent },
  { path: 'contact', component: Navbar3ContactComponent },
  { path: 'about', component: Navbar3AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Navbar3RoutingModule { }
