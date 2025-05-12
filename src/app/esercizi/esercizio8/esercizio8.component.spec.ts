import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio8Component } from './esercizio8.component';

describe('Esercizio8Component', () => {
  let component: Esercizio8Component;
  let fixture: ComponentFixture<Esercizio8Component>;

 beforeEach(async () => {
     await configureTestModule(Esercizio8Component);
     fixture = TestBed.createComponent(Esercizio8Component);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });
 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
