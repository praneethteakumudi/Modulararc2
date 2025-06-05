import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar1NavbarComponent } from './navbar1-navbar/navbar1-navbar.component';
import { Navbar1HomeComponent } from './navbar1-home/navbar1-home.component';
import { Navbar1RegisterComponent } from './navbar1-register/navbar1-register.component';
import { Navbar1LoginComponent } from './navbar1-login/navbar1-login.component';
import { Navbar1AboutComponent } from './navbar1-about/navbar1-about.component';
import { Navbar1ContactComponent } from './navbar1-contact/navbar1-contact.component';

const routes: Routes = [
  {path:'',component:Navbar1NavbarComponent},
  {path:'home',component:Navbar1HomeComponent},
  {path:'register',component:Navbar1RegisterComponent},
  {path:'login',component:Navbar1LoginComponent},
  {path:'about',component:Navbar1AboutComponent},
  {path:'contacts',component:Navbar1ContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Navbar1RoutingModule { }
