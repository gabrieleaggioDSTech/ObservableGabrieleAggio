import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'esercizio1', component: Esercizio1Component },
  { path: 'esercizio2', component: Esercizio2Component },
  { path: 'esercizio3', component: Esercizio3Component },
  { path: 'esercizio4', component: Esercizio4Component },
  { path: 'esercizio5', component: Esercizio5Component },
  { path: 'esercizio6', component: Esercizio6Component },
  { path: 'esercizio7', component: Esercizio7Component },
  { path: 'esercizio8', component: Esercizio8Component },
  { path: 'esercizio9', component: Esercizio9Component },
  { path: 'esercizio10', component: Esercizio10Component },
  { path: 'esercizio11', component: Esercizio11Component },
  { path: 'esercizio12', component: Esercizio12Component },
  { path: 'esercizio13', component: Esercizio13Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EserciziRoutingModule { }
