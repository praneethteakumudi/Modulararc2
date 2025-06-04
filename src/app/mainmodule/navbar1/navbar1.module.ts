import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Navbar1AboutComponent } from './navbar1-about/navbar1-about.component';
import { Navbar1ContactComponent } from './navbar1-contact/navbar1-contact.component';
import { Navbar1HomeComponent } from './navbar1-home/navbar1-home.component';
import { Navbar1RegisterComponent } from './navbar1-register/navbar1-register.component';
import { Navbar1LoginComponent } from './navbar1-login/navbar1-login.component';
import { Navbar1NavbarComponent } from './navbar1-navbar/navbar1-navbar.component';
import { Navbar1RoutingModule } from './navbar1-routing.module';


@NgModule({
  declarations: [
   Navbar1AboutComponent,
   Navbar1ContactComponent,
   Navbar1HomeComponent,
   Navbar1RegisterComponent,
   Navbar1LoginComponent,
   Navbar1NavbarComponent
  ],
  imports: [
   CommonModule,
   FormsModule,
   ReactiveFormsModule,
   Navbar1RoutingModule
  ]
})
export class Navbar1Module { }
