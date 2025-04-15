import { Component, OnInit } from '@angular/core';
import { Esercizio } from '../model/esericzio.model';
import { EserciziService } from '../services/esercizi.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  esercizi: Esercizio[] = [];

  constructor(private eserciziService : EserciziService) { }

  ngOnInit(): void {
    this.esercizi = this.eserciziService.getEsercizi();
  }

}
