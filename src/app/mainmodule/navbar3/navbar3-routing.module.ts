import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navbar3HomeComponent } from './navbar3-home/navbar3-home.component';
import { Navbar3AboutComponent } from './navbar3-about/navbar3-about.component';
import { Navbar3ContactComponent } from './navbar3-contact/navbar3-contact.component';
import { Navbar3LoginComponent } from './navbar3-login/navbar3-login.component';
import { Navbar3RegisterComponent } from './navbar3-register/navbar3-register.component';
import { Navbar3NavbarComponent } from './navbar3-navbar/navbar3-navbar.component';

const routes: Routes = [
  {
      path: '',
        component: Navbar3NavbarComponent,
        children:[
          { path: 'home', component: Navbar3HomeComponent },
  { path: 'about', component: Navbar3AboutComponent },
  { path: 'contact', component: Navbar3ContactComponent },
  { path: 'login', component: Navbar3LoginComponent },
  { path: 'register', component: Navbar3RegisterComponent }
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Navbar3RoutingModule {}


