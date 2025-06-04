import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { Navbar3Module } from './navbar3/navbar3.module';


@NgModule({
  declarations: [
    MainNavbarComponent
  ],
  imports: [
    CommonModule,
    MainmoduleRoutingModule,
    Navbar3Module
  ]
})
export class MainmoduleModule { }
