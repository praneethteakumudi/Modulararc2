import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmoduleModule } from './mainmodule/mainmodule.module';
import {Navbar2Module} from './mainmodule'
import { Navbar1Module } from './mainmodule/navbar1/navbar1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainmoduleModule,
    Navbar2Module,
    Navbar1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
