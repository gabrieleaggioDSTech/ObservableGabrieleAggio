import { Component, OnInit } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio12',
  templateUrl: './esercizio12.component.html',
  styleUrls: ['./esercizio12.component.scss']
})
export class Esercizio12Component extends BaseEsercizio {
  
  output : string = '';
  subscription : Subscription | null = null;
  esercizioId = 12;

  constructor(private eserciziService : EserciziService) {
    super();
   }

   override esegui(): void {
    this.subscription = this.eserciziService.creaObservableEsercizio12().subscribe({
       next: val => this.output += `Valore: ${val}\n`,
      complete: () => this.output += 'Completato\n'
    })
  }
}
