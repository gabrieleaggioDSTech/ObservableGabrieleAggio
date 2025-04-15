import { Component, OnInit } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio8',
  templateUrl: './esercizio8.component.html',
  styleUrls: ['./esercizio8.component.scss']
})
export class Esercizio8Component extends BaseEsercizio {
  
  output : string = '';
  subscription : Subscription | null = null;
  

  constructor(private eserciziService : EserciziService) {
    super();
   }

   override esegui(): void {
    
    const { source$, stopper$ } = this.eserciziService.creaObservableEsercizio8();

    this.subscription = source$.subscribe({
      next: val => this.output += `Valore: ${val}\n`,
      complete: () => this.output += 'Completato\n'
    });

    setTimeout(() => stopper$.next(), 3000);
  }

}
