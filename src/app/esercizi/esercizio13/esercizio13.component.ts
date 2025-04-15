import { Component, OnInit } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio13',
  templateUrl: './esercizio13.component.html',
  styleUrls: ['./esercizio13.component.scss']
})
export class Esercizio13Component extends BaseEsercizio {
  
  output : string = '';
  subscription : Subscription | null = null;

  constructor(private eserciziService : EserciziService) {
    super();
   }

  override esegui(): void {
    this.subscription = this.eserciziService.creaObservableEsercizio13().subscribe({
      next: val => this.output += `Valore indice del num > 12 (5, 15, 10): ${val}\n`,
      complete: () => this.output += 'Completato\n'
    })
  }

}
