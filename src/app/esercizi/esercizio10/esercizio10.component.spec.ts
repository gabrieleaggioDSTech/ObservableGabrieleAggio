import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio10Component } from './esercizio10.component';

describe('Esercizio10Component', () => {
  let component: Esercizio10Component;
  let fixture: ComponentFixture<Esercizio10Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio10Component);
      fixture = TestBed.createComponent(Esercizio10Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
