import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio6Component } from './esercizio6.component';

describe('Esercizio6Component', () => {
  let component: Esercizio6Component;
  let fixture: ComponentFixture<Esercizio6Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio6Component);
      fixture = TestBed.createComponent(Esercizio6Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
