import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DettaglioPizzaComponent } from './pages/dettaglio-pizza/dettaglio-pizza.component';
import { CreaPizzaComponent } from './pages/crea-pizza/crea-pizza.component';
import { ModificaPizzaComponent } from './pages/modifica-pizza/modifica-pizza.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DettaglioPizzaComponent,
    CreaPizzaComponent,
    ModificaPizzaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
