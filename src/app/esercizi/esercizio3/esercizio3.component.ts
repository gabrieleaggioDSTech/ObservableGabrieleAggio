import { Component } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';

@Component({
  selector: 'app-esercizio3',
  templateUrl: './esercizio3.component.html',
  styleUrls: ['./esercizio3.component.scss']
})
export class Esercizio3Component extends BaseEsercizio {

  output: string = '';

  constructor(private eserciziService : EserciziService) {
    super();
   }

  override esegui(): void {
    this.output = 'Vedere Console';
    this.eserciziService.creaObservableEsercizio3();
  }
 

}
