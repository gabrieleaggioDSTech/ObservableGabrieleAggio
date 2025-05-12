import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio5Component } from './esercizio5.component';

describe('Esercizio5Component', () => {
  let component: Esercizio5Component;
  let fixture: ComponentFixture<Esercizio5Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio5Component);
      fixture = TestBed.createComponent(Esercizio5Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
