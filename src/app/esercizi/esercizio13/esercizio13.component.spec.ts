import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio13Component } from './esercizio13.component';

describe('Esercizio13Component', () => {
  let component: Esercizio13Component;
  let fixture: ComponentFixture<Esercizio13Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio13Component);
      fixture = TestBed.createComponent(Esercizio13Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
