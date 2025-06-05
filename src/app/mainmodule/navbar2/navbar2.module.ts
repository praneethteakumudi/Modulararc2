import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navbar2RoutingModule } from './navbar2-routing.module';
import { Navbar2NavbarComponent } from './navbar2-navbar/navbar2-navbar.component';
import { Navbar2LoginComponent } from './navbar2-login/navbar2-login.component';
import { Navbar2RegisterComponent } from './navbar2-register/navbar2-register.component';
import { Navbar2ContactComponent } from './navbar2-contact/navbar2-contact.component';
import { Navbar2HomeComponent } from './navbar2-home/navbar2-home.component';
import { Navbar2AboutComponent } from './navbar2-about/navbar2-about.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    Navbar2RoutingModule
  ]
})
export class Navbar2Module { }
