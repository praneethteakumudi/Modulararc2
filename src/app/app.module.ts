import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmoduleModule } from './mainmodule/mainmodule.module';
import { Navbar3Module } from './mainmodule/navbar3/navbar3.module';
import { Navbar1Module } from './mainmodule/navbar1/navbar1.module';
import {Navbar2Module} from './mainmodule'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Navbar2Module,
    Navbar1Module,
    Navbar3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
