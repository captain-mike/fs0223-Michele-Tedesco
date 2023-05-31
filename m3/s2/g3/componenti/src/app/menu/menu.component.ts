import { Component } from '@angular/core';

type Pizza = {
  gusto:string,
  prezzo:number,
  ingredienti:string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuGenitore:Pizza[] = [
    {
      gusto:'Margherita',
      prezzo:5,
      ingredienti:'Pomodoro, Mozzarella'
    },
    {
      gusto:'Diavola',
      prezzo:1,
      ingredienti:'Pomodoro, Mozzarella, Salame piccante'
    },
    {
      gusto:'Mimosa',
      prezzo:5,
      ingredienti:'Panna, Prosciutto cotto, Mais'
    }
  ];



}
