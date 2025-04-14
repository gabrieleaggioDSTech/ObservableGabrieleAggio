import { Component, OnInit } from '@angular/core';
import { EserciziService } from 'src/app/services/esercizi.service';
import { BaseEsercizio } from '../base-esercizio.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-esercizio4',
  templateUrl: './esercizio4.component.html',
  styleUrls: ['./esercizio4.component.scss']
})
export class Esercizio4Component extends BaseEsercizio {

  output: string = '';
  subscription: Subscription | null = null;

  constructor(private eserciziService : EserciziService) {
    super();
   }

   override esegui(): void {
    const observer = this.eserciziService.creaObservableEsercizio4();
    this.subscription = observer.subscribe( () => {
      this.output += 'click avvenuto \n';
    });
  }
   
}
