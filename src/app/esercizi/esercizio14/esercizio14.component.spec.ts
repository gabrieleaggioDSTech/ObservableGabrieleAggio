import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio14Component } from './esercizio14.component';

describe('Esercizio14Component', () => {
  let component: Esercizio14Component;
  let fixture: ComponentFixture<Esercizio14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
