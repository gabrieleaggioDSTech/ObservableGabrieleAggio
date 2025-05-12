import { ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestModule } from '../esercizi.spec.utils';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateFakeLoader } from '@ngx-translate/core';

import { Esercizio2Component } from './esercizio2.component';

describe('Esercizio2Component', () => {
  let component: Esercizio2Component;
  let fixture: ComponentFixture<Esercizio2Component>;

   beforeEach(async () => {
    await configureTestModule(Esercizio2Component);
    fixture = TestBed.createComponent(Esercizio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
