import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio11Component } from './esercizio11.component';

describe('Esercizio11Component', () => {
  let component: Esercizio11Component;
  let fixture: ComponentFixture<Esercizio11Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio11Component);
      fixture = TestBed.createComponent(Esercizio11Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
