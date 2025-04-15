import { Component, OnInit } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio11',
  templateUrl: './esercizio11.component.html',
  styleUrls: ['./esercizio11.component.scss']
})
export class Esercizio11Component extends BaseEsercizio {
 

  output : string = '';
  subscription : Subscription | null = null;

  constructor(private eserciziService : EserciziService) {
    super();
   }

   override esegui(): void {
    this.subscription = this.eserciziService.creaObservableEsercizio11().subscribe({
      next: val => this.output += `Valore: ${val}\n`,
      complete: () => this.output += 'Completato\n'
    })
  }

}
