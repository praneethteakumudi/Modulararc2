import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Navbar3RoutingModule } from './navbar3-routing.module';
import { Navbar3NavbarComponent } from './navbar3-navbar/navbar3-navbar.component';
import { Navbar3HomeComponent } from './navbar3-home/navbar3-home.component';
import { Navbar3AboutComponent } from './navbar3-about/navbar3-about.component';
import { Navbar3ContactComponent } from './navbar3-contact/navbar3-contact.component';
import { Navbar3LoginComponent } from './navbar3-login/navbar3-login.component';
import { Navbar3RegisterComponent } from './navbar3-register/navbar3-register.component';

@NgModule({
  declarations: [
    Navbar3NavbarComponent,
    Navbar3HomeComponent,
    Navbar3AboutComponent,
    Navbar3ContactComponent,
    Navbar3LoginComponent,
    Navbar3RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Navbar3RoutingModule
  ]
})
export class Navbar3Module {}
