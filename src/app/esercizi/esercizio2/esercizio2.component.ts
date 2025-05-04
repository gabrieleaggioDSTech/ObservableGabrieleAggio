import { Component } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';

@Component({
  selector: 'app-esercizio2',
  templateUrl: './esercizio2.component.html',
  styleUrls: ['./esercizio2.component.scss']
})
export class Esercizio2Component extends BaseEsercizio{

  output: string = '';
  esercizioId = 2;

  constructor(private eserciziService : EserciziService) {
    super();
   }

   override esegui(): void {
    this.output = 'Vedere Console';
    this.eserciziService.creaObserverEsercizio2();
  }

}
