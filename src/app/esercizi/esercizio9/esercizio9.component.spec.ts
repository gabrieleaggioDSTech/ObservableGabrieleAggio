import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio9Component } from './esercizio9.component';

describe('Esercizio9Component', () => {
  let component: Esercizio9Component;
  let fixture: ComponentFixture<Esercizio9Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio9Component);
      fixture = TestBed.createComponent(Esercizio9Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
