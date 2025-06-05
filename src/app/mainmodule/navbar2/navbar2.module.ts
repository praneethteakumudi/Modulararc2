import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Navbar2RoutingModule } from './navbar2-routing.module';
import { Navbar2AboutComponent } from './navbar2-about/navbar2-about.component';
import { Navbar2ContactComponent } from './navbar2-contact/navbar2-contact.component';
import { Navbar2LoginComponent } from './navbar2-login/navbar2-login.component';
import { Navbar2NavbarComponent } from './navbar2-navbar/navbar2-navbar.component';
import { Navbar2RegisterComponent } from './navbar2-register/navbar2-register.component';

@NgModule({
  declarations: [

   Navbar2AboutComponent,
   Navbar2ContactComponent,
   Navbar2LoginComponent,
   Navbar2NavbarComponent,
   Navbar2RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Navbar2RoutingModule
  ]
})
export class Navbar2Module { }
