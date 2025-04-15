import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'esercizi',
    loadChildren: () =>
      import('./esercizi/esercizi.module').then(m => m.EserciziModule)
  },
  { path: '', redirectTo: 'esercizi', pathMatch: 'full' },
  { path: '**', redirectTo: 'esercizi' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
