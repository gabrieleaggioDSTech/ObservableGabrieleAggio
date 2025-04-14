import { Component, OnInit } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio7',
  templateUrl: './esercizio7.component.html',
  styleUrls: ['./esercizio7.component.scss']
})
export class Esercizio7Component extends BaseEsercizio{
  
  output : string = '';
  subscription : Subscription | null = null;

  constructor(private eserciziService : EserciziService) {
    super();
   }

   override esegui(): void {
    this.subscription = this.eserciziService.creaObservableEsercizio7().subscribe({
      next: val => this.output +=  `Valore: ${val}\n`,
      complete: () => this.output += 'Completato'
    });
  }


  
}
