import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';


import { Esercizio14Component } from './esercizio14.component';

describe('Esercizio14Component', () => {
  let component: Esercizio14Component;
  let fixture: ComponentFixture<Esercizio14Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio14Component);
      fixture = TestBed.createComponent(Esercizio14Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
