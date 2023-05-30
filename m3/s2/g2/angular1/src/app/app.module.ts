import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropComponent } from './prop/prop.component';
import { AttrComponent } from './attr/attr.component';
import { StyleClassComponent } from './style-class/style-class.component';

@NgModule({
  declarations: [
    AppComponent,
    PropComponent,
    AttrComponent,
    StyleClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
