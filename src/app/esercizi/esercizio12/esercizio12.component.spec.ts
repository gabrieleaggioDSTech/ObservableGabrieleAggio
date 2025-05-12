import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';
import { configureTestModule } from '../esercizi.spec.utils';

import { Esercizio12Component } from './esercizio12.component';

describe('Esercizio12Component', () => {
  let component: Esercizio12Component;
  let fixture: ComponentFixture<Esercizio12Component>;

  beforeEach(async () => {
      await configureTestModule(Esercizio12Component);
      fixture = TestBed.createComponent(Esercizio12Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
