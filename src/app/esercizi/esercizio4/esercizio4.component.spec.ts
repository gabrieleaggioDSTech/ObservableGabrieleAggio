import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio4Component } from './esercizio4.component';

describe('Esercizio4Component', () => {
  let component: Esercizio4Component;
  let fixture: ComponentFixture<Esercizio4Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio4Component);
      fixture = TestBed.createComponent(Esercizio4Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
