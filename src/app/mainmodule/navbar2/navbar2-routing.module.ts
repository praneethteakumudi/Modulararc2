import { Navbar2NavbarComponent } from './navbar2-navbar/navbar2-navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar2HomeComponent } from './navbar2-home/navbar2-home.component';
import { Navbar2RegisterComponent } from './navbar2-register/navbar2-register.component';
import { Navbar2LoginComponent } from './navbar2-login/navbar2-login.component';
import { Navbar2AboutComponent } from './navbar2-about/navbar2-about.component';
import { Navbar2ContactComponent } from './navbar2-contact/navbar2-contact.component';

const routes: Routes = [
  {
    path: '',
    component: Navbar2NavbarComponent,
    children: [
       { path: '', component: Navbar2HomeComponent },
      { path: 'register', component: Navbar2RegisterComponent },
      { path: 'login', component: Navbar2LoginComponent },
      { path: 'about', component: Navbar2AboutComponent },
      { path: 'contact', component: Navbar2ContactComponent },
      { path: '', redirectTo: 'register', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Navbar2RoutingModule { }
