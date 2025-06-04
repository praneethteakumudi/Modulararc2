import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmoduleModule } from './mainmodule/mainmodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainmoduleModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
