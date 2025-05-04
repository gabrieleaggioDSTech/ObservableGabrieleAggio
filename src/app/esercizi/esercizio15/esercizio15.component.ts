import { Component, OnInit } from '@angular/core';
import { EserciziService } from 'src/app/services/esercizi.service';
import { BaseEsercizio } from '../base-esercizio.component';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-esercizio15',
  templateUrl: './esercizio15.component.html',
  styleUrls: ['./esercizio15.component.scss']
})
export class Esercizio15Component extends BaseEsercizio implements OnInit {
  

  output: string = '';
  esercizioId = 15;

  mostraNumero(numero: number): void {
  this.output = `Numero ricevuto dal figlio: ${numero}`;
  }


  constructor(private eserciziService : EserciziService) {
    super();
   }

  ngOnInit(): void {
  }

  override esegui(): void {
    throw new Error('Method not implemented.');
  }





}
