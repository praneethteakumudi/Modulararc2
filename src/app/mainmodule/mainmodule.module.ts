import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainmoduleRoutingModule } from './mainmodule-routing.module';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';


@NgModule({
  declarations: [
    MainNavbarComponent
  ],
  imports: [
    CommonModule,
    MainmoduleRoutingModule
  ]
})
export class MainmoduleModule { }
