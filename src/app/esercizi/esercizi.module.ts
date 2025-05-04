import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { EserciziRoutingModule } from './esercizi-routing.module';
import { Esercizio1Component } from './esercizio1/esercizio1.component';
import { Esercizio2Component } from './esercizio2/esercizio2.component';
import { Esercizio3Component } from './esercizio3/esercizio3.component';
import { Esercizio4Component } from './esercizio4/esercizio4.component';
import { Esercizio5Component } from './esercizio5/esercizio5.component';
import { Esercizio6Component } from './esercizio6/esercizio6.component';
import { Esercizio7Component } from './esercizio7/esercizio7.component';
import { Esercizio8Component } from './esercizio8/esercizio8.component';
import { Esercizio9Component } from './esercizio9/esercizio9.component';
import { Esercizio10Component } from './esercizio10/esercizio10.component';
import { Esercizio11Component } from './esercizio11/esercizio11.component';
import { Esercizio12Component } from './esercizio12/esercizio12.component';
import { Esercizio13Component } from './esercizio13/esercizio13.component';
import { Esercizio14Component } from './esercizio14/esercizio14.component';
import { FiglioComponent } from './esercizio14/figlio/figlio.component';
import { Esercizio15Component } from './esercizio15/esercizio15.component';
import { FiglioComponent15 } from './esercizio15/figlio/figlio.component';


@NgModule({
  declarations: [
    Esercizio1Component,
    Esercizio2Component,
    Esercizio3Component,
    Esercizio4Component,
    Esercizio5Component,
    Esercizio6Component,
    Esercizio7Component,
    Esercizio8Component,
    Esercizio9Component,
    Esercizio10Component,
    Esercizio11Component,
    Esercizio12Component,
    Esercizio13Component,
    Esercizio14Component,
    FiglioComponent,
    Esercizio15Component,
    FiglioComponent15
  ],
  imports: [
    CommonModule,
    EserciziRoutingModule,
    TranslateModule
  ]
})
export class EserciziModule { }
