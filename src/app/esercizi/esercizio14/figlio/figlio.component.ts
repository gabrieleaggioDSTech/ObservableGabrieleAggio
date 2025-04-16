import { Component, Input, OnInit } from '@angular/core';
import { EserciziService } from 'src/app/services/esercizi.service';
import { BaseEsercizio } from '../../base-esercizio.component';
import { Esercizio14Component } from '../esercizio14.component';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent extends BaseEsercizio implements OnInit {
  
  @Input() outputParent: string = "";
  outputChild : string = "Questa Stringa viene dal CHILD";

  constructor(private eserciziService : EserciziService) {
    super();
   }

   override esegui(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
