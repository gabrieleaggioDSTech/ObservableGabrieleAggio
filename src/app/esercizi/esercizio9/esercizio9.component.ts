import { Component, OnInit } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio9',
  templateUrl: './esercizio9.component.html',
  styleUrls: ['./esercizio9.component.scss']
})
export class Esercizio9Component extends BaseEsercizio {
  
  output : string = '';
  subscription : Subscription | null = null;

  constructor(private eserciziService : EserciziService) {
    super();
   }

   override esegui(): void {
    this.subscription = this.eserciziService.creaObservableEsercizio9().subscribe({
      next: val => this.output +=  `Valore: ${val}\n`,
      complete: () => this.output += 'Completato'
    })
  }
}
