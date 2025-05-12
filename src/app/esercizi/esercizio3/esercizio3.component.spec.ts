import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio3Component } from './esercizio3.component';

describe('Esercizio3Component', () => {
  let component: Esercizio3Component;
  let fixture: ComponentFixture<Esercizio3Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio3Component);
      fixture = TestBed.createComponent(Esercizio3Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
