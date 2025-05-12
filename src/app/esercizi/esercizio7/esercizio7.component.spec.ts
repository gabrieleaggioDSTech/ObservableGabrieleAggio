import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio7Component } from './esercizio7.component';

describe('Esercizio7Component', () => {
  let component: Esercizio7Component;
  let fixture: ComponentFixture<Esercizio7Component>;

 beforeEach(async () => {
     await configureTestModule(Esercizio7Component);
     fixture = TestBed.createComponent(Esercizio7Component);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });
 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
