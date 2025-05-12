import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio15Component } from './esercizio15.component';

describe('Esercizio15Component', () => {
  let component: Esercizio15Component;
  let fixture: ComponentFixture<Esercizio15Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio15Component);
      fixture = TestBed.createComponent(Esercizio15Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
