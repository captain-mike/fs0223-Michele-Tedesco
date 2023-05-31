import { Component, Input } from '@angular/core';

type Pizza = {
  gusto:string,
  prezzo:number,
  ingredienti:string
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {

  //con #input predispongo la proprietà menu, come proveniente dall'esterno
  @Input() menu!:Pizza[];


}
