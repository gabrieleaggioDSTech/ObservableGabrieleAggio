import { Component } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio5',
  templateUrl: './esercizio5.component.html',
  styleUrls: ['./esercizio5.component.scss']
})
export class Esercizio5Component extends BaseEsercizio {
 
  output : string = '';
  subscription: Subscription | null = null;

  constructor(private eserciziService : EserciziService) { 
    super();
  }

  override esegui(): void {
    this.subscription = this.eserciziService.creaObservableEsercizio5().subscribe({
      next: val => this.output +=  `Valore: ${val}\n`,
      complete: () => this.output += 'Completato\n'
    });
  }


}
