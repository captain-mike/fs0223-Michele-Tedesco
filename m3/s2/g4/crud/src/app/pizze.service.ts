import { Injectable } from '@angular/core';
import { IPizza } from './ipizza';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  apiUrl:string = 'http://localhost:3000/pizze';

  constructor() { }

  getPizze():Promise<IPizza[]>{
    return fetch(this.apiUrl).then(response => response.json());
  }

  addPizza(pizza:IPizza):Promise<any>{
    return fetch(this.apiUrl,{
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pizza)
    }).then(response => response.json())
  }

}
