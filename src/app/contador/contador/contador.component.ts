import { Component } from "@angular/core";


@Component({
    selector:'app-contador',
    template:`
        

        <h1>{{ titulo }}</h1>
        <h2>La base es: <strong>{{ base }}</strong></h2>

        <button (click)="acumular2(base)">+{{ base }}</button>

        <span>{{ numero}}</span>

        <button (click)="acumular2(-base)">-{{ base }}</button>
            
    `
})
export class ContadorComponent{
    titulo = 'Contador App';
    numero:number=10;
    base:number=5;
  
    acumular(valor:number){
      this.numero+=valor;
    }
    acumular2(valor:number){
      this.numero+=valor;
    }
}