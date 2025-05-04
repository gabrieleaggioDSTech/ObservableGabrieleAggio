import { Component } from '@angular/core';
import { EserciziService } from 'src/app/services/esercizi.service';
import { Subscription } from 'rxjs';
import { BaseEsercizio } from '../base-esercizio.component';

@Component({
  selector: 'app-esercizio1',
  templateUrl: './esercizio1.component.html',
  styleUrls: ['./esercizio1.component.scss']
})
export class Esercizio1Component  extends BaseEsercizio {

  output: string = '';
  subscription: Subscription | null = null;
  esercizioId = 1;

  constructor(private eserciziService: EserciziService) { 
    super();
  }

  override esegui(): void {
    this.output = ''
    this.subscription = this.eserciziService.creaObservableEsercizio1().subscribe({
        next: val => this.output += `Valore ricevuto: ${val}\n`,
        complete: () => this.output += 'Observable completato'
    });
  }

  ngOnInit(): void {
  }

}
