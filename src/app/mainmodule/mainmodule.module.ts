import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { Navbar3Module } from './navbar3/navbar3.module';
import { Navbar1Module } from './navbar1/navbar1.module';
import { Navbar2Module } from './navbar2';

@NgModule({
  declarations: [
    MainNavbarComponent
  ],
  imports: [
    CommonModule,
    MainmoduleRoutingModule,
    Navbar3Module,
    Navbar1Module,
    Navbar2Module
  ]
})
export class MainmoduleModule { }
