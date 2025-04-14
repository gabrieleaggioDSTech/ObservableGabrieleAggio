import { Component, OnInit } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio6',
  templateUrl: './esercizio6.component.html',
  styleUrls: ['./esercizio6.component.scss']
})
export class Esercizio6Component extends BaseEsercizio {
  
  output : string = '';
  subscription : Subscription | null = null;

  constructor(private eserciziService : EserciziService) {
    super();
   }

   override esegui(): void {
    this.subscription = this.eserciziService.creaObservableEsercizio6().subscribe({
      next: val => this.output +=  `Valore: ${val}\n`,
      complete: () => this.output += 'Completato'
    });
  }

  

}
