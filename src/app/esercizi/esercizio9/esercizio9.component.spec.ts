import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Esercizio9Component } from './esercizio9.component';

describe('Esercizio9Component', () => {
  let component: Esercizio9Component;
  let fixture: ComponentFixture<Esercizio9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Esercizio9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Esercizio9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
