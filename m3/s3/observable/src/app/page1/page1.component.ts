import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit, OnDestroy{


  sub!:Subscription;//oggetto che sottoscriverà l'observable
  conteggio!:number;

  ngOnInit(): void {

    const intervallo = new Observable(observer => {
      let count = 0;
      setInterval(()=>{

        observer.next(count)//emette il valore che si trova tra le parentesi

        if(count == 5){
          observer.complete();//completo l'observable
          console.log('completo');
        }
        if(count > 3){
          observer.error(new Error('Count troppo grande'));
        }


        count++;
      },1000)

    })


    this.sub = intervallo
    .pipe(map( n => {
      this.conteggio = Number(n);
      return `Siamo al numero ${n}`;
    }))
    .subscribe({
      next: (numero)=> console.log(numero),
      error: (err)=> console.error(err),
      complete: ()=>console.log('completo')
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
