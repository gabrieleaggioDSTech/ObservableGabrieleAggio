import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseEsercizio } from '../../base-esercizio.component';
import { EserciziService } from 'src/app/services/esercizi.service';


@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.scss']
})
export class FiglioComponent15 extends BaseEsercizio implements OnInit {
 
  @Output() numeroGenerato = new EventEmitter<number>();

  generaNumero() {
    const numero = Math.floor(Math.random() * 10) + 1;
    this.numeroGenerato.emit(numero);
  }

  constructor(private eserciziService : EserciziService) {
    super();
   }


   override esegui(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
  }

}
