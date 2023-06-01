import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CreaPizzaComponent } from './pages/crea-pizza/crea-pizza.component';

const routes: Routes = [

{
  path:'',
  component: HomeComponent
},
{
  path:'menu',
  component: MenuComponent
},
{
  path:'menu/aggiungi',
  component: CreaPizzaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
