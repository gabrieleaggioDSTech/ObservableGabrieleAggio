import { Component, OnInit } from '@angular/core';
import { BaseEsercizio } from '../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';

@Component({
  selector: 'app-esercizio14',
  templateUrl: './esercizio14.component.html',
  styleUrls: ['./esercizio14.component.scss']
})
export class Esercizio14Component extends BaseEsercizio implements OnInit {
  
  output : string = "Questa stringa viene dal PARENT";
  mostraFiglio : boolean = false;

  constructor(private eserciziService : EserciziService) { 
    super();
  }

  override esegui(): void {
    this.mostraFiglio = true;
  }

  override reset(): void {
    this.mostraFiglio = false;
  }

  ngOnInit(): void {
  }

}
